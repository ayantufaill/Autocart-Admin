import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Cancel, Delete, Edit, Pause } from "@mui/icons-material";
import UserDetails from "./UserDetails";
import { deleteUserById, UserById } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const configStatus = {
  ACTIVE: "#07B007",
  BANNED: "#EF4444",
  SUSPENDED: "#EAB308",
};

interface UserDetailsProps {
  status: "ACTIVE" | "SUSPENDED" | "BANNED"; // default value
  userData: UserById | null;
}

const UserOpened: React.FC<UserDetailsProps> = ({ status, userData }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDelete = (id: string) => {
    dispatch(deleteUserById(id));
    router.push("/admin/user");
  };

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
            color="error"
            onClick={() => userData?.id && handleDelete(userData.id)}
          >
            <Delete />
          </Button>

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
