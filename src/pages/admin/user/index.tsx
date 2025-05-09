import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
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

import { fetchSearchUsers, fetchUsers } from "@/redux/slices/userSlice";

const User: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const [filteredName, setFilteredName] = useState<string>("");

  const allUsers = users.length;

  const activeUsers = users.filter(
    (user: { status: string }) => user.status === "Active"
  ).length;
  const suspendedUsers = users.filter(
    (user) => user.status === "Suspended"
  ).length;
  const bannedUsers = users.filter((user) => user.status === "Banned").length;

  useEffect(() => {
    if (filteredName) {
      dispatch(
        fetchSearchUsers({
          url: "users",
          search: filteredName,
          targetKey: "users",
        })
      );
    } else {
      dispatch(fetchUsers());
    }
  }, [dispatch, filteredName]);

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100%" }}>
      <ColorTabs
        tabData={[
          { label: "All Users", count: allUsers, path: "/admin/user" },
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
        defaultTab={0}
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
          <UserTable Users={users} />
        )}
      </Container>
    </div>
  );
};

export default User;
