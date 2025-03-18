import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

const NotificationActive = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: "calc(100vh - 80px)",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                backgroundColor: '#F9F9F9',
                px: { xs: '20px', sm: '40px', md: '50px', lg: '60px' },
                py: "24px",
            }}
        >
            <Box
                sx={{
                    height: '108px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}
            >
                <Box
                    sx={{
                        width: { xs: '160px', sm: "222px" },
                        height: "40px",
                        display: 'flex',
                        gap: { xs: '12px', sm: "24px" },
                        alignItems: 'center'
                    }}>
                    <Typography
                        sx={{
                            color: '#1F2937',
                            fontSize: { xs: '22px', sm: "32px" }
                        }}
                    >Notification</Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '20px', sm: "24px" },
                            color: '#9CA3AF'
                        }}
                    >14</Typography>
                </Box>

            
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: { xs: '120px', sm: '164px', md: "184px" },
                            height: { xs: '40px', sm: "60px" },
                            px: { xs: '8px', sm: "24px" },
                            py: '12px',
                            gap: { xs: '3px', sm: '5px', md: "12px" },
                            backgroundColor: "#3B82F6"
                        }}
                    >
                        <FileCopyOutlinedIcon /><Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: "20px" } }}> Read All</Typography>
                    </Button>
                </Box>

            </Box>



            <Box
                sx={{
                    width: '260px',
                    height: '40px',
                    display: 'flex',
                    gap: { xs: '12px', sm: "24px" },
                    alignItems: 'center',

                }}
            >
                <Box
                    sx={{ width: '16px', height: '16px', bgcolor: '#07B007', borderRadius: '4px' }}
                ></Box>
                <Typography sx={{
                    color: '#1F2937',
                    fontSize: { xs: '22px', sm: "32px" }
                }}>BMW Sport</Typography>
            </Box>


        </Box>
    )
}

export default NotificationActive