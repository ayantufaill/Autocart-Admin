import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { messageAnalyticsApi } from "../api/messageAnalyticsApi";

interface MessageAnalyticsState {
  counts: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: MessageAnalyticsState = {
  counts: {
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  },
  loading: false,
  error: null,
};

export const fetchMessageAnalytics = createAsyncThunk(
  "fetch/messageAnalytics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await messageAnalyticsApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch reported messages"
      );
    }
  }
);

const messageAnalyticsSlice = createSlice({
  name: "messageAnalytics",
  initialState,
  reducers: {},
  extraReducers: (buildder) => {
    buildder.addCase(fetchMessageAnalytics.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    buildder.addCase(fetchMessageAnalytics.fulfilled, (state, action) => {
      state.loading = false;
      state.counts = action.payload;
    });
    buildder.addCase(fetchMessageAnalytics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default messageAnalyticsSlice.reducer;
