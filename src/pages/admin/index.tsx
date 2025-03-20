import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

import FinanceStatCard from '@/components/common/AdminCards/FinanceCard';
import ContentCards from '@/components/common/AdminCards/AdsCard';
import CustomBarChart from '@/components/common/AdminCards/BarChart'
import AdminHeader from '@/components/common/AdminCards/AdminHeader';


interface StatData {
  title: string;
  value: string;
  color: string;
  change: string;
  unit: string;
}




const stats = [
  {
    title: "Total Ads",
    value: "7,854,472",
    color: "#1E40AF",
    change: "+9.2%",
    unit: "Ads",
  },
  {
    title: "Pending Ads",
    value: "7,854,472",
    color: "#854D0E",
    change: "+9.2%",
    unit: "Ads",
  },
  {
    title: "Active Ads",
    value: "7,854,472",
    color: "#166534",
    change: "+9.2%",
    unit: "Ads",
  },
  {
    title: "Daily Ads Created",
    value: "2,854,472",
    color: "#991B1B",
    change: "+9.2%",
    unit: "Ads",
  },
];

const users = [
  {
    title: "Total Users",
    value: "7,854,472",
    color: "#1E40AF",
    change: "+9.2%",
    unit: "Users",
  },
  {
    title: "Active Users",
    value: "7,854,472",
    color: "#166534",
    change: "+9.2%",
    unit: "Users",
  },
  {
    title: "Daily Register Users",
    value: "7,854,472",
    color: "#854D0E",
    change: "+9.2%",
    unit: "Users",
  },
  {
    title: "Daily Login",
    value: "7,854,472",
    color: "#991B1B",
    change: "-9.2%",
    unit: "Users",
  },
];

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

const flaggedMessage = [
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

const reportedMessage = [
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

const inboxMail = [
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

const outboxMail = [
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

const stories = [
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

const index = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Box
        sx={{
          px: "40px",
          pt: "40px",
          pb: "300px",
          width: "100%",

          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", md: "50px" },
        }}
      >
        {/* Top Section */}
        <AdminHeader />

        {/* Ads Section */}
        <Box sx={{ width: "100%" }}>
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              mb: 3,
              mt: { xs: 4, md: 10, lg: 0 },
            }}
          >
            <img
              src="/Icons/Property 1=ads.png" 
              alt="Ads Icon"
              style={{
                width: "28px",
                height: "28px",
                filter: "grayscale(100%)",
              }}
            />
            <Typography
              sx={{ fontSize: "22px", color: "#1F2937", fontWeight: 600 }}
            >
              Ads
            </Typography>
          </Box>

          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <ContentCards {...stat} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Users Section */}
        <Box sx={{ mb: 1 }}>
          {/* Heading */}
          <Box
            sx={{ display: "flex", gap: "16px", alignItems: "center", mb: 3 }}
          >
            <img
              src="/Icons/Property 1=users.png" 
              alt="Ads Icon"
              style={{
                width: "28px",
                height: "28px",
                filter: "grayscale(100%)",
              }}
            />
            <Typography
              sx={{ fontSize: "22px", color: "#1F2937", fontWeight: 600 }}
            >
              Users
            </Typography>
          </Box>

          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {users.map((user, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <ContentCards {...user} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Finance Section + Bar Chart*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "37px",
          }}
        >
          {/* Heading */}
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img
              src="/Icons/Property 1=finance.png" 
              alt="Ads Icon"
              style={{
                width: "28px",
                height: "28px",
                filter: "grayscale(100%)",
              }}
            />
            <Typography
              sx={{ fontSize: "22px", color: "#1F2937", fontWeight: 600 }}
            >
              Finance Overview
            </Typography>
          </Box>
          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {financeData.map((data, index) => (
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Bar Chart */}
          <Box sx={{ my: { xs: "20px", lg: "60px" } }}>
            <CustomBarChart />
          </Box>
        </Box>

        {/* Message*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
          }}
        >
          {/* Heading */}
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img
              src="/Icons/Property 1=message.png" 
              alt="Ads Icon"
              style={{
                width: "28px",
                height: "28px",
                filter: "grayscale(100%)",
              }}
            />
            <Typography
              sx={{ fontSize: "22px", color: "#1F2937", fontWeight: 600 }}
            >
              Message
            </Typography>
          </Box>
          {/* Cards 1*/}
          <Box>
            <Typography sx={{ fontSize: "18px", color: "#9CA3AF", mb: "16px" }}>
              Flagged Message
            </Typography>
            <Grid container spacing={2}>
              {flaggedMessage.map((data, index) => (
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Cards 2*/}
          <Box>
            <Typography sx={{ fontSize: "18px", color: "#9CA3AF", mb: "16px" }}>
              Reported Message
            </Typography>
            <Grid container spacing={2}>
              {reportedMessage.map((data, index) => (
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Mail*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
          }}
        >
          {/* Heading */}
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img
              src="/Icons/Property 1=email.png" 
              alt="Ads Icon"
              style={{
                width: "28px",
                height: "28px",
                filter: "grayscale(100%)",
              }}
            />
            <Typography
              sx={{ fontSize: "22px", color: "#1F2937", fontWeight: 600 }}
            >
              Mail
            </Typography>
          </Box>
          {/* Cards 1*/}
          <Box>
            <Typography sx={{ fontSize: "18px", color: "#9CA3AF", mb: "16px" }}>
              Inbox Mail
            </Typography>
            <Grid container spacing={2}>
              {inboxMail.map((data, index) => (
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Cards 2*/}
          <Box>
            <Typography sx={{ fontSize: "18px", color: "#9CA3AF", mb: "16px" }}>
              Outbox Mail
            </Typography>
            <Grid container spacing={2}>
              {outboxMail.map((data, index) => (
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Stories*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "27px",
          }}
        >
          {/* Heading */}
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img
              src="/Icons/Property 1=story.png" 
              alt="Ads Icon"
              style={{
                width: "28px",
                height: "28px",
                filter: "grayscale(100%)",
              }}
            />
            <Typography
              sx={{ fontSize: "22px", color: "#1F2937", fontWeight: 600 }}
            >
              Stories
            </Typography>
          </Box>
          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {stories.map((data, index) => (
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default index;
