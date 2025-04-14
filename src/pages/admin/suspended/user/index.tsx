import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchSearchUsers, fetchSuspendedUsers, fetchUsers } from "@/redux/slices/userSlice";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import {
  Container,
  Box,
  InputAdornment,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { Cancel, Pause, Search } from "@mui/icons-material";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";

const BannedUsers: React.FC = () => {
  const [filteredName, setFilteredName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const SuspendedUsers = useSelector(
    (state: RootState) => state.user.suspendedUsers
  );
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  useEffect(() => {
    if (filteredName) {
      dispatch(
        fetchSearchUsers({
          url: "users",
          status: "SUSPENDED",
          search: filteredName,
          targetKey: "suspendedUsers",
        })
      );
    } else {
      dispatch(fetchSuspendedUsers());
    }
  }, [dispatch, filteredName]);

  const activeUsers = users.filter(
    (user: any) => user.status === "Active"
  ).length;
  const suspendedUsers = SuspendedUsers.filter(
    (user: any) => user.status === "Suspended"
  ).length;
  const bannedUsers = users.filter(
    (user: any) => user.status === "Banned"
  ).length;

  return (
    <div style={{ minHeight: "100%" }}>
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
        defaultTab={2}
      />
      <Box sx={{ minHeight: "58vh", backgroundColor: "#F9F9F9", }}>
        <Container>
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
            <Loading />
          ) : error ? (
            <ErrorState error={error} />
          ) : (
            <UserTable Users={SuspendedUsers} />
          )}
        </Container>
      </Box>
      <Stack spacing={4} direction={{ xs: "column", sm: "row" }} pt={3} pl={6}>
        <Button
          variant="contained"
          sx={{ bgcolor: "#F97316", textTransform: "none", width: 209 }}
          startIcon={<Pause />}
        >
          Unsuspend All Users
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#F87171", textTransform: "none", width: 159 }}
          startIcon={<Cancel />}
        >
          Ban all Users
        </Button>
      </Stack>
    </div>
  );
};

export default BannedUsers;
