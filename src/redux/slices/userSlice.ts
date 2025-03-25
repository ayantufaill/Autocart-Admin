import { userData } from "@/types/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../api/userApi";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

interface UserState {
  loading: boolean;
  success: boolean;
  error: string | null;
  message: string | null;
  data: userData[];
}

const initialState: UserState = {
  loading: false,
  success: false,
  error: null,
  message: null,
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload?.message;
        state.data = action.payload?.data;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
