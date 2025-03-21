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

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <TextField
        placeholder="Search Ads"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          marginBottom: 2,
          backgroundColor: "#F9F9F9",
          width: { xs: "90%", md: "70%" },
          maxWidth: "600px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            maxHeight: "48px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Table stickyHeader sx={{ minWidth: 900 }}>
        <TableHead>
          <TableRow>
            {["Ad Id", "User Id", "Transaction Id", "Amount", "Date"].map(
              (header, index) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#F3F4F6",
                    color: "#B2B7C1",
                    padding: "12px",
                    borderLeft: index === 0 ? "0px" : "0.5px solid #CACACA",
                    borderBottom: "none",
                  }}
                >
                  {header}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {/* Empty Row to add gap */}
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "transparent",
                borderBottom: "0px",
              }}
            />
          </TableRow>
          {filteredFinance.map((finance, index, arr) => (
            <TableRow
              key={finance.adID}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
                borderBottom: "0.5px solid #E5E7EB",
              }}
            >
              <TableCell
                sx={{
                  textAlign: "center",
                  padding: "12px",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    fontWeight: 600,
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
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  fontWeight: 600,
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
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  fontWeight: 600,
                }}
              >
                {finance.transactionId}
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  padding: "12px",
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  fontWeight: 600,
                }}
              >
                {finance.amount}
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  padding: "12px",
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  fontWeight: 600,
                }}
              >
                {finance.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FinanceTable;
