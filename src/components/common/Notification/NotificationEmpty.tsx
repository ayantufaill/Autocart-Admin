import { Box, Typography } from "@mui/material";
import React from "react";

const NotificationEmpty = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 80px)",
        backgroundColor: "#F9F9F9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "108px",
          py: "24px",
          px: { xs: "20px", sm: "60px" },
        }}
      >
        <Box
          sx={{
            width: "222px",
            height: "40px",
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#1F2937",
              fontSize: { xs: "18px", sm: "20px", lg: "22px" },
            }}
          >
            Notification
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", lg: "18px" },
              color: "#9CA3AF",
            }}
          >
            0
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "calc(100% - 188px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "200px", sm: "410px" },
            height: "86px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "10px",
          }}
        >
          <Box sx={{ width: { xs: "160px", sm: "410px" } }}>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px", lg: "22px" },
                color: "#1F2937",
                fontWeight: 500,
              }}
            >
              Empty
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#9CA3AF",
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
              width: { xs: "200px", sm: "410px" },
            }}
          >
            There is no notification at the moment
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationEmpty;
