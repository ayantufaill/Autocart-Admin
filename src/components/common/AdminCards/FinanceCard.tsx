import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

interface FinanceStatCardProps {
    title: string;
    amount: string | number;
    percentage?: string;
    comparisonText?: string; 
}

const FinanceStatCard: React.FC<FinanceStatCardProps> = ({ title, amount, percentage = "", comparisonText = "" }) => {
    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                border: '0.5px solid #CACACA',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                px: { xs: 2, md: 3, lg: 3 },
                gap: '8px',
                py: '20px',
                pb:'30px',
                justifyContent: 'center'
            }}
        >
            
            <Box sx={{
                height: '30px',
                display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'
            }}>
                <Typography sx={{ height: '25px', color: '#854D0E', fontSize: '20px', letterSpacing: '1%' }}>
                    {title}
                </Typography>
                <CalendarMonthOutlinedIcon
                    sx={{
                        borderRadius: '8px',
                        border: "0.5px solid #CACACA",
                        height: '30px',
                        width: '30px',
                        color: '#9CA3AF',
                        p: '2px'
                    }}
                />
            </Box>

            <Box sx={{ height: '68px', display: 'flex', flexDirection: "column", gap: '6px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Typography sx={{ fontSize: { xs: "22px", md: "32px" }, fontWeight: 600, color: "#1F2937" }}>
                        {amount}
                    </Typography>

                    {percentage && (
                        <Typography sx={{ fontSize: "14px", color: percentage.includes("+") ? "#22C55E" : "#EF4444" }}>
                            {percentage}
                        </Typography>
                    )}
                </Box>

                {comparisonText && (
                    <Typography sx={{ fontSize: { xs: "16px" }, color: "#9CA3AF" }}>
                        {comparisonText}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default FinanceStatCard;
