import { createSlice } from "@reduxjs/toolkit";
import {
  fetchActiveStories,
  fetchExpiredStories,
  fetchReportedStories,
} from "../thunk/story.thunk";
import { fetchSearchReportedStories } from "../thunk/reports.thunk";

export interface Story {
  status: "Active" | "Expired" | "Flagged" | "Reported";
  userimgUrl: string;
  userId: string;
  storyContent: string;
  storyId: string;
  uploadDate: string;
  storyImageUrl: string;
}

interface StoryState {
  story: Story[];
  activeStories: Story[];
  reportedStories: Story[];
  expiredStories: Story[];
  loading: boolean;
  error: string | null;
}

const initialState: StoryState = {
  story: [],
  activeStories: [],
  expiredStories: [],
  reportedStories: [],
  loading: false,
  error: null,
};

const mapStatus = (status: string): "Active" | "Expired" | "Reported" => {
  switch (status) {
    case "ACTIVE":
      return "Active";
    case "REPORTED":
      return "Reported";
    case "EXPIRED":
      return "Expired";
    default:
      return "Active";
  }
};

export const transformStories = (data: any): Story[] => {
  const rawStories = data || [];

  return rawStories.map((item: any) => ({
    status: mapStatus(item?.ad?.status),
    userimgUrl: item.ad?.uploadImagesForAd?.[0] || "/Images/Ads/profile.png",
    userId: item.userId || "Unknown",
    storyContent: item.ad?.descriptions || "No description",
    storyId: item.id || "N/A",
    uploadDate: new Date(item.createdAt).toLocaleDateString(),
    storyImageUrl:
      item.ad?.uploadImagesForStory?.[0] ||
      item.uploadImagesForStory?.[0] ||
      "/Images/Ads/image.png",
  }));
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Active Stories
      .addCase(fetchActiveStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveStories.fulfilled, (state, action) => {
        state.loading = false;
        state.activeStories = transformStories(action.payload);
        console.log(state.activeStories);
        if (state.activeStories.length === 0)
          state.error = "Active stories not found";
      })
      .addCase(fetchActiveStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Reported Stories
      .addCase(fetchReportedStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportedStories.fulfilled, (state, action) => {
        state.loading = false;
        state.reportedStories = transformStories(action.payload);
        if (state.reportedStories.length === 0)
          state.error = "Reported stories not found";
      })
      .addCase(fetchReportedStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Expired Stories
      .addCase(fetchExpiredStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpiredStories.fulfilled, (state, action) => {
        state.loading = false;
        state.expiredStories = transformStories(action.payload);
        if (state.expiredStories.length === 0)
          state.error = "Expired stories not found";
      })
      .addCase(fetchExpiredStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // search reported stories
      .addCase(fetchSearchReportedStories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchReportedStories.fulfilled, (state, action) => {
        state.loading = false;
        state.reportedStories = transformStories(action.payload);
        if (state.reportedStories.length === 0) {
          state.error = "No Reported Stories found. ";
        }
      })
      .addCase(fetchSearchReportedStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default storySlice.reducer;
