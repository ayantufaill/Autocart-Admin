import React, { useState } from "react";
import { Tabs, Tab, Box, Avatar, Badge, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter } from "next/router";

type TabDataItem = {
  label: string;
  count?: number;
  path: string;
};

type ColorTabsProps = {
  tabData: TabDataItem[];
  defaultTab: number;
};

const ColorTabs: React.FC<ColorTabsProps> = ({ tabData, defaultTab = 0 }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const route = useRouter();

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
            disableTouchRipple
            onClick={() => route.push(tab.path)}
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
