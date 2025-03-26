import { UnknownAction, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
