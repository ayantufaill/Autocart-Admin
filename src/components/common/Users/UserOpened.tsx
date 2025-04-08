import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Cancel, Edit, Pause } from "@mui/icons-material";
import UserDetails from "./UserDetails";
import { UserById } from "@/redux/slices/userSlice";

const configStatus = {
  ACTIVE: "#07B007",
  BANNED: "#EF4444",
  SUSPENDED: "#EAB308",
};

interface UserDetailsProps {
  status: "ACTIVE" | "SUSPENDED" | "BANNED"; // default value
  // userData: {
  //   name: string;
  //   country: string;
  //   email: string;
  //   area: string;
  //   phoneNumber: string;
  //   type: string;
  //   followers: string;
  //   following: string;
  // } | null;
  userData: UserById | null;
}

const UserOpened: React.FC<UserDetailsProps> = ({ status, userData }) => {
  return (
    <div>
      {/* Header */}
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        py={3}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Box
            sx={{
              bgcolor: configStatus[status],
              width: { xs: "12px", md: "14px", xl: "16px" },
              height: { xs: "12px", md: "14px", xl: "16px" },
              borderRadius: "3px",
            }}
          />
          <Typography
            sx={{
              color: "#1F2937",
              fontWeight: 500,
              fontSize: { xs: "16px", md: "20px", xl: "22px" },
            }}
          >
            {userData?.name}
          </Typography>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#60A5FA", textTransform: "none" }}
            startIcon={<Edit />}
          >
            Edit User
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#F97316", textTransform: "none" }}
            startIcon={<Pause />}
          >
            {status === "SUSPENDED" ? "Unsuspend User" : "Suspend User"}
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#F87171", textTransform: "none" }}
            startIcon={<Cancel />}
          >
            {status === "BANNED" ? "Lift Ban on User" : "Ban User"}
          </Button>
        </Stack>
      </Stack>
      {/* Details */}
      <UserDetails status={status} userData={userData} />
    </div>
  );
};

export default UserOpened;
