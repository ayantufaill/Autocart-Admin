import React from "react";
import { Box, Button } from "@mui/material";
import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";
import ButtonGroup from "@/components/common/Email/ButtonGroup";
import SearchBar from "@/components/common/Email/SearchBar";

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

const index: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<string>("Inbox Mail");

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

                <Box>
                    <ButtonGroup buttons={buttonData} />
                </Box>

                <Box sx={{ display: "flex", gap: '22px' }}>
                    <Button variant="text" sx={{color: '#9CA3AF',fontSize: '20px',px: '24px',py: '8px'}}>All</Button>
                    <Button variant="text" sx={{color: '#9CA3AF',fontSize: '20px',px: '24px',py: '8px'}}>Unread</Button>
                    <Button variant="text" sx={{color: '#9CA3AF',fontSize: '20px',px: '24px',py: '8px'}}>Read</Button>
                </Box>

            </Box>
        </Box>
    );
};

export default index;
