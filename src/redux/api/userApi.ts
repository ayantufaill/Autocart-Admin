import api from "@/services/api";
import { userData } from "../../types/type";

interface UserApiResponse {
  success: boolean;
  message: string;
  data: userData[];
}

export const fetchUsers = async (): Promise<UserApiResponse> => {
  const response = await api.get("/users");
  return response.data;
};
