import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
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

const UserDetails = () => {
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
              bgcolor: "#07B007",
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
        <Stack>btn</Stack>
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
                    sx={{ color: "#1F2937", fontWeight: 700, fontSize: "22px" }}
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
              src="/Images/user.svg"
              style={{
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
