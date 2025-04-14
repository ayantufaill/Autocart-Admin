import api from "@/services/api";
import { FetchSearch, User } from "@/types/type";

export const fetchUsersDataApi = async () => {
  const response = await api.get("/users");
  return response.data.data as User[];
};

// fetch User By Id
export const fetchUserByIdApi = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// Delete User By Id
export const deleteUserByIdApi = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
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

export const fetchUsersAnalyticsApi = async () => {
  const response = await api.get("/dashboard-analytics/users");
  return response.data;
};

export const fetchSearchUsersApi = async ({
  url,
  search,
  status,
  targetKey,
}: FetchSearch) => {
  let query = url;
  if (status) query += `?status=${status}`;

  const response = await api.get(`/${query}`, { params: { search } });

  return { data: response.data, targetKey };
};
