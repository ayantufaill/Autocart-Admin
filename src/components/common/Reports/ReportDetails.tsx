import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Cancel, Edit, Pause } from "@mui/icons-material";
const userData = [
  {
    label: "Name",
    value: "AbdulMuizz Ayeleke",
  },
  {
    label: "Country",
    value: "Nigeria",
  },
  {
    label: "Email Address",
    value: "ayelekeabdulmuizz@gmail.com",
  },
  {
    label: "Area",
    value: "Lagos",
  },
  {
    label: "Phone Number",
    value: "+2348034254781",
  },
  {
    label: "Type",
    value: "Private Seller",
  },
  {
    label: "Followers",
    value: "500",
  },
  {
    label: "Following",
    value: "850",
  },
];

const configStatus = {
  Active: "#07B007",
  Banned: "#EF4444",
  Suspended: "#EAB308",
};

interface UserDetailsProps {
  status: "Active" | "Suspended" | "Banned";
}

const UserDetails: React.FC<UserDetailsProps> = ({ status }) => {
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={3}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Box
            sx={{
              bgcolor: configStatus[status],
              width: "16px",
              height: "16px",
              borderRadius: "3px",
            }}
          />
          <Typography
            sx={{ color: "#1F2937", fontWeight: 700, fontSize: "22px" }}
          >
            {userData[0].value}
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
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
            {status === "Suspended" ? "Unsuspend User" : "Suspend User"}
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#F87171", textTransform: "none" }}
            startIcon={<Cancel />}
          >
            {status === "Banned" ? "Lift Ban on User" : "Ban User"}
          </Button>
        </Stack>
      </Stack>
      <Paper sx={{ p: 3, bgcolor: "#FFF" }}>
        <Typography
          sx={{ color: "#1F2937", fontWeight: 700, fontSize: "22px" }}
        >
          User Details
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              height={"100%"}
              gap={2}
            >
              {userData.map((user, index) => (
                <Stack
                  key={index}
                  spacing={1}
                  sx={{
                    pl: index % 2 !== 0 ? 2 : 0,
                  }}
                >
                  <Typography
                    fontSize={"16px"}
                    sx={{
                      color: "#9CA3AF",
                    }}
                  >
                    {user.label}
                  </Typography>
                  <Typography
                    sx={{ color: "#1F2937", fontWeight: 600, fontSize: "22px" }}
                  >
                    {user.value}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <img
              alt="user"
              src="/Images/user/user.svg"
              style={{
                width: "70%",
                maxWidth: "100%",
                borderRadius: "6px",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserDetails;
