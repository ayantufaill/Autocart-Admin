import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import ContentCards from "@/components/common/AdminCards/AdsCard";
import CustomBarChart from "@/components/common/AdminCards/BarChart";
import AdminHeader from "@/components/common/AdminCards/AdminHeader";
import { FC } from "react";
import IconTitleBox from "@/components/common/AdminCards/CardsHeading";

// check emailManagement

interface StatData {
  title: string;
  value: string;
  color: string;
  change: string;
  unit: string;
}

// comment to verify beanch story

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
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "374588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752285",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const reportedMessage = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "374588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752235",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const inboxMail = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "34588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752235",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const outboxMail = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "347588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752235",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const stories = [
  {
    title: "Daily",
    amount: "852",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "54752",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "255475",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "22534285",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const index = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Box
        sx={{
          px: { xs: "20px", md: "25px", lg: "30px", xl: "40px" },
          pt: "40px",
          pb: "300px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", md: "50px" },
        }}
      >
        {/* Top Section */}
        <Box sx={{ height: { xs: "auto", md: "84px" } }}>
          <Box
            sx={{
              backgroundColor: "white",
              height: { xs: "auto", lg: "75px" },
              borderRadius: "12px",
              px: { xs: "8px", md: "16px" },
              py: { xs: "8px", md: "8px" },
              border: "0.5px solid #CACACA",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: {
                xs: "center",
                sm: "start",
                md: "center",
                lg: "center",
              },
              justifyContent: { xs: "start", lg: "space-between" },
              gap: { xs: 2, lg: 0 },
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                width: "100%",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 600,
                  color: "#1F2937",
                }}
              >
                Today
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: { xs: 1, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#9CA3AF",
                  }}
                >
                  Sunday 19TH January 2025
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#9CA3AF",
                  }}
                >
                  01:25pm
                </Typography>
              </Box>
            </Box>

            {/* Right Section */}
            <Box>
              <Button
                variant="outlined"
                startIcon={<CalendarMonthOutlinedIcon />}
                sx={{
                  width: { xs: "160px", md: "200px", xl: "160px" },
                  height: "40px",
                  borderRadius: "12px",
                  borderColor: "#CACACA",
                  color: "#9CA3AF",
                  textTransform: "none",
                }}
              >
                Change Date
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Ads Section */}
        <Box>
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "12px", lg: "16px" },
              alignItems: "center",
              mb: 3,
              mt: { xs: 4, md: 10, lg: 0 },
            }}
          >
            <AdsClickOutlinedIcon
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
                fontWeight: 600,
              }}
            >
              Ads
            </Typography>
          </Box>

          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
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
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "12px", lg: "16px" },
              alignItems: "center",
              mb: 3,
            }}
          >
            <PeopleOutlineOutlinedIcon
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
                fontWeight: 600,
              }}
            >
              Users
            </Typography>
          </Box>

          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {users.map((user, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <ContentCards {...user} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Finance Section + Bar Chart*/}
        <Box sx={{ mb: 1 }}>
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "16px" },
              alignItems: "center",
              mb: 3,
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
                fontWeight: 600,
              }}
            >
              Finance Overview
            </Typography>
          </Box>
          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {financeData.map((data, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
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
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "16px" },
              alignItems: "center",
            }}
          >
            <ChatOutlinedIcon
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
                fontWeight: 600,
              }}
            >
              Message
            </Typography>
          </Box>
          {/* Cards 1*/}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "16px" },
                color: "#9CA3AF",
                mb: "16px",
              }}
            >
              Flagged Message
            </Typography>
            <Grid container spacing={2}>
              {flaggedMessage.map((data, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Cards 2*/}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "16px" },
                color: "#9CA3AF",
                mb: "16px",
              }}
            >
              Reported Message
            </Typography>
            <Grid container spacing={2}>
              {reportedMessage.map((data, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
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
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "16px" },
              alignItems: "center",
            }}
          >
            <EmailOutlinedIcon
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
                fontWeight: 600,
              }}
            >
              Mail
            </Typography>
          </Box>
          {/* Cards 1*/}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "16px" },
                color: "#9CA3AF",
                mb: "16px",
              }}
            >
              Inbox Mail
            </Typography>
            <Grid container spacing={2}>
              {inboxMail.map((data, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Cards 2*/}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "16px" },
                color: "#9CA3AF",
                mb: "16px",
              }}
            >
              Outbox Mail
            </Typography>
            <Grid container spacing={2}>
              {outboxMail.map((data, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Stories*/}
        <Box sx={{ md: 1 }}>
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "16px" },
              alignItems: "center",
              mb: 3,
            }}
          >
            <AutoStoriesOutlinedIcon
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
                fontWeight: 600,
              }}
            >
              Stories
            </Typography>
          </Box>
          {/* Cards */}
          <Box>
            <Grid container spacing={2}>
              {stories.map((data, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
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
