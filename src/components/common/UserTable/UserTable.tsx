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

      <TableContainer
        sx={{
          minWidth: "100%",
          width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
          overflowX: { xs: "scroll", md: "auto" },
        }}
      >
        <Table stickyHeader>
          <TableHead>
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
                    color: "#B2B7C1",
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
            {filteredUsers.map((user, index, arr) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
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
                    onClick={() =>
                      router.push(`/admin/user/${user.status.toLowerCase()}`)
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "8px",
                      backgroundColor: statusConfig[user.status].color,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontWeight: "light",
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
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                    borderBottom:
                      index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    borderBottom:
                      index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                    fontWeight: 600,
                  }}
                >
                  {user.email}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    borderBottom:
                      index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
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
                    borderBottom:
                      index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
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
                    borderBottom:
                      index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                    fontWeight: 600,
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
