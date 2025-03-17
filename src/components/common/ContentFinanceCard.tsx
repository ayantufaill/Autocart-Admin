import React from 'react';
import { Box, Typography} from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const FinanceStatCard = ({ title, amount, percentage, comparisonText }) => {
    return (
        <Box
            sx={{
                height: '165px',
                bgcolor: '#FFFFFF',
                border: '0.5px solid #CACACA',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                px: { xs: 2, md: 3, lg: 3 },
                gap: '8px',
                py:'15px',
                justifyContent: 'center'
            }}
        >
            {/* Top Section */}
            <Box sx={{
                height: '30px',
                display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'
            }}>
                <Typography sx={{ height: '25px', color: '#854D0E', fontSize: '20px', letterSpacing: '1%' }}>{title}</Typography>
                <CalendarMonthOutlinedIcon sx={{ borderRadius: '8px', border: "0.5px solid #CACACA", height: '30px', width: '30px', color: '#9CA3AF', p: '2px' }} />
            </Box>

             {/* Value Section */}
            <Box sx={{ height: '68px', display: 'flex', width: '100%', flexDirection: "column", gap: '6px' }}>
                <Box sx={{ display: 'flex', height: '40px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Typography sx={{ fontSize: { xs: "22px", md: "32px" }, fontWeight: 600, color: "#1F2937" }}>
                        {amount}
                    </Typography>

                    <Typography sx={{ fontSize: "14px", color: percentage.includes("+") ? "#22C55E" : "#EF4444" }}>
                        {percentage}
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#9CA3AF" }}>
                    {comparisonText}
                </Typography>
            </Box>
        </Box>
    );
};
export default FinanceStatCard