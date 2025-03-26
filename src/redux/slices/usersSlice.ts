import api from "@/services/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSearchUsersDataApi } from "../api/usersApi";

interface User {
  userId: string; // Renamed from `id`
  name: string;
  email: string;
  status: "Active" | "Suspended" | "Banned";
  adsPosted: number; // Renamed from `adsCount`
  imageUrl: string;
  regDate: string; // Formatted date
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Function to map API status to correct values
const mapStatus = (status: string): "Active" | "Suspended" | "Banned" => {
  switch (status) {
    case "ACTIVE":
      return "Active";
    case "SUSPENDED":
      return "Suspended";
    case "BANNED":
      return "Banned";
    default:
      return "Active"; // Default fallback
  }
};

// Transform API response to match expected User structure
const transformUsers = (data: any): User[] => {
  return data.data.map((user: any) => ({
    userId: user.id, // ✅ Renaming `id` to `userId`
    name: user.name,
    email: user.email,
    status: mapStatus(user.status),
    adsPosted: user.adsCount || 0, // ✅ Matching expected field, default to 0 if undefined
    imageUrl: user.imageUrl || "/Images/Users/default.png", // ✅ Default image if missing
    regDate: new Date(user.createdAt).toISOString().split("T")[0], // ✅ Format date (YYYY-MM-DD)
  }));
};

// Thunk to fetch users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users"); // API Call
      return transformUsers(response.data); // Transform before returning
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
  loading: false,
  error: null,
};

// Users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}, // Add reducers if needed
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
      });
  },
});

// Selector to get users
export const selectUsers = (state: { users: UsersState }) => state.users.users;
export const selectLoading = (state: { users: UsersState }) =>
  state.users.loading;
export const selectError = (state: { users: UsersState }) => state.users.error;

export default usersSlice.reducer;
