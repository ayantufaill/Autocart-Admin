import React, { useState } from "react";
import { Tabs, Tab, Box, Avatar, Badge, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const tabData = [
  { label: "All Ads", count: 428 },
  { label: "Pending Ads", count: 37 },
  { label: "Renew Ads", count: 42 },
  { label: "Deleted Ads", count: 84 },
  { label: "Approved Ads", count: 27 },
  { label: "Rejected Ads", count: 58 },
];

const ColorTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box sx={{ width: "100%", bgcolor: "#F9F9F9", p: 2 }}>
      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => setSelectedTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Box display="flex" alignItems="center">
                <Typography
                  sx={{
                    fontWeight: selectedTab === index ? "bold" : "normal",
                    color: selectedTab === index ? "white" : "#9CA3AF",
                    bgcolor: selectedTab === index ? "#07B007" : "transparent",
                    px: 2,
                    py: 1,
                  }}
                >
                  {tab.label} ({tab.count})
                </Typography>
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ColorTabs;
