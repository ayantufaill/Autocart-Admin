import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";
import ButtonGroup from "@/components/common/Email/ButtonGroup";
import SearchBar from "@/components/common/Email/SearchBar";
import FlaggedMessage from '@/components/common/Messagemanagement/Flaggedmessage';

import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const buttonData = [
    { label: "Compose Mail", icon: <AttachEmailOutlinedIcon sx={{ height: "21px", width: "21px", color: "#9CA3AF" }} /> },
    { label: "Bulk Mail", icon: <FileCopyOutlinedIcon sx={{ height: "21px", width: "21px", color: "#9CA3AF" }} /> },
    { label: "Download", icon: <FileDownloadOutlinedIcon sx={{ height: "21px", width: "21px", color: "#9CA3AF" }} /> },
];

const dateButtons = [
    { label: "From Date", icon: <CalendarMonthOutlinedIcon sx={{ height: "21px", width: "21px", color: "#9CA3AF" }} /> },
    { label: "To Date", icon: <CalendarMonthOutlinedIcon sx={{ height: "21px", width: "21px", color: "#9CA3AF" }} /> },
];

const data = [
    { id: 1, title: "Today", value: 54, percentage: "+9.2%", description: "Compared to yesterday" },
    { id: 2, title: "This Week", value: 25455, percentage: "-9.2%", description: "Compared to Last Week" },
    { id: 3, title: "This Month", value: 347588, percentage: "+9.2%", description: "Compared to Last Month" },
    { id: 4, title: "This Year", value: 875223, percentage: "+9.2%", description: "Compared to Last Year" },
];

const reported = [
    { id: 1, title: "Today", value: 54, percentage: "+9.2%", description: "Compared to yesterday" },
    { id: 2, title: "This Week", value: 25455, percentage: "-9.2%", description: "Compared to Last Week" },
    { id: 3, title: "This Month", value: 347588, percentage: "+9.2%", description: "Compared to Last Month" },
    { id: 4, title: "This Year", value: 875223, percentage: "+9.2%", description: "Compared to Last Year" },
];

const index: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<string>("Mail Overview");

    const tabs = [
        { label: "Mail Overview" },
        { label: "Inbox Mail" },
        { label: "Outbox Mail" },
        { label: "Draft Mail" },
    ];

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
                py: "60px",
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "36px" }}>

                <Box sx={{ mb: { xs: "85px", md: "20px", lg: "0px" }, width: { xs: "100%", md: "600px", lg: "650px" } }}>
                    <FinanceOverviewTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
                </Box>


                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: "16px",
                        alignItems: { xs: "stretch", sm: "center" },
                    }}
                >
                    <SearchBar />
                    <ButtonGroup buttons={dateButtons} />
                </Box>

                <ButtonGroup buttons={buttonData} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', bgcolor: '#f9f9f9' }} >
                <Box sx={{ bgcolor: '#f9f9f9', py: '18px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <Typography sx={{ color: '#1F2937', fontSize: '24px', fontWeight: 600 }}>Inbox Mail</Typography>
                        <Grid container spacing={2}>
                            {data.map((item) => (
                                <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                                    <FlaggedMessage {...item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                <Box sx={{ bgcolor: '#f9f9f9', py: '18px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <Typography sx={{ color: '#1F2937', fontSize: '24px', fontWeight: 600 }}>Outbox Mail</Typography>
                        <Grid container spacing={2}>
                            {reported.map((item) => (
                                <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                                    <FlaggedMessage {...item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default index;
