import api from "@/services/api";

export interface FetchSearch {
  search: string;
  status: string;
  url: string;
  targetKey: string; // where in state want to store the data
}

export const fetchSearchApi = async ({
  url,
  search,
  status,
  targetKey,
}: FetchSearch) => {
  const response = await api.get(`/${url}?status=${status}&search=${search}`);

  return { data: response.data, targetKey };
};
