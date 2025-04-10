import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdsDataApi } from "../api/adsApi";

export const fetchAdsAnalytics = createAsyncThunk(
  "adsAnalytics/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAdsDataApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch ads analytics"
      );
    }
  }
);
