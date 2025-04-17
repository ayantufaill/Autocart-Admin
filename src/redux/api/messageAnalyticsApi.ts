import api from "@/services/api";

export const messageAnalyticsApi = async () => {
  const response = await api.get(
    "/dashboard-analytics/reported-messages-counts"
  );
  return response.data;
};
