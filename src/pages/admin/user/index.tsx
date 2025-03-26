import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/usersSlice";
import { RootState, AppDispatch } from "@/redux/store";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import { Container } from "@mui/material";

const User: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const activeUsers = users.filter((user) => user.status === "Active").length;
  const suspendedUsers = users.filter(
    (user) => user.status === "Suspended"
  ).length;
  const bannedUsers = users.filter((user) => user.status === "Banned").length;

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
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
        defaultTab={0}
      />
      <Container sx={{ pb: 10 }}>
        {loading ? <p>Loading...</p> : <UserTable Users={users} />}
      </Container>
    </div>
  );
};

export default User;
