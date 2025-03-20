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

interface Finance {
  adID: string;
  userId: string;
  transactionId: string;
  amount: string;
  date: string;
  imageUrl: string;
  userImageUrl: string;
}

interface FinanceTableProps {
  finance: Finance[];
}

const FinanceTable: React.FC<FinanceTableProps> = ({ finance }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredFinance = finance.filter((finance) => {
    return finance.adID.toLowerCase().includes(search.toLowerCase());
  });

  //   console.log(filteredFinance);

  return (
    <Paper sx={{ backgroundColor: "#F9F9F9", p: 2 }}>
      <TextField
        placeholder="Search Ads"
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
              <img
                src="/Images/Ads/search.png"
                alt="Search"
                width={18}
                height={18}
              />
            </InputAdornment>
          ),
        }}
      />

      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 900, borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              {["Ad Id", "User Id", "Transaction Id", "Amount", "Date"].map(
                (header) => (
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
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredFinance.map((finance, index) => (
              <TableRow
                key={finance.adID}
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
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <img
                      src={finance.imageUrl}
                      alt="Ad Image"
                      width="30"
                      height="30"
                      style={{ borderRadius: "5px" }}
                    />
                    {finance.adID}
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <Avatar
                      src={finance.userImageUrl}
                      sx={{ width: 24, height: 24 }}
                    />
                    {finance.userId}
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {finance.transactionId}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {finance.amount}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {finance.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FinanceTable;
