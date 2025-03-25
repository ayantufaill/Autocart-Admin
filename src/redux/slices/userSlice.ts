import { userData } from "@/types/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "/users",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await payload;
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to register."
      );
    }
  }
);

interface UserState {
  loading: boolean;
  success: boolean;
  error: string | null;
  message: string | null;
  data: userData;
}

const initialState: UserState = {
  loading: false,
  success: false,
  error: null,
  message: null,
  data: {
    id: "",
    name: "",
    email: "",
    role: "",
    status: "",
    phoneNumber: "",
    createdAt: "",
    updatedAt: "",
    _count: {
      ads: 0,
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {})
      .addCase(fetchUserData.fulfilled, (state, action) => {})
      .addCase(fetchUserData.rejected, (state, action) => {});
  },
});

export default userSlice.reducer;
