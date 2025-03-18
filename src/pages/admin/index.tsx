import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

import FinanceStatCard from '@/components/common/AdminCards/FinanceCard';
import ContentCards from '@/components/common/AdminCards/AdsCard';
import CustomBarChart from '@/components/common/AdminCards/BarChart'

// comment to verify beanch story

const stats = [
    { title: "Total Ads", value: "7,854,472", color: "#1E40AF", change: "+9.2%", unit: "Ads" },
    { title: "Pending Ads", value: "7,854,472", color: "#854D0E", change: "+9.2%", unit: "Ads" },
    { title: "Active Ads", value: "7,854,472", color: "#166534", change: "+9.2%", unit: "Ads" },
    { title: "Daily Ads Created", value: "2,854,472", color: "#991B1B", change: "+9.2%", unit: "Ads" }
];

const users = [
    { title: "Total Users", value: "7,854,472", color: "#1E40AF", change: "+9.2%", unit: "Users" },
    { title: "Active Users", value: "7,854,472", color: "#166534", change: "+9.2%", unit: "Users" },
    { title: "Daily Register Users", value: "7,854,472", color: "#854D0E", change: "+9.2%", unit: "Users" },
    { title: "Daily Login", value: "7,854,472", color: "#991B1B", change: "-9.2%", unit: "Users" }
];

const financeData = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];

const flaggedMessage = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];

const reportedMessage = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];

const inboxMail = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];

const outboxMail = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];

const stories = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];


const index = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#F9F9F9",
                px: '40px',
                pt: '40px',
                pb: '300px',
                width: '100%',
                // height: "calc(100% - 80px)",
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '20px', md: '50px' },
            }}
        >

            {/* Top Section */}
            <Box sx={{ height: { xs: "auto", md: "134px" } }}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        height: { xs: "auto", lg: "108px" },
                        borderRadius: "24px",
                        px: { xs: 2, md: 3 },
                        py: { xs: 2, md: 2 },
                        border: "0.5px solid #CACACA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", lg: "row" },
                        gap: { xs: 2, lg: 0 },
                    }}
                >
                    {/* Left Section */}
                    <Box
                        sx={{
                            width: "100%",
                            textAlign: { xs: "center", lg: "left" },
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: "600", color: "#1F2937" }}>
                            Today
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", lg: "flex-start" }, gap: { xs: 1, md: 4 }, mt: 1 }}>
                            <Typography sx={{ fontSize: { xs: "16px", md: "22px" }, color: "#9CA3AF" }}>
                                Sunday 19TH January 2025
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "16px", md: "22px" }, color: "#9CA3AF" }}>
                                01:25pm
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Section */}
                    <Button
                        variant="outlined"
                        startIcon={<CalendarMonthOutlinedIcon sx={{ width: "36px", height: "36px", color: "#9CA3AF" }} />}
                        sx={{
                            width: { xs: "100%", md: "230px" },
                            height: "60px",
                            borderRadius: "12px",
                            border: "0.5px solid #CACACA",
                            color: "#9CA3AF",
                            textTransform: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            py: 1,
                            px: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#9CA3AF" }}>
                            Change Date
                        </Typography>
                    </Button>
                </Box>
            </Box>

            {/* Ads Section */}
            <Box sx={{ width: "100%" }}>
                {/* Heading */}
                <Box sx={{ display: "flex", gap: '16px', alignItems: 'center', mb: 3, mt: { xs: 4, md: 10, lg: 0 } }}>
                    <AdsClickOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Ads</Typography>
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
                <Box sx={{ display: "flex", gap: '16px', alignItems: 'center', mb: 3 }}>
                    <PeopleOutlineOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Users</Typography>
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
            <Box sx={{
                display: 'flex', flexDirection: "column", gap: '37px'
            }}>
                {/* Heading */}
                <Box sx={{ display: "flex", gap: '16px', alignItems: 'center' }}>
                    <PaidOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Finance Overview</Typography>
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
                <Box sx={{ my: { xs: '20px', lg: '60px' } }}>
                    <CustomBarChart />
                </Box>
            </Box>

            {/* Message*/}
            <Box sx={{
                display: 'flex', flexDirection: "column", gap: '27px'
            }}>
                {/* Heading */}
                <Box sx={{ display: "flex", gap: '16px', alignItems: 'center' }}>
                    <ChatOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Message</Typography>
                </Box>
                {/* Cards 1*/}
                <Box>
                    <Typography sx={{ fontSize: '24px', color: '#9CA3AF', mb: '16px' }}>Flagged Message</Typography>
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
                    <Typography sx={{ fontSize: '24px', color: '#9CA3AF', mb: '16px' }}>Reported Message</Typography>
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
            <Box sx={{
                display: 'flex', flexDirection: "column", gap: '27px'
            }}>
                {/* Heading */}
                <Box sx={{ display: "flex", gap: '16px', alignItems: 'center' }}>
                    <EmailOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Mail</Typography>
                </Box>
                {/* Cards 1*/}
                <Box>
                    <Typography sx={{ fontSize: '24px', color: '#9CA3AF', mb: '16px' }}>Inbox Mail</Typography>
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
                    <Typography sx={{ fontSize: '24px', color: '#9CA3AF', mb: '16px' }}>Outbox Mail</Typography>
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
            <Box sx={{
                display: 'flex', flexDirection: "column", gap: '37px'
            }}>
                {/* Heading */}
                <Box sx={{ display: "flex", gap: '16px', alignItems: 'center' }}>
                    <AutoStoriesOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Stories</Typography>
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
    );
}

export default index;
