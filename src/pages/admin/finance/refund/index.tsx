import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";


const index: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<string>("Refund Management");

    const tabs = [
        { label: "Finance Overview" },
        { label: "All Transactions" },
        { label: "Refund Management" },
    ];
    return (
        <Box
            sx={{
                backgroundColor: "#F9F9F9",
                px: '60px',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '20px', md: '20px' },
            }}
        >

            <Box sx={{ py: '24px', height: '94px', mb: { xs: '85px', sm: '85px', md: '20px', lg: '0px' } }}>
                <FinanceOverviewTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            </Box>

            <TextField
                placeholder="Search Ads"
                variant="outlined"
                sx={{
                    marginBottom: 2,
                    backgroundColor: "#F9F9F9",
                    width: { xs: '100%', lg: "600px" },
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
    )
}

export default index