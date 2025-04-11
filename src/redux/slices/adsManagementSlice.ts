import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchActiveAdsApi,
  fetchAdsMangementApi,
  fetchExpiredAdsApi,
  fetchPendingAdsApi,
  fetchRejectedAdsApi,
} from "../api/adsManagement";

interface User {
  role: string;
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
  backgroundImage: string;
  status: string;
}

interface Ad {
  id: string;
  itemName: string;
  price: number;
  priceCurrency: string;
  location: string;
  condition: string;
  createDate: string;
  status: string;
  vehicleLicenseNumber: string;
  uploadImagesForAd: string[];
  uploadImagesForStory: string[];
  descriptions: string;
  adType: string;
  user: User;
  likes: number;
  views: number;
  shares: number;
  interactions: number;
}

interface AdsState {
  ads: Ad[];
  loading: boolean;
  error: string | null;
  activeAds: Ad[];
  expiredAds: Ad[];
  pendingAds: Ad[];
  rejectedAds: Ad[];
}

const initialState: AdsState = {
  ads: [],
  loading: false,
  error: null,
  activeAds: [],
  expiredAds: [],
  pendingAds: [],
  rejectedAds: [],
};

export const fetchAds = createAsyncThunk(
  "ads/fetchAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAdsMangementApi();
      return response.data; // since the ads array is inside `data`
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch ads"
      );
    }
  }
);

export const fetchActiveAds = createAsyncThunk(
  "ads/fetchActiveAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchActiveAdsApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch ads"
      );
    }
  }
);

export const fetchPendingAds = createAsyncThunk(
  "ads/fetchPendingAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchPendingAdsApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch ads"
      );
    }
  }
);

export const fetchExpiredAds = createAsyncThunk(
  "ads/fetchExpiredAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchExpiredAdsApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch ads"
      );
    }
  }
);

export const fetchRejectedAds = createAsyncThunk(
  "ads/fetchRejectedAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRejectedAdsApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch ads"
      );
    }
  }
);

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAds.fulfilled, (state, action) => {
        state.loading = false;
        state.ads = action.payload || [];
      })
      .addCase(fetchAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adsSlice.reducer;
