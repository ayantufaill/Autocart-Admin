import { createSlice } from "@reduxjs/toolkit";
import { fetchAdsAnalytics } from "../thunk/adsAnalytics.thunk";
import { fetchSearch } from "../thunk/fetchSearch";

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
      })
      .addCase(fetchSearch.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;

        const { data, targetKey } = action.payload;
        // const transformedUsers = data;

        if (targetKey && state.hasOwnProperty(targetKey)) {
          console.log(
            "does state have this property? ",
            state.hasOwnProperty(targetKey)
          );
          (state as any)[targetKey] = data; // change to trnasform user
        }
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adsAnalyticsSlice.reducer;
