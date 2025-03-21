import React, { useEffect } from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";


import { useRouter } from "next/router";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const route = useRouter();

  useEffect(() => {
    const link = route.pathname.split("/")[2];
    const index = menuItems.findIndex((item) => {
      console.log(link);
      return item.path.split("/")[2] == link;
    });
    setActiveIndex(index);
  }, [route.pathname]);

  const menuItems = [
<<<<<<< HEAD
    { text: "Dashboard", icon: "/Icons/Property 1=dashboard.png", path: "/" },
    { text: "Ads Management", icon: "/Icons/Property 1=ads.png", path: "/admin/ads" },
=======
    { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/" },
    {
      text: "Ads Management",
      icon: <AdsClickOutlinedIcon />,
      path: "/admin/ads",
    },
>>>>>>> 8649188b79aa97833e3a0a85455d57b5913f9bf8
    {
      text: "Users Management",
      icon: "/Icons/Property 1=users.png",
      path: "/admin/user",
    },
    {
      text: "Reporting & Analytics",
      icon: "/Icons/Property 1=analytics.png",
      path: "/admin/report",
    },
    {
      text: "Financial Management",
      icon: "/Icons/Property 1=finance.png",
      path: "/admin/finance",
    },
<<<<<<< HEAD
    { text: "Email Management", icon: "/Icons/Property 1=email.png", path: "/admin/email" },
    { text: "Message Management", icon: "/Icons/Property 1=message.png", path: "/admin/message" },
    { text: "Story Management", icon: "/Icons/Property 1=story.png", path: "/admin/story" },
=======
    {
      text: "Email Management",
      icon: <EmailOutlinedIcon />,
      path: "/admin/email",
    },
    {
      text: "Message Management",
      icon: <ChatOutlinedIcon />,
      path: "/admin/message",
    },
    {
      text: "Story Management",
      icon: <AutoStoriesOutlinedIcon />,
      path: "/admin/story",
    },
>>>>>>> 8649188b79aa97833e3a0a85455d57b5913f9bf8
  ];

  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          height:'100%',
          width: {
            xs: isExpanded ? "250px" : "80px",
            md: "260px",
            lg: "260px",
            xl: "280px",
          },
<<<<<<< HEAD
          borderRight: "1px solid rgb(224, 224, 224)",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {
              xs: isExpanded ? "250px" : "80px",
              md: "260px",
              lg: "260px",
              xl: "280px",
            },
            transition: "width 0.3s",
            boxSizing: "border-box",
            height:'100%',
            position: "relative",
            top: 0,
            overflowY: { xs: "auto", md: "hidden" },
          },
        }}
      >
        <List sx={{ height: "100%", overflowY: "auto" }}>
          {menuItems.map((item, index) => (
            <ListItem
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (activeIndex !== index) 
              setActiveIndex(index);
              route.push(item.path); 
=======
          transition: "width 0.3s",
          boxSizing: "border-box",
          height: "calc(100vh - 80px)",
          position: "relative",
          top: 0,
          overflowY: { xs: "auto", md: "hidden" },
        },
      }}
    >
      <List sx={{ height: "100%", overflowY: "auto" , borderLeft: "0" }}>
        {menuItems.map((item, index) => (
          <ListItem
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (activeIndex !== index) setActiveIndex(index);
              route.push(item.path);
>>>>>>> 8649188b79aa97833e3a0a85455d57b5913f9bf8
            }}
            key={index}
            sx={{
              backgroundColor: activeIndex === index ? "#07B007" : "transparent",
              color: activeIndex === index ? "white" : "#6B7280",
              "&:hover": {
                backgroundColor: "#07B007",
                color: "white",
                "& img": {
                  filter: "brightness(0) invert(1)", 
                },
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

                minWidth: "auto",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& img": {
                  width: "28px",
                  height: "28px",
                  filter: activeIndex === index ? "brightness(0) invert(1)" : "none",
                  transition: "filter 0.3s",
                },
              }}
            >
              <img src={item.icon} alt={item.text} />
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
    </Box>

  );
};

export default Sidebar;
