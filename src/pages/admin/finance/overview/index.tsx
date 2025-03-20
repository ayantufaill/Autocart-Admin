import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

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
const FinanceOverview: React.FC = () => {
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
          { label: "Finance Overview", path: "/admin/finance" },
          { label: "All Transactions", path: "/admin/finance/alltransaction" },
          { label: "Refund Management", path: "/admin/finance/refund" },
        ]}
        defaultTab={0}
      />

      <Container
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
            sx={{
              fontSize: { xs: "18px", md: "20px", xl: "22px" },
              fontWeight: 500,
              color: "#1F2937",
            }}
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
      </Container>
    </Box>
  );
};

export default FinanceOverview;
