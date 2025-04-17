import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReportedMessagesApi } from "../api/messageManagementApi";

export interface Message {
  status: "Reported" | "Flagged";
  SenderId: string;
  ReceiverId: string;
  MessageContent: string;
  Reason: string;
  Date: string;
}

interface MessagesState {
  messages: Message[];
  loading: boolean;
  error: string | null;
  reportedMessages: Message[];
}

const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
  reportedMessages: [],
};

export const transformMessages = (data: any): Message[] => {
  const rawReports = data || [];

  return rawReports.map((report: any) => ({
    status: "Reported",
    SenderId: report.message.senderId,
    ReceiverId: report.message.receiverId,
    MessageContent: report.message.content,
    Reason: report.reason,
    Date: new Date(report.createdAt).toLocaleDateString(),
  }));
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
        state.reportedMessages = transformMessages(action.payload);

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
