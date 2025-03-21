import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TextField,
  Avatar,
  InputAdornment,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";

interface Report {
  status: "Unread" | "Read";
  reportId: string;
  title: string;
  category: string;
  imageUrl: string;
  issueDate: string;
}

interface ReportsTableProps {
  Reports: Report[];
}

const statusConfig = {
  Unread: { color: "#FEF2F2", textColor: "#9CA3AF", icon: "#EF4444" },
  Read: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
};

const ReportTable: React.FC<ReportsTableProps> = ({ Reports }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredReports = Reports.filter((Report) =>
    Report.reportId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TextField
        placeholder="Search Reports"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          marginBottom: 2,
          backgroundColor: "#F9F9F9",
          width: "600px",
          borderRadius: "10px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              {[
                "Status",
                "Reporter User Id",
                "Title",
                "Category",
                "Date Issued",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#F3F4F6",
                    color: "#6B7280",
                    padding: "12px",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredReports.map((report, index) => (
              <TableRow
                key={report.category}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
                  borderBottom: "0.5px solid #E5E7EB",
                }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  <Box
                    onClick={() =>
                      router.push(
                        `/admin/report/${report.status.toLowerCase()}`
                      )
                    }
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
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    border: "0.5px solid #CACACA",
                    fontWeight: "bold",
                  }}
                >
                  <Avatar
                    src={report.imageUrl}
                    sx={{ width: 24, height: 24 }}
                  />
                  {report.reportId}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0.5px solid #CACACA",
                    fontWeight: "bold",
                  }}
                >
                  {report.title}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0.5px solid #CACACA",
                    fontWeight: "bold",
                  }}
                >
                  {report.category}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0.5px solid #CACACA",
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
    </div>
  );
};

export default ReportTable;
