import api from "@/services/api";

export const storyAnalyticsApi = async () => {
  const response = await api.get("/dashboard-analytics/story-stats");
  return response.data;
};