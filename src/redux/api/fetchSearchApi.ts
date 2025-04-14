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
  let query = url;
  if (status) query += `?status=${status}`;

  const response = await api.get(`/${query}`, { params: { search } });

  return { data: response.data, targetKey };
};
