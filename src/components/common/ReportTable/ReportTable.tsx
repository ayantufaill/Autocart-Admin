import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
// import { Report, Search } from "@mui/icons-material";
// import SearchBar from "../SearchBar/SearchBar";
import { Report } from "@/redux/slices/ReportsSlice";
import { markReportAsRead } from "@/redux/thunk/reports.thunk";
import { useAppDispatch } from "@/redux/hooks";

interface ReportsTableProps {
  Reports: Report[];
  entityType?: "Ads" | "Users"
}

const statusConfig = {
  Unread: { color: "#FEF2F2", textColor: "#9CA3AF", icon: "#EF4444" },
  Read: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
};

const ReportTable: React.FC<ReportsTableProps> = ({ entityType, Reports }) => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <TableContainer
      sx={{
        my: 2,
        minWidth: "100%",
        width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
        overflowX: { xs: "scroll", md: "auto" },
      }}
    >
      <Table stickyHeader>
        <TableHead sx={{ visibility: Reports.length === 0 ? "hidden" : "visible" }}>
          <TableRow sx={{ border: "none" }}>
            {[
              "Status",
              `${entityType === "Ads" ? "Reported Ad Id" : "Reported User Id"}`,
              "Title",
              "Category",
              "Date Issued",
            ].map((header, index) => (
              <TableCell
                key={header}
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#F3F4F6",
                  color: "#9CA3AF",
                  borderLeft: index !== 0 ? "0.5px solid #CACACA" : "none",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow sx={{ border: "none" }}>
            <TableCell sx={{ border: "none" }} />
          </TableRow>
          {Reports.map((report, index) => (
            <TableRow
              key={report.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
                '&:last-child td': { borderBottom: 0 }
              }}
            >
              <TableCell
                sx={{
                  textAlign: "center",
                  padding: "12px",
                }}
              >
                <Box
                  onClick={() => {
                    if (report.status == "Unread") {
                      console.log("dispatch action")
                      console.log(report.id)
                      dispatch(markReportAsRead(report.id));
                    }
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: statusConfig[report.status].color,
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    color: statusConfig[report.status].textColor,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor: statusConfig[report.status].icon,
                      borderRadius: "3px",
                      fontWeight: "bold",
                    }}
                  />
                  {report.status}
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  // alignItems: "center",
                  gap: { xs: "16px", md: "10px" },
                  borderLeft: "0.5px solid #CACACA",
                }}
              >
                <Avatar
                  src={report.imageUrl}
                  sx={{ width: 24, height: 24 }}
                />
                <Typography sx={{
                  textAlign: "start",
                  fontWeight: "bold",
                }}>
                  {report.id}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: "bold",
                }}
              >
                {report.title}
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: "bold",
                }}
              >
                {report.category}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: "bold",
                }}
              >
                {report.issueDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReportTable;
