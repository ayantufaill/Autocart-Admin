import api from "@/services/api";
import { UserData } from "next-auth/providers/42-school";

export const getUserDataApi = async (): Promise<UserData> => {
  const response = await api.get("/users");
  return response.data;
};
