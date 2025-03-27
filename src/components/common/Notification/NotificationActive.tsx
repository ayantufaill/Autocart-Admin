import { Box, Typography, Button } from "@mui/material";
import React from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

const NotificationActive = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F9F9F9",
        px: { xs: "20px", sm: "40px", md: "50px", lg: "60px" },
      }}
    >
      <Box
        sx={{
          height: "108px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "space-around", sm: "space-between" },
          alignItems: { sm: "center" },
        }}
      >
        <Box
          sx={{
            width: { xs: "160px", sm: "222px" },
            height: "40px",
            display: "flex",
            gap: { xs: "12px", sm: "24px" },
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#999DA4",
              fontSize: { xs: "18px", sm: "20px", lg: "22px" },
            }}
          >
            Notification
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", lg: "18px" },
              color: "#D0D3D8",
            }}
          >
            14
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            py: 1,
            bgcolor: "#A5C5F8",
            maxWidth: "144px",
          }}
          startIcon={<FileCopyOutlinedIcon />}
        >
          Read All
        </Button>
      </Box>

      <Box
        sx={{
          width: "260px",
          height: "40px",
          display: "flex",
          gap: { xs: "12px", sm: "24px" },
          alignItems: "center",
          mt: { xs: 1, sm: 0 },
        }}
      >
        <Box
          sx={{
            width: "16px",
            height: "16px",
            bgcolor: "#8FD98F",
            borderRadius: "4px",
          }}
        ></Box>
        <Typography
          sx={{
            color: "#999DA4",
            fontSize: { xs: "18px", sm: "20px", lg: "22px" },
          }}
        >
          BMW Sport
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationActive;
