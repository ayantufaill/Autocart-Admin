import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchSearch, fetchSearchApi } from "../api/fetchSearchApi";

export const fetchSearch = createAsyncThunk(
  "global/fetchSearch",
  async ({
    url,
    status,
    search,
    targetKey,
  }: {
    url: string;
    status?: string;
    search?: string;
    targetKey: string;
  }) => {
    console.log(url);
    const params: FetchSearch = {
      url: url,
      targetKey: targetKey,
      search: search || "",
      status: status || "",
    };

    return await fetchSearchApi(params);
  }
);
