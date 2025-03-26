import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersDataApi } from "../api/usersApi";

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

// Thunk to fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = await fetchUsersDataApi();
  return transformUsers(data);
});
