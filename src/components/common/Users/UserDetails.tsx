import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { UserById } from "@/redux/slices/userSlice";

interface UserDetailsProps {
  status: "ACTIVE" | "SUSPENDED" | "BANNED" | "";
  userData: UserById | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ status, userData }) => {
  return (
    <Paper sx={{ p: 3, bgcolor: "#FFF", borderRadius: 3 }}>
      <Typography
        sx={{
          color: "#1F2937",
          fontWeight: 500,
          fontSize: { xs: "16px", md: "20px", xl: "22px" },
        }}
      >
        User Details
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
            height={"100%"}
            gap={2}
          >
            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.name || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Country
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.address || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Email Address
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.email || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                {/* Area */}
                Dealer License
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.dealerLicense || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Phone Number
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.phoneNumber || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Type
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.role || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Status
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.status || "N/A"}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography
                fontSize={{ xs: "12px", md: "14px" }}
                sx={{ color: "#9CA3AF" }}
              >
                Vat Number
              </Typography>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px", xl: "22px" },
                }}
              >
                {userData?.vatNumber || "N/A"}
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <img
            alt="user"
            src={"/Images/user/user.svg"} // change fallback => userData?.profileImage ||
            style={{
              width: "70%",
              maxWidth: "100%",
              borderRadius: "6px",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserDetails;
