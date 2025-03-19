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

const statusConfig = {
  Active: { color: "#F0FDF4", textColor: "#047857", icon: "#07B007" },
  Suspended: { color: "#FEFCE8", textColor: "#D97706", icon: "#EAB308" },
  Banned: { color: "#FEF2F2", textColor: "#B91C1C", icon: "#EF4444" },
};

const UsersTable: React.FC<UsersTableProps> = ({ Users }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredUsers = Users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TextField
        placeholder="Search Users"
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
                "Name",
                "Email",
                "Ads Posted",
                "User ID",
                "Registration Date",
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
            {filteredUsers.map((user, index) => (
              <TableRow
                key={user.userId}
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
                      router.push(`/admin/user/${user.status.toLowerCase()}`)
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      backgroundColor: statusConfig[user.status].color,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      color: statusConfig[user.status].textColor,
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                      "&:hover": { opacity: 0.8 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: statusConfig[user.status].icon,
                        borderRadius: "3px",
                      }}
                    />
                    {user.status}
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {user.email}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {user.adsPosted}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "0.5px solid #CACACA",
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
                    border: "0.5px solid #CACACA",
                  }}
                >
                  {user.regDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;
