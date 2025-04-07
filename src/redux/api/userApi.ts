import api from "@/services/api";
import { User } from "@/types/type";

export const fetchUsersDataApi = async () => {
  const response = await api.get("/users");
  return response.data.data as User[];
};
export const fetchActiveUsersDataApi = async () => {
  const response = await api.get(`/users?status=ACTIVE`);
  return response.data.data as User[];
};

export const fetchSuspendedUsersDataApi = async () => {
  const response = await api.get(`/users?status=SUSPENDED`);
  return response.data.data as User[];
};

export const fetchBannedUsersDataApi = async () => {
  const response = await api.get(`/users?status=BANNED`);
  return response.data.data as User[];
};

export const fetchSearchUsersDataApi = async (search: string = "") => {
  const response = await api.get(`/users`, {
    params: { search },
  });
  return response.data.data; // This will return the array of users
};
