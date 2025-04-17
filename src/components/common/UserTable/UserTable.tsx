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
} from "@mui/material";

interface User {
  status: "Active" | "Suspended" | "Banned";
  name: string;
  email: string;
  adsPosted: number;
  userId: string;
  imageUrl: string;
  regDate: string;
}

interface UsersTableProps {
  Users: User[];
}
const statusConfig: Record<
  string,
  { color: string; text: string; textColor: string; icon: string }
> = {
  Active: {
    color: "#F0FDF4",
    text: "Active",
    textColor: "#9CA3AF",
    icon: "#07B007",
  },
  Suspended: {
    color: "#FEFCE8",
    text: "Suspended",
    textColor: "#9CA3AF",
    icon: "#EAB308",
  },
  Banned: {
    color: "#FEF2F2",
    text: "Banned",
    textColor: "#9CA3AF",
    icon: "#EF4444",
  },
};
const UsersTable: React.FC<UsersTableProps> = ({ Users }) => {
  const router = useRouter();
  return (
    <div>
      <TableContainer
        sx={{
          minWidth: "100%",
          width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
          overflowX: { xs: "scroll", md: "auto" },
          mt: 2,
        }}
      >
        <Table stickyHeader>
          <TableHead
            sx={{ visibility: Users.length > 0 ? "visible" : "hidden" }}
          >
            <TableRow sx={{ borderBottom: "1.5px solid #CACACA" }}>
              {[
                "Status",
                "Name",
                "Email",
                "Ads Posted",
                "User ID",
                "Registration Date",
              ].map((header, index) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    backgroundColor: "#F3F4F6",
                    color: "#9CA3AF",
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
            {Users.map((user, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
                    "&:last-child td": { borderBottom: 0 },
                  }}
                >
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "12px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        backgroundColor:
                          statusConfig[user.status]?.color || "#D3D3D3", // Default gray
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontWeight: "light",
                        color:
                          statusConfig[user.status]?.textColor || "#000000", // Default black
                        cursor: "pointer",
                        transition: "opacity 0.2s",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() => {
                        router.push("/admin/user/" + user?.userId);
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          backgroundColor:
                            statusConfig[user.status]?.icon || "#808080", // Default gray icon
                          borderRadius: "3px",
                        }}
                      />
                      {user.status}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      borderLeft: "0.5px solid #CACACA",
                    }}
                  >
                    {user.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderLeft: "0.5px solid #CACACA",
                      fontWeight: 600,
                    }}
                  >
                    {user.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderLeft: "0.5px solid #CACACA",
                      fontWeight: 600,
                    }}
                  >
                    {user.adsPosted}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: { xs: "column", lg: "row" },
                      alignItems: "center",
                      gap: "8px",
                      borderLeft: "0.5px solid #CACACA",
                      fontWeight: 600,
                    }}
                  >
                    <Avatar
                      src="/Images/Ads/profile.png"
                      sx={{ width: 24, height: 24 }}
                    />
                    {user.userId}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderLeft: "0.5px solid #CACACA",
                      fontWeight: 600,
                    }}
                  >
                    {user.regDate}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default UsersTable;
