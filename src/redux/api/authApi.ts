import api from "@/services/api";
import { registerUser, loginUser } from "@/types/type";

export const registerUserApi = async (data: registerUser) => {
  const response = await api.post("auth/register", data);
  return response.data;
};

export const loginUserApi = async (data: loginUser) => {
  const response = await api.post("auth/login", data);
  return response.data;
};

export const verifyUserApi = async (data: { email: string; code: string }) => {
  const response = await api.post("auth/verifyUser", data);
  return response.data;
};
