import api from "@/services/api";

export const fetchAdsMangementApi = async () => {
  const response = await api.get("/ads");
  return response.data;
};

export const fetchActiveAdsApi = async () => {
  const response = await api.get("/ads?status=ACTIVE");
  console.log(response.data);
  return response.data;
};

export const fetchPendingAdsApi = async () => {
  const response = await api.get("/ads?status=PENDING");
  console.log(response.data);
  return response.data;
};

export const fetchExpiredAdsApi = async () => {
  const response = await api.get("/ads?status=EXPIRED");
  console.log(response.data);
  return response.data;
};

export const fetchRejectedAdsApi = async () => {
  const response = await api.get("/ads?status=REJECTED");
  console.log(response.data);
  return response.data;
};
