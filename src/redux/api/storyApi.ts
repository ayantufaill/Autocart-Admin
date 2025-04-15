import api from "@/services/api";

export const fetchActiveStoriesApi = async () => {
  const response = await api.get("/dashboard-analytics/active-stories");
  return response.data;
};

export const fetchReportedStoriesApi = async () => {
  const response = await api.get("/dashboard-analytics/reported-stories");
  return response.data;
};

export const fetchExpiredStoriesApi = async () => {
  const response = await api.get("/dashboard-analytics/expired-stories");
  return response.data;
};
