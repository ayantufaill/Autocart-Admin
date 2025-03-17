import React from "react";

import {Drawer,
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

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);


  const menuItems = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon /> },
    { text: "Ads Management", icon: <AdsClickOutlinedIcon /> },
    { text: "Users Management", icon: <PeopleOutlineOutlinedIcon /> },
    { text: "Reporting & Analytics", icon: <AnalyticsOutlinedIcon /> },
    { text: "Financial Management", icon: <MonetizationOnOutlinedIcon /> },
    { text: "Email Management", icon: <EmailOutlinedIcon /> },
    { text: "Message Management", icon: <ChatOutlinedIcon /> },
    { text: "Story Management", icon: <AutoStoriesOutlinedIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { xs: isExpanded ? "250px" : "80px", md: "260px", lg: "260px", xl: "280px" },
        borderRight:'1px solid rgb(224, 224, 224)',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: { xs: isExpanded ? "250px" : "80px", md: "260px", lg: "260px", xl: "280px" },
          transition: "width 0.3s",
          boxSizing: "border-box",
          height: "calc(100vh - 80px)",
          position: "relative",
          top: 0,
          overflowY: { xs: "auto", md: "hidden" },
        },
      }}
    >

      {/* Sidebar Menu Items */}
      <List sx={{ height: "100%", overflowY: "auto" }}>
        {menuItems.map((item, index) => (
          <ListItem
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (activeIndex !== index) setActiveIndex(index);
            }}
            key={index}
            sx={{
              backgroundColor: activeIndex === index ? "#07B007" : "transparent",
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
                display: { xs: isExpanded ? "block" : "none", md: "block" },
                whiteSpace: "nowrap",
                ml: "20px",
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
