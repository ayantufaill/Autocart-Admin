import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersAnalyticsApi } from "../api/userApi";

interface UserAnalyticsState {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  bannedUsers: number;
  dailyRegistered: number;
  dailyLoggedIn: number;
  loading: boolean;
  error: string | null;
}

const initialState: UserAnalyticsState = {
  totalUsers: 0,
  activeUsers: 0,
  suspendedUsers: 0,
  bannedUsers: 0,
  dailyRegistered: 0,
  dailyLoggedIn: 0,
  loading: false,
  error: null,
};

export const fetchUsersAnalytics = createAsyncThunk(
  "usersAnalytics/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUsersAnalyticsApi(); // already returns response.data
      return response.data.data; // ✅ FIXED: directly return the data block
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch users analytics"
      );
    }
  }
);

const userAnalyticsSlice = createSlice({
  name: "userAnalytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAnalytics.fulfilled, (state, action) => {
        console.log("Redux fulfilled data: ", action.payload);

        const data = action.payload;
        state.totalUsers = data.totalUsers;
        state.activeUsers = data.activeUsers;
        state.suspendedUsers = data.suspendedUsers;
        state.bannedUsers = data.bannedUsers;
        state.dailyRegistered = data.dailyRegistered;
        state.dailyLoggedIn = data.dailyLoggedIn;
      })

      .addCase(fetchUsersAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userAnalyticsSlice.reducer;
