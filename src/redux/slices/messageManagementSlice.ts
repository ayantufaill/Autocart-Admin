import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReportedMessagesApi } from "../api/messageManagementApi";

interface MessagesState {
  messages: any[];
  loading: boolean;
  error: string | null;
  reportedMessages: any[];
}

const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
  reportedMessages: [],
};

export const fetchReportedMessages = createAsyncThunk(
  "fetch/reportedMessages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchReportedMessagesApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch reported messages"
      );
    }
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportedMessages.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportedMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reportedMessages = action.payload;
        if (state.reportedMessages.length === 0) {
          state.error = "No reported message found. ";
        }
      })
      .addCase(fetchReportedMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default messagesSlice.reducer;
