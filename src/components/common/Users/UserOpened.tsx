import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Cancel, Edit, Pause } from "@mui/icons-material";
import UserDetails from "./UserDetails";

const configStatus = {
  Active: "#07B007",
  Banned: "#EF4444",
  Suspended: "#EAB308",
};

interface UserDetailsProps {
  status: "Active" | "Suspended" | "Banned";
  userData: { label: string; value: string }[];
}

const UserOpened: React.FC<UserDetailsProps> = ({ status, userData }) => {
  return (
    <div>
      {/* Header */}
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={{ xs: "center", lg: "space-between" }}
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
              fontWeight: 600,
              fontSize: { xs: "16px", md: "20px", xl: "22px" },
            }}
          >
            {/* {userData[0].value} */}
            AbdulMuizz Ayeleke
          </Typography>
        </Stack>
        <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#60A5FA",
              textTransform: "none",
              maxWidth: "220px",
            }}
            startIcon={<Edit />}
          >
            Edit User
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#F97316",
              textTransform: "none",
              maxWidth: "220px",
            }}
            startIcon={<Pause />}
          >
            {status === "Suspended" ? "Unsuspend User" : "Suspend User"}
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#F87171",
              textTransform: "none",
              maxWidth: "220px",
            }}
            startIcon={<Cancel />}
          >
            {status === "Banned" ? "Lift Ban on User" : "Ban User"}
          </Button>
        </Stack>
      </Stack>
      {/* Details */}
      <UserDetails status={status} />
    </div>
  );
};

export default UserOpened;
