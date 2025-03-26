import api from "@/services/api";
import { User } from "@/types/type";

export const fetchUsersDataApi = async () => {
  const response = await api.get("/users");
  return response.data.data as User[];
};
export const fetchActiveUsersDataApi = async () => {
  const response = await api.get("/users");
  return response.data.data as User[];
};

export const fetchSearchUsersDataApi = async (search: string = "") => {
  const response = await api.get(`/users`, {
    params: { search },
  });
  return response.data.data; // This will return the array of users
};

// export const fetchTournamentUpcomingDataApi = async () => {
//   const response = await api.get("/tournament/public?tournaments=upcoming");
//   return response.data.data as TornamentState[];
// };
