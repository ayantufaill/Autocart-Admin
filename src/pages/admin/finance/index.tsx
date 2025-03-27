import React, { useState } from "react";
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
  const [status, setStatus] = useState("");
  return (
    <Box sx={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs
        tabData={[
          { label: "Finance Overview", path: "/admin/finance", status: "" },
          {
            label: "All Transactions",
            path: "/admin/finance/alltransaction",
            status: "Transactions",
          },
          {
            label: "Refund Management",
            path: "/admin/finance/refund",
            status: "Refund",
          },
        ]}
        defaultTab={0}
        setStatus={setStatus}
      />

      <Container>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", md: "12px", lg: "16px" },
            alignItems: "center",
            mb: 3,
            mt: { xs: 4, md: 10, lg: 0 },
          }}
        >
          <PaidOutlinedIcon
            sx={{
              height: { xs: "22px", xl: "24px" },
              width: { xs: "22px", xl: "24px" },
              color: "#9CA3AF",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px", xl: "22px" },
              color: "#1F2937",
              fontWeight: 500,
            }}
          >
            Finance Overview
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {financeData.map((data, index) => (
            <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
              <FinanceStatCard {...data} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my: { xs: "20px", lg: "60px" } }}>
          <CustomBarChart />
        </Box>
      </Container>
    </Box>
  );
};

export default FinanceOverview;
