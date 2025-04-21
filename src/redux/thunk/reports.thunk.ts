import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchFilterReportedUsersApi,
  fetchReportedAdsApi,
  fetchReportedUsersApi,
  fetchSearchReportedAdsApi,
  fetchSearchReportedStoriesApi,
  fetchSearchReportedUsersApi,
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
        error?.response?.data?.message || "Failed to Mark as Read."
      );
    }
  }
);

export const fetchSearchReportedAds = createAsyncThunk(
  "fetch/searchReportedAds",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetchSearchReportedAdsApi(id);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "No reported Ads found. "
      );
    }
  }
);

export const fetchSearchReportedUsers = createAsyncThunk(
  "fetch/searchReportedUsers",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetchSearchReportedUsersApi(id);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "No reported Users found. "
      );
    }
  }
);

export const fetchSearchReportedStories = createAsyncThunk(
  "fetch/searchReportedStories",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetchSearchReportedStoriesApi(id);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "No reported Stories found. "
      );
    }
  }
);

export const fetchFilterReportedUsers = createAsyncThunk(
  "fetch/filterReportedUsers",
  async (status: boolean, { rejectWithValue }) => {
    try {
      const response = await fetchFilterReportedUsersApi(status);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || `No reported ${status ? "Read" : "Unread"} User found. `
      );
    }
  }
);
