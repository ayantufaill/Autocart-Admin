import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchBannedUsers, fetchUsers } from "@/redux/slices/userSlice";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import {
  Container,
  CircularProgress,
  Box,
  Alert,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { fetchSearch } from "@/redux/thunk/fetchSearch";

const BannedUsers: React.FC = () => {
  const [filteredName, setFilteredName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const BannedUsers = useSelector((state: RootState) => state.user.bannedUsers);
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    if (filteredName) {
      dispatch(
        fetchSearch({
          url: "users",
          status: "BANNED",
          search: filteredName,
          targetKey: "bannedUsers",
        })
      );
    } else {
      dispatch(fetchBannedUsers());
    }
    dispatch(fetchUsers());
  }, [dispatch, filteredName]);

  const activeUsers = users.filter(
    (user: any) => user.status === "Active"
  ).length;
  const suspendedUsers = users.filter(
    (user: any) => user.status === "Suspended"
  ).length;
  const bannedUsers = BannedUsers.filter(
    (user: any) => user.status === "Banned"
  ).length;

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh" }}>
      <ColorTabs
        tabData={[
          { label: "All Users", count: users.length, path: "/admin/user" },
          {
            label: "Active Users",
            count: activeUsers,
            path: "/admin/active/user",
          },
          {
            label: "Suspended Users",
            count: suspendedUsers,
            path: "/admin/suspended/user",
          },
          {
            label: "Banned Users",
            count: bannedUsers,
            path: "/admin/banned/user",
          },
        ]}
        defaultTab={3}
      />

      <Container sx={{ pb: 10 }}>
        <TextField
          placeholder={"Search User"}
          variant="outlined"
          onChange={(e) => setFilteredName(e.target.value)}
          value={filteredName}
          sx={{
            fontSize: "12px",
            color: "#BFC3CB",
            marginBottom: 2,
            backgroundColor: "#F9F9F9",
            width: { xs: "100%", md: "70%" },
            maxWidth: "600px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              maxHeight: "43px",
            },
            "& ::placeholder": {
              color: "#CBCED4",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#BFC3CB" }} />
              </InputAdornment>
            ),
          }}
        />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <Alert severity="error">{error}</Alert>
          </Box>
        ) : (
          <UserTable Users={BannedUsers} />
        )}
      </Container>
    </div>
  );
};

export default BannedUsers;
