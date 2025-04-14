import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchActiveUsers, fetchSearchUsers, fetchUsers } from "@/redux/slices/userSlice";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import {
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";

const ActiveUsers: React.FC = () => {
  const [filteredName, setFilteredName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const ActiveUsers = useSelector((state: RootState) => state.user.activeUsers);
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(localStorage.getItem("usersCount"))
  }, [])

  useEffect(() => {
    if (filteredName) {
      dispatch(
        fetchSearchUsers({
          url: "users",
          status: "ACTIVE",
          search: filteredName,
          targetKey: "activeUsers",
        })
      );
    } else {
      dispatch(fetchActiveUsers());
    }
  }, [dispatch, filteredName]);

  const activeUsers = ActiveUsers.filter(
    (user: any) => user.status === "Active"
  ).length;
  const suspendedUsers = users.filter(
    (user: any) => user.status === "Suspended"
  ).length;
  const bannedUsers = users.filter(
    (user: any) => user.status === "Banned"
  ).length;

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100%" }}>
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
        defaultTab={1}
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
          <Loading />
        ) : error ? (
          <ErrorState error={error} />
        ) : (
          <UserTable Users={ActiveUsers} />
        )}
      </Container>
    </div>
  );
};

export default ActiveUsers;
