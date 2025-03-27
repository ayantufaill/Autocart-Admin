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
import SearchBar from "../SearchBar/SearchBar";

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
  search: string;
}

const statusConfig = {
  Unread: { color: "#FEF2F2", textColor: "#9CA3AF", icon: "#EF4444" },
  Read: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
};

const ReportTable: React.FC<ReportsTableProps> = ({ Reports, search }) => {
  // const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredReports = Reports.filter((Report) =>
    Report.reportId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* <SearchBar
        placeholder="Search Reports"
        search={search}
        setSearch={setSearch}
      /> */}

      <TableContainer
        sx={{
          my: 2,
          minWidth: "100%",
          width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
          overflowX: { xs: "scroll", md: "auto" },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ border: "none" }}>
              {[
                "Status",
                "Reporter User Id",
                "Title",
                "Category",
                "Date Issued",
              ].map((header, index) => (
                <TableCell
                  key={index} // key to change
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
            {filteredReports.map((report, index, arr) => (
              <TableRow
                key={index} // key to change
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
                }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    borderBottom:
                      arr.length - 1 === index ? "none" : "0.5px solid #CACACA",
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
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: {xs: "16px", md: "8px"},
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: "bold",
                    borderBottom:
                      arr.length - 1 === index ? "none" : "0.5px solid #CACACA",
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
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: "bold",
                    borderBottom:
                      arr.length - 1 === index ? "none" : "0.5px solid #CACACA",
                  }}
                >
                  {report.title}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: "bold",
                    borderBottom:
                      arr.length - 1 === index ? "none" : "0.5px solid #CACACA",
                  }}
                >
                  {report.category}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: "bold",
                    borderBottom:
                      arr.length - 1 === index ? "none" : "0.5px solid #CACACA",
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
