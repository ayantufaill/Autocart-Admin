import React, { useEffect } from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const route = useRouter();

  useEffect(() => {
    const routes = route.pathname.split("/").filter(Boolean);

    const menuLinks = menuItems.map(
      (item) => item.path.split("/").filter(Boolean)[1]
    );

    let index = menuLinks.findIndex((link) =>
      routes.some((route) => route === link)
    );

    if (index == -1) {
      index = 0;
    }

    setActiveIndex(index);
  }, [route.pathname]);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/" },
    {
      text: "Ads Management",
      icon: <AdsClickOutlinedIcon />,
      path: "/admin/ads",
    },
    {
      text: "Users Management",
      icon: <PeopleOutlineOutlinedIcon />,
      path: "/admin/user",
    },
    {
      text: "Reporting & Analytics",
      icon: <AnalyticsOutlinedIcon />,
      path: "/admin/report",
    },
    {
      text: "Financial Management",
      icon: <MonetizationOnOutlinedIcon />,
      path: "/admin/finance",
    },
    {
      text: "Email Management",
      icon: <EmailOutlinedIcon />,
      path: "/admin/email",
    },
    {
      text: "Message Management",
      icon: <ChatOutlinedIcon />,
      path: "/admin/messagemanagement",
    },
    {
      text: "Story Management",
      icon: <AutoStoriesOutlinedIcon />,
      path: "/admin/story",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        height: "calc(100vh - 80px)",
        width: {
          xs: "60px",
          sm: "80px",
          md: "260px",
          lg: "260px",
          xl: "280px",
        },
        borderRight: "1px solid rgb(224, 224, 224)",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {
            xs: "60px",
            sm: "80px",
            md: "260px",
            lg: "260px",
            xl: "280px",
          },
          transition: "width 0.3s",
          boxSizing: "border-box",
          height: "calc(100vh - 80px)",
          position: "relative",
          top: 0,
          overflowY: { xs: "auto", md: "hidden" },
          borderRight: "none",
        },
      }}
    >
      <List sx={{ height: "100%", overflowY: "auto", borderLeft: "0" }}>
        {menuItems.map((item, index) => (
          <ListItem
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (activeIndex !== index) setActiveIndex(index);
              route.push(item.path);
            }}
            key={index}
            sx={{
              backgroundColor:
                activeIndex === index ? "#07B007" : "transparent",
              color: activeIndex === index ? "white" : "#6B7280",
              "&:hover": {
                backgroundColor: "#07B007",
                color: "white",
              },
              borderRadius: "10px 0px 0px 10px",
              mt: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              padding: "10px",
              justifyContent: { xs: "center", md: "start" },
              height: { xs: "68px", lg: "58px" },
              width: { md: "calc(100% - 30px)" },
              ml: { md: "30px" },
            }}
          >
            <ListItemIcon
              sx={{
                color: activeIndex === index ? "white" : "inherit",
                minWidth: "auto",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                display: { xs: "none", md: "block" },
                whiteSpace: "nowrap",
                ml: { md: "12px", lg: "20px" },
                typography: "body1",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
