"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  useMediaQuery,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Settings } from "@mui/icons-material";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const route = useRouter();
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const [user, setUser] = useState<null | { name: string; email: string }>(
    null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
              {user?.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "green" }}>
              {user?.email}
            </Typography>
          </Box>

          <Avatar
            src="/Images/Header/image.png"
            alt="Profile"
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              bgcolor: "red",
            }}
          ></Avatar>
        </Box>
      )}

      <Box
        position={"relative"}
        sx={{
          ml: isMobile ? 2 : 5,
          mr: isMobile ? 0 : 3,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <NotificationsNoneIcon
          onClick={() => {
            route.push("/admin/notification/active");
          }}
          sx={{
            backgroundColor:
              route.pathname === "/admin/notification/active" ||
              route.pathname === "/admin/notification/empty"
                ? "#07B007"
                : "transparent",
            color:
              route.pathname === "/admin/notification/active" ||
              route.pathname === "/admin/notification/empty"
                ? "white"
                : "black",
            padding: "3px",
            borderRadius: "3px",
            cursor: "pointer",
            width: "32px",
            height: "32px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
