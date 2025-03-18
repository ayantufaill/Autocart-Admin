import React from 'react';
import { Box, Typography, Grid,InputAdornment, } from '@mui/material';
import FlaggedMessage from '@/components/common/Messagemanagement/Flaggedmessage';
import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';

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

const FlaggedMessagesGrid = () => {

    const [activeTab, setActiveTab] = React.useState<string>("Message Overview");

    const tabs = [
        { label: "Message Overview" },
        { label: "Flagged Messages" },
        { label: "Reported Messages" },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', bgcolor: '#f9f9f9', px: '60px', }}>

            <Box sx={{ py: '24px', display: 'flex', flexDirection: 'column', gap: '36px', }}>

                <Box sx={{ height: { xs: '150px', md: '80px', lg: '46px' } }}>
                    <FinanceOverviewTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
                </Box>

                <TextField
                    placeholder="Search Ads"
                    variant="outlined"
                    sx={{
                        marginBottom: 2,
                        backgroundColor: "#F9F9F9",
                        width: {xs:'100%',lg:"600px"},
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", 
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon sx={{ color: "#9CA3AF" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>


            <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '25px', bgcolor: '#f9f9f9' }}
            >
                <Box sx={{ bgcolor: '#f9f9f9', py: '18px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <Typography sx={{ color: '#1F2937', fontSize: '24px', fontWeight: 600 }}>Flagged Messages</Typography>
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
                        <Typography sx={{ color: '#1F2937', fontSize: '24px', fontWeight: 600 }}>Reported Messages</Typography>
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

export default FlaggedMessagesGrid;
