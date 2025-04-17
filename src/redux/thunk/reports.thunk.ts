import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchReportedAdsApi,
  fetchReportedUsersApi,
  markReportAsReadApi,
} from "../api/ReportsApi";

export const fetchReportedAds = createAsyncThunk(
  "fetch/reportedAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchReportedAdsApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch reported ads"
      );
    }
  }
);

export const fetchReportedUsers = createAsyncThunk(
  "fetch/reportedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchReportedUsersApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch reported users"
      );
    }
  }
);

export const markReportAsRead = createAsyncThunk(
  "reports/markReportAsRead",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await markReportAsReadApi(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch reported users"
      );
    }
  }
);
