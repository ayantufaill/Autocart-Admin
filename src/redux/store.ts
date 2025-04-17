import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import adsAnalyticsReducer from "./slices/adsSlice";
import userAnalyticsReducer from "./slices/userAnalyticsSlice";
import adsReducer from "./slices/adsManagementSlice";
import messagesReducer from "./slices/messageManagementSlice";
import storyReducer from "./slices/storySlice";
import messageAnalyticsReducer from "./slices/messageAnalyticsSlice";
import storyAnalyticsReducer from "./slices/storyAnalyticsSlice";
import reportedReducer from "./slices/ReportsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userReducer,
    adsAnalytics: adsAnalyticsReducer,
    userAnalytics: userAnalyticsReducer,
    ads: adsReducer,
    messages: messagesReducer,
    story: storyReducer,
    messageAnalytics: messageAnalyticsReducer,
    storyAnalytics: storyAnalyticsReducer,
    reports: reportedReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
