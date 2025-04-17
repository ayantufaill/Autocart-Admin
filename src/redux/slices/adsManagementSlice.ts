import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchActiveAdsApi,
  fetchAdsMangementApi,
  fetchExpiredAdsApi,
  fetchPendingAdsApi,
  fetchRejectedAdsApi,
  fetchSearchAdsApi,
} from "../api/adsManagement";
import { FetchSearch } from "@/types/type";

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

export interface Ad {
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
  // change type here
  ads: any[];
  loading: boolean;
  error: string | null;
  activeAds: any[];
  expiredAds: any[];
  pendingAds: any[];
  rejectedAds: any[];
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

export const formattedAds = (adsArray: any[]) => {
  return adsArray.map((ad) => ({
    id: ad.id,
    sellerType:
      ad.user?.role === "PRIVATE_SELLER"
        ? "Private Seller"
        : ("Trade Seller" as "Private Seller" | "Trade Seller"),
    title: ad.itemName,
    category: ad.adType || "Unknown",
    userId: ad.user?.id || "N/A",
    status:
      ad.status === "ACTIVE"
        ? "Active"
        : ad.status === "REJECTED"
        ? "Rejected"
        : ("Pending" as "Active" | "Pending" | "Rejected"),
    dateCreated: new Date(ad.createDate).toLocaleDateString("en-GB"),
    expiryDate: "20/02/2025",
    imageUrl: ad.uploadImagesForAd?.[0] || "/images/default.jpg",
  }));
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
      console.log();
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

export const fetchSearchAds = createAsyncThunk(
  "fetch/searchAds",
  async ({
    url,
    status,
    search,
    targetKey,
  }: {
    url: string;
    status?: string;
    search?: string;
    targetKey: string;
  }) => {
    console.log(url);
    const params: FetchSearch = {
      url: url,
      targetKey: targetKey,
      search: search || "",
      status: status || "",
    };

    return await fetchSearchAdsApi(params);
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
      })

      // active
      .addCase(fetchActiveAds.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveAds.fulfilled, (state, action) => {
        state.loading = false;
        const newAds = formattedAds(action.payload);
        state.activeAds = newAds || [];
        state.error = newAds.length > 0 ? null : "No Active ads found";
      })
      .addCase(fetchActiveAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // expired
      .addCase(fetchExpiredAds.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpiredAds.fulfilled, (state, action) => {
        state.loading = false;
        const newAds = formattedAds(action.payload);
        state.expiredAds = newAds || [];
        state.error = newAds.length > 0 ? null : "No Expired ads found";
      })
      .addCase(fetchExpiredAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // pending
      .addCase(fetchPendingAds.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingAds.fulfilled, (state, action) => {
        state.loading = false;
        const newAds = formattedAds(action.payload);
        state.pendingAds = newAds || [];
        state.error = newAds.length > 0 ? null : "No Pending ads found";
      })
      .addCase(fetchPendingAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // rejected
      .addCase(fetchRejectedAds.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRejectedAds.fulfilled, (state, action) => {
        state.loading = false;
        const newAds = formattedAds(action.payload);
        state.rejectedAds = newAds || [];
        state.error = newAds.length > 0 ? null : "No Rejected ads found";
      })
      .addCase(fetchRejectedAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // fetch ads search
      .addCase(fetchSearchAds.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchAds.fulfilled, (state, action) => {
        state.loading = false;

        const { data, targetKey } = action.payload;

        if (targetKey && state.hasOwnProperty(targetKey)) {
          if (targetKey == "ads") {
            (state as any)[targetKey] = data.data;
          } else {
            (state as any)[targetKey] = formattedAds(data.data);
          }
        }
        if (formattedAds(data.data).length === 0) state.error = "Ads not found. ";
        
      })
      .addCase(fetchSearchAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adsSlice.reducer;
