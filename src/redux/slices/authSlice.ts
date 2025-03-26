import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUserApi, registerUserApi, verifyUserApi } from "../api/authApi";

interface AuthState {
  loading: boolean;
  success: boolean;
  error: string | null;
  message: string | null;
  email: string | null;
  token: string | null; // ✅ Add token state
}

const initialState: AuthState = {
  loading: false,
  success: false,
  error: null,
  message: null,
  email: null,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null, // ✅ Fix SSR issue
};

// Existing Register Thunk
export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await registerUserApi(payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to register."
      );
    }
  }
);

// 🔔 New Verify User Thunk (OTP Verification)
export const verifyUserThunk = createAsyncThunk(
  "auth/verifyUser",
  async (payload: { email: string; code: string }, { rejectWithValue }) => {
    try {
      const response = await verifyUserApi(payload);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "OTP verification failed."
      );
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginUserApi(payload);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
      localStorage.removeItem("token");
    },
    // ✅ New reducer to manually set email
    setAuthEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = "Login successful!";
        state.email = action.payload.email; // Store email in Redux
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.email = action.payload.email; // This comes from backend
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ✅ Handle OTP Verification
      .addCase(verifyUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(verifyUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// ✅ Export both actions now
export const { resetAuthState, setAuthEmail } = authSlice.actions;
export default authSlice.reducer;
