import api from "@/services/api";

export const fetchAdsDataApi = async () => {
  const response = await api.get("/dashboard-analytics/ads");
  return response.data;
};
