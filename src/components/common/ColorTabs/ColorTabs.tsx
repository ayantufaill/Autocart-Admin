import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Avatar,
  Badge,
  Typography,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";

type TabDataItem = {
  label: string;
  count?: number;
  path: string;
  status: string; // added type of status
};

type ColorTabsProps = {
  tabData: TabDataItem[];
  defaultTab: number;
  setStatus: (status: string) => void; // added setStatus
};

const ColorTabs: React.FC<ColorTabsProps> = ({
  tabData,
  defaultTab = 0,
  setStatus, // added setStatus
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const route = useRouter();

  return (
    <Box
      sx={{
        bgcolor: "#F9F9F9",
        py: 2,
        minWidth: "100%",
        width: { xs: "280px", sm: "500px", md: "700px", lg: "100%" },
        overflowX: { xs: "auto" },
      }}
    >
      <Container>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          scrollButtons="auto"
          textColor="primary"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .css-s2t35c-MuiTabs-scroller": {
              overflow: "auto !important",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
          }}
        >
          {tabData.map((tab, index) => (
            <Tab
              disableTouchRipple
              onClick={() => {
                // route.push(tab.path)
                setStatus(tab.status); // added setStatus
                console.log(tab.status);
              }}
              key={index}
              sx={{ px: 0 }}
              label={
                <Box display="flex" alignItems="center">
                  <Typography
                    sx={{
                      fontWeight: selectedTab === index ? 600 : 500,
                      color: selectedTab === index ? "white" : "#9CA3AF",
                      bgcolor:
                        selectedTab === index ? "#07B007" : "transparent",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                    }}
                  >
                    {tab.label} {tab.count && "("}
                    {tab.count}
                    {tab.count && ")"}
                  </Typography>
                </Box>
              }
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default ColorTabs;
