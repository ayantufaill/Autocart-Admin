import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const AdminHeader = () => {
  return (
    <Box sx={{ height: { xs: "auto", md: "84px" } }}>
    <Box
        sx={{
            backgroundColor: "white",
            height: { xs: "auto", lg: "75px" },
            borderRadius: "24px",
            px: { xs: '8px', md: '16px' },
            py: { xs: '8px', md: '8px' },
            border: "0.5px solid #CACACA",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
        }}
    >
        {/* Left Section */}
        <Box
            sx={{
                width: "100%",
                textAlign: { xs: "center", md: "left" },
            }}
        >
            <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "600", color: "#1F2937" }}>
                Today
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, gap: { xs: 1, md: 4 } }}>
                <Typography sx={{ fontSize: { xs: "16px", md: "16px" }, color: "#9CA3AF" }}>
                    Sunday 19TH January 2025
                </Typography>
                <Typography sx={{ fontSize: { xs: "16px", md: "16px" }, color: "#9CA3AF" }}>
                    01:25pm
                </Typography>
            </Box>
        </Box>

        {/* Right Section */}
        <Box>
            <Button
                variant="outlined"
                startIcon={<CalendarMonthOutlinedIcon sx={{ width: "26px", height: "26px", color: "#9CA3AF" }} />}
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
                    py: '4px',
                    px: '4px',
                }}
            >
                <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#9CA3AF" }}>
                    Change Date
                </Typography>
            </Button>
        </Box>
    </Box>
</Box>
  )
}

export default AdminHeader