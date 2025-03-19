import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

import FinanceStatCard from '@/components/common/AdminCards/FinanceCard';
import ContentCards from '@/components/common/AdminCards/AdsCard';
import CustomBarChart from '@/components/common/AdminCards/BarChart'
import AdminHeader from '@/components/common/AdminCards/AdminHeader';
import { FC } from "react";
import IconTitleBox from "@/components/common/AdminCards/CardsHeading"

interface StatData {
    title: string;
    value: string;
    color: string;
    change: string;
    unit: string;
}

// comment to verify beanch story

const stats: StatData[] = [
    { title: "Total Ads", value: "7,854,472", color: "#1E40AF", change: "+9.2%", unit: "Ads" },
    { title: "Pending Ads", value: "7,854,472", color: "#854D0E", change: "+9.2%", unit: "Ads" },
    { title: "Active Ads", value: "7,854,472", color: "#166534", change: "+9.2%", unit: "Ads" },
    { title: "Daily Ads Created", value: "2,854,472", color: "#991B1B", change: "+9.2%", unit: "Ads" }
];

const users: StatData[] = [
    { title: "Total Users", value: "7,854,472", color: "#1E40AF", change: "+9.2%", unit: "Users" },
    { title: "Active Users", value: "7,854,472", color: "#166534", change: "+9.2%", unit: "Users" },
    { title: "Daily Register Users", value: "7,854,472", color: "#854D0E", change: "+9.2%", unit: "Users" },
    { title: "Daily Login", value: "7,854,472", color: "#991B1B", change: "-9.2%", unit: "Users" }
];

interface FinanceData {
    title: string;
    amount: string;
    percentage: string;
    comparisonText: string;
}

const financeData: FinanceData[] = [
    { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
    { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
    { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
    { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];

const flaggedMessage: FinanceData[] = [...financeData];
const reportedMessage: FinanceData[] = [...financeData];
const inboxMail: FinanceData[] = [...financeData];
const outboxMail: FinanceData[] = [...financeData];
const stories: FinanceData[] = [...financeData];

const index: FC = () => {
    return (
        <Box
            sx={{ px: { xs: '20px', sm: '40px', md: '60px' }, py: '37px', bgcolor: '#F9F9F9' }}
        >
            {/* Header*/}
            <Box>
                <AdminHeader />
            </Box>

            {/* Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '48px', py: '37px' }}>
                {/* Ads */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <IconTitleBox icon={AdsClickOutlinedIcon} title="Ads" />
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
                {/* Users */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <IconTitleBox icon={PeopleOutlineOutlinedIcon} title="Users" />
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
                {/* Finance + BarChart */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <IconTitleBox icon={PaidOutlinedIcon} title="Finance Overview" />
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
                {/* Messages */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <IconTitleBox icon={ChatOutlinedIcon} title="Message" />
                    <Box>
                        <Typography sx={{ fontSize: '20px', color: '#9CA3AF', mb: '16px' }}>Flagged Message</Typography>
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
                        <Typography sx={{ fontSize: '20px', color: '#9CA3AF', mb: '16px' }}>Reported Message</Typography>
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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <IconTitleBox icon={EmailOutlinedIcon} title="Mail" />
                    <Box>
                        <Typography sx={{ fontSize: '20px', color: '#9CA3AF', mb: '16px' }}>Inbox Mail</Typography>
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
                        <Typography sx={{ fontSize: '20px', color: '#9CA3AF', mb: '16px' }}>Outbox Mail</Typography>
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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <IconTitleBox icon={AutoStoriesOutlinedIcon} title="Stories" />
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
        </Box>
    );
}

export default index;
