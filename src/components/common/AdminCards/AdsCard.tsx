import React from 'react';
import { Box, Typography } from '@mui/material';

interface ContentCardsProps {
    title: string;
    value: string | number;
    color: string;
    change?: string;
    unit?: string;
}

const ContentCards: React.FC<ContentCardsProps> = ({ title, value, color, change = "", unit = "" }) => {
    return (
        <Box
            sx={{
                height: '137px',
                bgcolor: "white",
                borderRadius: "12px",
                border: "0.5px solid #CACACA",
                p: { xs: 2, md: 3, lg: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center'
            }}
        >
            {/* Top Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "12px", height: "12px", bgcolor: color, mr: 1, borderRadius: "4px" }}></Box>
                    <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#9CA3AF" }}>
                        {title}
                    </Typography>
                </Box>
                {change && (
                    <Typography sx={{ fontSize: "14px", color: change.includes("+") ? "#22C55E" : "#EF4444" }}>
                        {change}
                    </Typography>
                )}
            </Box>

            {/* Value Section */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography sx={{ fontSize: { xs: "22px", md: "32px" }, fontWeight: 600, color: "#1F2937" }}>
                    {value}
                </Typography>

                {unit && (
                    <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#9CA3AF", ml: 1 }}>
                        {unit}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default ContentCards;
