import { createSlice } from "@reduxjs/toolkit";
import {
  fetchReportedAds,
  fetchReportedUsers,
  markReportAsRead,
} from "../thunk/reports.thunk";

export interface Report {
  id: string;
  status: "Unread" | "Read";
  reporterId: string;
  title: string;
  category: string;
  imageUrl: string;
  issueDate: string;
}

const transformReport = (data: any): Report[] => {
  const reports = data || [];

  return reports.map((report: any) => ({
    id: report.id,
    status: report.isRead ? "Read" : "Unread",
    reporterId: report.reportedById,
    title: report.ad?.itemName || "Untitled",
    category: report.ReportCategory || "Uncategorized",
    imageUrl: report.reportedBy.profileImage || "",
    issueDate: new Date(report.createdAt).toLocaleDateString(),
  }));
};

interface ReportsState {
  loading: boolean;
  error: string | null;
  reportedAds: Report[];
  reportedUsers: Report[];
}

const initialState: ReportsState = {
  loading: false,
  error: null,
  reportedAds: [],
  reportedUsers: [],
};

const ReportsSlice = createSlice({
  name: "reportsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportedAds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportedAds.fulfilled, (state, action) => {
        state.loading = false;
        state.reportedAds = transformReport(action.payload);
        console.log(transformReport(action.payload));
        if (action.payload?.length === 0)
          state.error = "No Reported Ads found. ";
      })
      .addCase(fetchReportedAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //   Reported Users
      .addCase(fetchReportedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.reportedUsers = transformReport(action.payload);
        if (action.payload?.length === 0)
          state.error = "No Reported Users found. ";
      })
      .addCase(fetchReportedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //   mark status read
      .addCase(markReportAsRead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markReportAsRead.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(markReportAsRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ReportsSlice.reducer;
