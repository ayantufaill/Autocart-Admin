import api from "@/services/api";

export const fetchReportedMessagesApi = async () => {
  const response = await api.get("/chat/reported-messages");
  return response.data;
};
