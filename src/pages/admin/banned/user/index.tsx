import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchActiveUsers, fetchBannedUsers } from "@/redux/slices/userSlice";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import { Container, CircularProgress } from "@mui/material";

const BannedUsers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    dispatch(fetchBannedUsers());
    console.log("fetch banners: ", fetchBannedUsers);
  }, [dispatch]);

  console.log("Users Dataaa:", users);

  const activeUsers = users.filter(
    (user: any) => user.status === "Active"
  ).length;
  const suspendedUsers = users.filter(
    (user: any) => user.status === "Suspended"
  ).length;
  const bannedUsers = users.filter(
    (user: any) => user.status === "Banned"
  ).length;

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

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
        defaultTab={3}
      />
      <Container sx={{ pb: 10 }}>
        <UserTable Users={users} />
      </Container>
    </div>
  );
};

export default BannedUsers;
