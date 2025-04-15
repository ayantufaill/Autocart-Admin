import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storyAnalyticsApi } from "../api/storyAnalytics";

interface StoryAnalyticsState {
  counts: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: StoryAnalyticsState = {
  counts: {
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  },
  loading: false,
  error: null,
};

export const fetchStoryAnalytics = createAsyncThunk(
  "fetch/storyAnalytics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await storyAnalyticsApi();
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch story analytics"
      );
    }
  }
);

const storyAnalyticsSlice = createSlice({
  name: "storyAnalytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoryAnalytics.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStoryAnalytics.fulfilled, (state, action) => {
      state.loading = false;
      state.counts = action.payload;
    });
    builder.addCase(fetchStoryAnalytics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default storyAnalyticsSlice.reducer;
