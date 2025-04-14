import { createSlice } from "@reduxjs/toolkit";
import { fetchAdsAnalytics } from "../thunk/adsAnalytics.thunk";

interface StatusCount {
  status: string;
  count: number;
}

interface AdsAnalyticsState {
  totalAds: number;
  todayAdsCount: number;
  statusCounts: StatusCount[];
  loading: boolean;
  error: string | null;
}

const initialState: AdsAnalyticsState = {
  totalAds: 0,
  todayAdsCount: 0,
  statusCounts: [],
  loading: false,
  error: null,
};

const adsAnalyticsSlice = createSlice({
  name: "adsAnalytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdsAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdsAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.totalAds = action.payload.totalAds;
        state.todayAdsCount = action.payload.todayAdsCount;
        state.statusCounts = action.payload.statusCounts;
      })
      .addCase(fetchAdsAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adsAnalyticsSlice.reducer;
