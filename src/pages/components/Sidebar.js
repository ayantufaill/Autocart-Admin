import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

const Sidebar = ({ open, toggleSidebar }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon /> },
    { text: "Ads Management", icon: <AdsClickOutlinedIcon /> },
    { text: "Users Management", icon: <PeopleOutlineOutlinedIcon /> },
    { text: "Reporting & Analytics", icon: <AnalyticsOutlinedIcon /> },
    { text: "Financial Management", icon: <MonetizationOnOutlinedIcon /> },
    { text: "Email Management", icon: <EmailOutlinedIcon /> },
    { text: "Message Management", icon: <ChatOutlinedIcon /> },
    { text: "Story Managements", icon: <AutoStoriesOutlinedIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? { xs: "200px", lg: "300px" } : "80px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? { xs: "200px", lg: "300px" } : "80px",
          transition: "width 0.3s",
          boxSizing: "border-box",
          overflowX: "hidden",
          height: "100vh",
        },
      }}
    >
      {/* Sidebar Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <IconButton onClick={toggleSidebar}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Divider />

      {/* Sidebar Menu Items */}
      <List sx={{ pl: open ? { xs: "20px", lg: "40px" } : "0px" , height:'100vh'}}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => setActiveIndex(index)}
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
              padding: open ? "10px 16px" : "10px",
              justifyContent: open ? "start" : "center",
              height: {xs:"68px", lg:'58px'},
              width: "100%",
            }}
          >
            <ListItemIcon
              sx={{
                color: activeIndex === index ? "white" : "inherit",
                minWidth: open ? "36px" : "auto",
                height: "36px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
