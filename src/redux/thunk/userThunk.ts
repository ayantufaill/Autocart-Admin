import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchActiveUsersDataApi,
  fetchBannedUsersDataApi,
  fetchSuspendedUsersDataApi,
  fetchUsersDataApi,
} from "../api/userApi";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Suspended" | "Banned";
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  adsCount: number;
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
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: mapStatus(user.status),
    phoneNumber: user.phoneNumber,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    adsCount: user._count.ads,
  }));
};

export const fetchActiveUsers = createAsyncThunk(
  "users/fetchActiveUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchActiveUsersDataApi();
      return data.map((user: any) => ({
        status:
          user.status?.charAt(0).toUpperCase() +
            user.status?.slice(1).toLowerCase() || "Active",
        name: user.name,
        email: user.email,
        adsPosted: user.adsPosted || 0,
        userId: user.userId,
        imageUrl: user.imageUrl || "/Images/default-user.png",
        regDate: user.regDate || "N/A",
      }));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchSuspendedUsers = createAsyncThunk(
  "users/fetchSuspendedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchSuspendedUsersDataApi();
      return data.map((user: any) => ({
        status:
          user.status?.charAt(0).toUpperCase() +
            user.status?.slice(1).toLowerCase() || "Suspended",
        name: user.name,
        email: user.email,
        adsPosted: user.adsPosted || 0,
        userId: user.userId,
        imageUrl: user.imageUrl || "/Images/default-user.png",
        regDate: user.regDate || "N/A",
      }));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchBannedUsers = createAsyncThunk(
  "users/fetchBannedUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchBannedUsersDataApi();
      return data.map((user: any) => ({
        status:
          user.status?.charAt(0).toUpperCase() +
            user.status?.slice(1).toLowerCase() || "Banned",
        name: user.name,
        email: user.email,
        adsPosted: user.adsPosted || 0,
        userId: user.userId,
        imageUrl: user.imageUrl || "/Images/default-user.png",
        regDate: user.regDate || "N/A",
      }));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = await fetchUsersDataApi();
  return transformUsers(data);
});
