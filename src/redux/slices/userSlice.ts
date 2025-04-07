import api from "@/services/api";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { fetchSearchUsersDataApi } from "../api/userApi";

interface User {
  userId: string;
  name: string;
  email: string;
  status: "Active" | "Suspended" | "Banned";
  adsPosted: number;
  imageUrl: string;
  regDate: string;
}

interface UsersState {
  users: User[];
  activeUsers: User[];
  suspendedUsers: User[];
  bannedUsers: User[];
  loading: boolean;
  error: string | null;
}

const mapStatus = (status: string): "Active" | "Suspended" | "Banned" => {
  switch (status) {
    case "ACTIVE":
      return "Active";
    case "SUSPENDED":
      return "Suspended";
    case "BANNED":
      return "Banned";
    default:
      return "Active";
  }
};

const transformUsers = (data: any): User[] => {
  return data.data.map((user: any) => ({
    userId: user.id,
    name: user.name,
    email: user.email,
    status: mapStatus(user.status),
    adsPosted: user.adsCount || 0,
    imageUrl: user.imageUrl || "/Images/Users/default.png",
    regDate: user.regDate || "N/A",
  }));
};

export const fetchActiveUsers = createAsyncThunk(
  "users/fetchActiveUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users?status=ACTIVE");
      return transformUsers(response.data);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch active users");
    }
  }
);

export const fetchSuspendedUsers = createAsyncThunk(
  "users/fetchSuspendedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users?status=SUSPENDED");
      return transformUsers(response.data);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch active users");
    }
  }
);

export const fetchBannedUsers = createAsyncThunk(
  "users/fetchBannedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users?status=BANNED");
      return transformUsers(response.data);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch active users");
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users");
      return transformUsers(response.data);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch users");
    }
  }
);
export const fetchSearchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (search: string = "") => {
    return await fetchSearchUsersDataApi(search);
  }
);

const initialState: UsersState = {
  users: [],
  activeUsers: [],
  suspendedUsers: [],
  bannedUsers: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ✅ Fetch Active Users
      .addCase(fetchActiveUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchActiveUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchSuspendedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuspendedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.suspendedUsers = action.payload.length > 0 ? action.payload : [];
        if (action.payload.length === 0) state.error = "No Suspended Users";
      })
      .addCase(fetchSuspendedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchBannedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBannedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.bannedUsers = action.payload.length > 0 ? action.payload : [];
        if (action.payload.length === 0) state.error = "No Banned Users";
      })
      .addCase(fetchBannedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "Failed to fetch banned users";
      });
  },
});

export const selectUsers = (state: { user: UsersState }) => state.user.users;

export const selectActiveUsers = createSelector(
  [selectUsers],
  (users) => users.filter((user: User) => user.status === "Active").length
);

export const selectSuspendedUsers = createSelector(
  [selectUsers],
  (users) => users.filter((user: User) => user.status === "Suspended").length
);

export const selectBannedUsers = createSelector(
  [selectUsers],
  (users) => users.filter((user: User) => user.status === "Banned").length
);

export const selectLoading = (state: { user: UsersState }) =>
  state.user.loading;
export const selectError = (state: { user: UsersState }) => state.user.error;

export default usersSlice.reducer;
