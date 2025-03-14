"use client";

import React from "react";
import {
  Box,
  Avatar,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#DCFCE7",
        padding: isMobile ? "10px" : "10px 20px",
        height: "80px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1, height: "100%" }}
      >
        <Image
          src="/Images/Header/logo.png"
          alt="Logo"
          width={49}
          height={38}
          style={{ objectFit: "contain" }}
        />
      </Box>

      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "auto",
            height: "100%",
          }}
        >
          <Box
            sx={{
              mr: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "right",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "green" }}
            >
              Ayeleke Abdulmuizz
            </Typography>
            <Typography variant="body2" sx={{ color: "green" }}>
              ayelekeabdulmuizz@gmail.com
            </Typography>
          </Box>

          <Avatar
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/Images/Header/image.png"
              alt="Profile"
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
          </Avatar>
        </Box>
      )}

      <Box
        sx={{
          ml: isMobile ? 2 : 5,
          mr: isMobile ? 0 : 3,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          src="/Images/Header/notification.png"
          alt="Notification"
          width={29}
          height={30}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default Header;
