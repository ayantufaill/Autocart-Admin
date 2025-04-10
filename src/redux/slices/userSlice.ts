import api from "@/services/api";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  deleteUserByIdApi,
  fetchSearchUsersDataApi,
  fetchUserByIdApi,
} from "../api/userApi";
import { toast } from "react-toastify";

interface User {
  userId: string;
  name: string;
  email: string;
  status: "Active" | "Suspended" | "Banned";
  adsPosted: number;
  imageUrl: string;
  regDate: string;
}

export interface UserById {
  address: string | null;
  backgroundImage: string | null;
  businessName: string | null;
  createdAt: string;
  dealerLicense: string;
  email: string;
  id: string;
  is_emailVerified: boolean;
  lastLogin: string | null;
  name: string;
  password: string;
  phoneNumber: string;
  profileImage: string;
  role: "SUPER_ADMIN" | "ADMIN" | "USER";
  status: "ACTIVE" | "SUSPENDED" | "BANNED";
  updatedAt: string;
  vatNumber: string;
}

interface UsersState {
  users: User[];
  activeUsers: User[];
  suspendedUsers: User[];
  bannedUsers: User[];
  loading: boolean;
  error: string | null;
  userById: UserById | null; // added
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

// Fetch User by ID thunk
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId: string, { rejectWithValue }) => {
    try {
      const userData = await fetchUserByIdApi(userId);
      return userData;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch user");
    }
  }
);

// Delete User by ID thunk
export const deleteUserById = createAsyncThunk(
  "users/deleteUserById",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await deleteUserByIdApi(userId);
      console.log(response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to Delete user");
    }
  }
);

const initialState: UsersState = {
  users: [],
  activeUsers: [],
  suspendedUsers: [],
  bannedUsers: [],
  loading: false,
  error: null,
  userById: null,
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
      })
      // Get user by id
      .addCase(fetchUserById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.userById = action.payload?.data;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // delete user by id
      .addCase(deleteUserById.pending, (state, action) => {
        console.log("pending payload", action.payload);
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        // toast.success(action.payload);
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
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
