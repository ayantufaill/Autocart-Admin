import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const index = () => {

    const data = [
        { id: 1, title: "Today", value: 54, percentage: "+9.2%" , description: "Compared to yesterday"},
        { id: 2, title: "This Weak", value: 25455, percentage: "-9.2%" , description: "Compared to Last Weak"},
        { id: 3, title: "This Month", value: 347588, percentage: "+9.2%" , description: "Compared to Last Month"},
        { id: 4, title: "This Year", value: 875223, percentage: "+9.2%" , description: "Compared to Last Year"},
    ];

    return (
        <Box
            sx={{
                bgcolor: '#f9f9f9',
                px: '45px',
                py: "18px"
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
            >
                <Box>
                    <Typography sx={{ color: "#1F2937", fontSize: '24px', fontWeight: 600 }}>Flagged Messages</Typography>
                </Box>
                <Box sx={{ px: '6px' , gap:'28px'}}>
                    <Grid container spacing={2}>
                        {data.map((item) => (
                            <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                                <Box sx={{
                                    width: '242px',
                                    height: '124px',
                                    bgcolor: '#FFFFFF',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '206px' }}>
                                        <Typography sx={{ color: '#854D0E', fontSize: '15px' }}>{item.title}</Typography>
                                        <Box sx={{ p: '1px', height: '23px', width: "23px", border:'0.5px solid #CACACA', bgcolor:'white', borderRadius:'6px' , display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            <CalendarMonthOutlinedIcon sx={{color:'#9CA3AF', bgcolor:"white", width:'15px', height:'15px'}}/>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '206px', gap: '6px', justifyContent: 'center', height: '51px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography sx={{ color: '#1F2937', fontSize: '24px', fontWeight: 600 }}>{item.value}</Typography>
                                            <Typography sx={{ color: item.percentage.includes("+") ? "#22C55E" : "#EF4444", fontSize: '11px' }}>{item.percentage}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: '12px', color: '#9CA3AF' }}>{item.description}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default index