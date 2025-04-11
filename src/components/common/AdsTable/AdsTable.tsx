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
  Stack,
  Typography,
} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

interface Ad {
  id: string;
  sellerType: "Private Seller" | "Trade Seller";
  title: string;
  category: string;
  userId: string;
  status:
    | "Active"
    | "Pending"
    | "Rejected"
    | "Expired"
    | "Flagged"
    | "Reported";
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
  Expired: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
  Reported: { color: "#FEF2F2", textColor: "#9CA3AF", icon: "#EF4444" },
  Flagged: { color: "#FEFCE8", textColor: "#9CA3AF", icon: "#EAB308" },
};

const sellerConfig = {
  "Private Seller": { icon: "#A855F7", color: "#FAF5FF" },
  "Trade Seller": { icon: "#06B6D4", color: "#ECFEFF" },
};

const AdsTable: React.FC<AdsTableProps> = ({ ads }) => {
  // const [search, setSearch] = useState("");
  const router = useRouter();

  // const filteredAds = ads.filter((ad) =>
  //   ad.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      {/* <SearchBar
        placeholder="Search Ads"
        search={search}
        setSearch={setSearch}
      /> */}
      <TableContainer
        sx={{
          minWidth: "100%",
          width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
          overflowX: { xs: "scroll", md: "auto" },
          mt: 2,
        }}
      >
        <Table stickyHeader>
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
              ].map((header, index) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    backgroundColor: "#F3F4F6",
                    color: "#9CA3AF",
                    visibility: ads.length > 0 ? "visible" : "hidden",
                    borderLeft: index === 0 ? "0px" : "0.5px solid #CACACA",
                  }}
                >
                  {header}
                </TableCell>
              ))}
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
            {ads.map((ad, index) => (
              <TableRow
                key={ad.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
                  "&:last-child td": { border: 0 },
                }}
              >
                {/* ✅ Clickable Status */}
                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                  }}
                >
                  <Box
                    onClick={() =>
                      router.push(`/admin/ads/${ad.status.toLowerCase()}`)
                    } // ✅ Status Click Event
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      backgroundColor: statusConfig[ad.status].color,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: statusConfig[ad.status].textColor,
                      minWidth: "100px",
                      cursor: "pointer", // ✅ Pointer Cursor
                      transition: "opacity 0.2s ease-in-out",
                      "&:hover": { opacity: 0.8 }, // ✅ Hover Effect
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

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography variant="subtitle2" fontWeight={600}>
                      {ad.id}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        alignItems: { xs: "left", lg: "center" },
                        gap: 1,
                        bgcolor: sellerConfig[ad.sellerType].color,
                        p: "6px 12px",
                        borderRadius: 1,
                        fontSize: "10px",
                        color: "#9CA3AF",
                        fontWeight: "light",
                      }}
                    >
                      <Box
                        sx={{
                          width: 7,
                          height: 7,
                          bgcolor: sellerConfig[ad.sellerType].icon,
                          borderRadius: "50%",
                        }}
                      />
                      {ad.sellerType}
                    </Box>
                  </Stack>
                </TableCell>

                {/* ✅ Clickable Title */}
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                  }}
                >
                  <Box
                    onClick={() => router.push("/admin/ads/active")} // ✅ Click event
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      cursor: "pointer", // ✅ Pointer cursor
                      transition: "color 0.2s ease-in-out",
                      "&:hover": { color: "#2563EB" }, // ✅ Hover effect
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
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                  }}
                >
                  {ad.category}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
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
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                  }}
                >
                  {ad.dateCreated}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                  }}
                >
                  {ad.expiryDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdsTable;
