import api from "@/services/api";

export const fetchReportedMessagesApi = async () => {
  const response = await api.get("/dashboard-analytics/reported-messages");
  return response.data;
};
