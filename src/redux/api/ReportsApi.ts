import api from "@/services/api";

export const fetchReportedAdsApi = async () => {
  const response = await api.get("/dashboard-analytics/reported-ads/");
  return response.data;
};

export const fetchReportedUsersApi = async () => {
  const response = await api.get("/dashboard-analytics/reported-users/");
  return response.data;
};

export const markReportAsReadApi = async (id: string) => {
  const response = await api.patch(
    `/dashboard-analytics/reported-ads/${id}/read`
  );
  return response.data;
};
