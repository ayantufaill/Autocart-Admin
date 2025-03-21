import * as React from "react";
import { useRouter } from "next/router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="email navigation tabs"
          TabIndicatorProps={{
            sx: { backgroundColor: "#07B007", color: "#07B007" },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              disableTouchRipple
              key={index}
              label={tab.title}
              sx={{
                color:
                  index === defaultTabValue ? "#07B007 !important" : "#9CA3AF",
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default EmailTabs;
