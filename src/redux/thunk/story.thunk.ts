import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchActiveStoriesApi,
  fetchExpiredStoriesApi,
  fetchReportedStoriesApi,
} from "../api/storyApi";

export const fetchActiveStories = createAsyncThunk(
  "story/fetchActiveStories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchActiveStoriesApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch story analytics"
      );
    }
  }
);

export const fetchReportedStories = createAsyncThunk(
  "story/fetchReportedStories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchReportedStoriesApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch reported stories"
      );
    }
  }
);

export const fetchExpiredStories = createAsyncThunk(
  "story/fetchExpiredStories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchExpiredStoriesApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch expired stories"
      );
    }
  }
);
