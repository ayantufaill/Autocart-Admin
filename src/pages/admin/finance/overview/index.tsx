import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import CustomBarChart from "@/components/common/AdminCards/BarChart";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";

const financeData = [
  {
    title: "Daily",
    amount: "$6,733,345",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "$6,767,345",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "$6,833,345",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "$6,733,395",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];
const index: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        px: "60px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "20px", md: "20px" },
      }}
    >
      <ColorTabs
        tabData={[
          {
            label: "Finance Overview",
            count: 10,
            path: "/admin/finance/overview",
          },
          {
            label: "All Transactions",
            count: 50,
            path: "/admin/finance/alltransaction",
          },
          {
            label: "Refund Management",
            count: 40,
            path: "/admin/finance/refund",
          },
        ]}
        defaultTab={0}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "7px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            mb: "15px",
          }}
        >
          <PaidOutlinedIcon
            sx={{ height: "28px", width: "28px", color: "#9CA3AF" }}
          />
          <Typography
            sx={{ fontSize: "24px", color: "#1F2937", fontWeight: 600 }}
          >
            Finance Overview
          </Typography>
        </Box>

        <Box>
          <Grid container spacing={2}>
            {financeData.map((data, index) => (
              <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                <FinanceStatCard {...data} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ my: { xs: "20px", lg: "60px" } }}>
          <CustomBarChart />
        </Box>
      </Box>
    </Box>
  );
};

export default index;
