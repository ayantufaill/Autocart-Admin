import * as React from "react";
import { useRouter } from "next/router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect } from "react";

interface TabItem {
  title: string;
  path: string;
}

interface EmailTabsProps {
  tabs: TabItem[];
  defaultTabValue?: number;
}

const EmailTabs: React.FC<EmailTabsProps> = ({ tabs, defaultTabValue = 0 }) => {
  const [value, setValue] = React.useState(defaultTabValue);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(tabs[newValue].path);
  };

  useEffect(() => {
    const activeTabIndex = tabs.findIndex(
      (tab) => tab.path === router.pathname
    );
    if (activeTabIndex !== -1) {
      setValue(activeTabIndex);
    }
  }, [router.pathname, tabs]);

  return (
    <Box
      sx={{
        my: 4,
        minWidth: "100%",
        width: { xs: "240px", sm: "500px", md: "100%" },
        "& .css-s2t35c-MuiTabs-scroller": {
          overflow: "auto !important",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="email navigation tabs"
        TabIndicatorProps={{
          sx: { backgroundColor: "#07B007" },
        }}
        sx={{
          "& .MuiTab-root": {
            color: "#9CA3AF",
            "&.Mui-selected": {
              color: "#07B007",
            },
            transition: "color 0.3s ease",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.title} disableTouchRipple />
        ))}
      </Tabs>
    </Box>
  );
};

export default EmailTabs;
