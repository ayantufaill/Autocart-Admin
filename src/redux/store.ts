import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import adsAnalyticsReducer from "./slices/adsSlice";
import userAnalyticsReducer from "./slices/userAnalyticsSlice";
import adsReducer from "./slices/adsManagementSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userReducer,
    adsAnalytics: adsAnalyticsReducer,
    userAnalytics: userAnalyticsReducer,
    ads: adsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
