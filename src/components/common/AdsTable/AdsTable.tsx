import React, { useState } from "react";
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

interface Ad {
  id: string;
  sellerType: "Private Seller" | "Trade Seller";
  title: string;
  category: string;
  userId: string;
  status: "Active" | "Pending" | "Rejected";
  dateCreated: string;
  expiryDate: string;
  imageUrl: string;
}

interface AdsTableProps {
  ads: Ad[];
}

const statusConfig = {
  Active: { color: "#F0FDF4", textColor: "#047857", icon: "#07B007" },
  Pending: { color: "#FEFCE8", textColor: "#D97706", icon: "#EAB308" },
  Rejected: { color: "#FEF2F2", textColor: "#B91C1C", icon: "#EF4444" },
};

const AdsTable: React.FC<AdsTableProps> = ({ ads }) => {
  const [search, setSearch] = useState("");

  const filteredAds = ads.filter((ad) =>
    ad.title.toLowerCase().includes(search.toLowerCase())
  );

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

      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              {[
                "Status",
                "Ad ID",
                "Title",
                "Category",
                "User ID",
                "Date Created",
                "Expiry Date",
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
            {filteredAds.map((ad, index) => (
              <TableRow
                key={ad.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
                  borderBottom: "0.5px solid #E5E7EB",
                }}
              >
                {/* Status Cell */}
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
                      backgroundColor: statusConfig[ad.status].color,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: statusConfig[ad.status].textColor,
                      minWidth: "100px",
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: statusConfig[ad.status].icon,
                        borderRadius: "3px",
                      }}
                    />
                    {ad.status}
                  </Box>
                </TableCell>

                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{ad.id}</span>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor:
                          ad.sellerType === "Private Seller"
                            ? "#FAF5FF"
                            : "#ECFEFF",
                        color: "#9CA3AF",
                        padding: "2px 6px",
                        fontSize: "11px",
                        fontWeight: "500",
                        borderRadius: "4px",
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          backgroundColor:
                            ad.sellerType === "Private Seller"
                              ? "#A855F7"
                              : "#06B6D4",
                          borderRadius: "50%",
                          marginRight: "4px",
                        }}
                      />
                      {ad.sellerType}
                    </Box>
                  </Box>
                </TableCell>

                {/* Title */}
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
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
                      src="/Images/Ads/image.png"
                      alt={ad.title}
                      width="30"
                      height="30"
                      style={{ borderRadius: "5px" }}
                    />
                    <span>{ad.title}</span>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {ad.category}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
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
                      src="/Images/Ads/profile.png"
                      sx={{ width: 24, height: 24 }}
                    />
                    <span>{ad.userId}</span>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {ad.dateCreated}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {ad.expiryDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AdsTable;
