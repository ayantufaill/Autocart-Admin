import api from "@/services/api";

export const fetchAdsMangementApi = async () => {
  const response = await api.get("/ads");
  return response.data;
};
