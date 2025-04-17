import React, { useEffect } from "react";
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
import { fetchAdsAnalytics } from "@/redux/thunk/adsAnalytics.thunk";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUsersAnalytics } from "@/redux/thunk/userThunk";
import { fetchStoryAnalytics } from "@/redux/slices/storyAnalyticsSlice";
import ReportedMessagesAnalytics from "@/components/common/Messagemanagement/ReportedMessages/ReportedMessages";
import StoryAnalytics from "@/components/common/Story/StoryAnalytics/StoryAnalytics";
import UsersAnalytics from "@/components/common/AdminAnalytics/UsersAnalytics";
import AdsAnalytivs from "@/components/common/AdminAnalytics/AdsAnalytivs";

// check emailManagement

interface StatData {
  title: string;
  value: string;
  color: string;
  change: string;
  unit: string;
}

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

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { totalAds, todayAdsCount, statusCounts, } = useSelector(
    (state: RootState) => state.adsAnalytics
  );

  const { totalUsers, activeUsers, dailyRegistered, dailyLoggedIn, bannedUsers, suspendedUsers, } =
    useSelector((state: RootState) => state.userAnalytics);

  // useEffect(() => {
  //   dispatch(fetchAdsAnalytics());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchUsersAnalytics());
  //   console.log("users analytics: ", {
  //     totalUsers,
  //     activeUsers,
  //     dailyRegistered,
  //     dailyLoggedIn,
  //   });
  // }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("usersCount", JSON.stringify({
      allUsers: totalUsers,
      activeUsers: activeUsers,
      suspendedUsers: suspendedUsers,
      bannedUsers: bannedUsers,
    }))

  }, [totalUsers, activeUsers, bannedUsers, suspendedUsers])

  // const getStatusCount = (status: string) => {
  //   return (
  //     statusCounts.find(
  //       (s: { status: string }) =>
  //         s.status.toUpperCase() === status.toUpperCase()
  //     )?.count || 0
  //   );
  // };

  // const users = [
  //   {
  //     title: "Total Users",
  //     value: totalUsers?.toLocaleString?.() || "0",
  //     color: "#1E40AF",
  //     change: "+9.2%", // Placeholder
  //     unit: "Users",
  //   },
  //   {
  //     title: "Active Users",
  //     value: activeUsers?.toLocaleString?.() || "0",
  //     color: "#166534",
  //     change: "+9.2%",
  //     unit: "Users",
  //   },
  //   {
  //     title: "Daily Register Users",
  //     value: dailyRegistered?.toLocaleString?.() || "0",
  //     color: "#854D0E",
  //     change: "+9.2%",
  //     unit: "Users",
  //   },
  //   {
  //     title: "Daily Login",
  //     value: dailyLoggedIn?.toLocaleString?.() || "0",
  //     color: "#991B1B",
  //     change: "-9.2%",
  //     unit: "Users",
  //   },
  // ];

  // const stats = [
  //   {
  //     title: "Total Ads",
  //     value: totalAds.toLocaleString(),
  //     color: "#1E40AF",
  //     change: "+9.2%",
  //     unit: "Ads",
  //   },
  //   {
  //     title: "Pending Ads",
  //     value: getStatusCount("PENDING").toLocaleString(),
  //     color: "#854D0E",
  //     change: "+9.2%",
  //     unit: "Ads",
  //   },
  //   {
  //     title: "Active Ads",
  //     value: getStatusCount("ACTIVE").toLocaleString(),
  //     color: "#166534",
  //     change: "+9.2%",
  //     unit: "Ads",
  //   },
  //   {
  //     title: "Daily Ads Created",
  //     value: todayAdsCount.toLocaleString(),
  //     color: "#991B1B",
  //     change: "+9.2%",
  //     unit: "Ads",
  //   },
  // ];
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
        {/* <Box sx={{ height: { xs: "auto", md: "84px" } }}>
          <Box
            sx={{
              backgroundColor: "white",
              height: { xs: "auto", lg: "75px" },
              borderRadius: "12px",
              px: { xs: "8px", md: "16px" },
              py: { xs: "8px", md: "8px" },
              border: "0.5px solid #CACACA",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 2, lg: 0 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                textAlign: { xs: "center", lg: "left" },
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
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", lg: "flex-start" },
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

            <Button
              variant="outlined"
              startIcon={<CalendarMonthOutlinedIcon />}
              sx={{
                width: { xs: "100%", md: "160px" },
                height: "40px",
                borderRadius: "12px",
                border: "0.5px solid #CACACA",
                color: "#9CA3AF",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: "4px",
                px: "4px",
              }}
            >
              Change Date
            </Button>
          </Box>
        </Box> */}

        {/* <Box sx={{ width: "100%" }}>
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

          <Box>
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <ContentCards {...stat} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box> */}
        <AdsAnalytivs />
        {/* <Box sx={{ mb: 1 }}>
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

          <Box>
            <Grid container spacing={2}>
              {users.map((user, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <ContentCards {...user} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box> */}
        <UsersAnalytics />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
          }}
        >
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

          {/* <Box>
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
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box> */}
          {/* Shows counts for reported messages */}
          <Box>
            <ReportedMessagesAnalytics />
          </Box>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
          }}
        >
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
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
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
                <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                  <FinanceStatCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "27px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "16px" },
              alignItems: "center",
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

          <Box>
            <StoryAnalytics />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Index;
