import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const stats = [
    { title: "Total Ads", value: "7,854,472", color: "#1E40AF", change: "+9.2%" },
    { title: "Pending Ads", value: "7,854,472", color: "#854D0E", change: "+9.2%" },
    { title: "Active Ads", value: "7,854,472", color: "#166534", change: "+9.2%" },
    { title: "Daily Ads Created", value: "2.7,854,472", color: "#991B1B", change: "+9.2%" }
];

const users = [
    { title: "Total Users", value: "7,854,472", color: "#1E40AF", change: "+9.2%" },
    { title: "Active Users", value: "7,854,472", color: "#166534", change: "+9.2%" },
    { title: "Daily Register Users", value: "7,854,472", color: "#854D0E", change: "+9.2%" },
    { title: "Daily Login", value: "2.7,854,472", color: "#991B1B", change: "-9.2%" }
];

const Content = () => {
    return (
        <Box sx={{ backgroundColor: "#F9F9F9", px: '40px', py: '40px', width: "100%", height: {xs:'1750px',md:'1150px', lg:"1100px", xl:'981px'} }}>
            <Box sx={{ height: "134px" }}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        height: "108px",
                        borderRadius: "24px",
                        px: "24px",
                        py: "16px",
                        border: "0.5px solid #CACACA",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'space-between'
                    }}
                >
                    <Box sx={{ width: "415px", height: "84px", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Box sx={{ width: "278px" }}>
                            <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "#1F2937" }}>
                                Today
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", width: "100%", mt: "5px" }}>
                            <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#9CA3AF" }}>
                                Sunday 19TH January 2025
                            </Typography>
                            <Box sx={{ ml: "40px" }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#9CA3AF" }}>
                                    01:25pm
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
{/* content */}
                    <Box
                    sx={{
                        width:'230px',
                        height:'60px',
                        borderRadius:'12px',
                        border: "0.5px solid #CACACA",
                        py:'16px',
                        px:'24px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:"space-between",
                        ml:'40px'
                    }}
                    >
                        <CalendarMonthOutlinedIcon sx={{width:'36px', height:'36px', color:'#9CA3AF'}}/>
                        <Typography sx={{fontSize:'20px', color:'#9CA3AF', width:'130px', height:'30px'}}>Change Date</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mt: "48px", height: "249px" }}>
                <Box sx={{ display: "flex" }}>
                    <AdsClickOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: "32px", fontWeight: "semibold", ml: "20px" }}>Ads</Typography>
                </Box>
                <Box sx={{ mt: "20px" }}>
                    <Grid container spacing={2}>
                        {stats.map((stat, index) => (
                            <Grid item xs={12} md={6} xl={3} key={index}>
                                <Box
                                    sx={{
                                        bgcolor: "white",
                                        borderRadius: "8px",
                                        border: "0.5px solid #CACACA",
                                        p: "20px",
                                        height: "137px",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Box sx={{ width: "12px", height: "12px", bgcolor: stat.color, marginRight: "10px", borderRadius: "4px" }}></Box>
                                            <Typography sx={{ fontSize: "20px", color: "#9CA3AF" }}>{stat.title}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: stat.change.includes("+") ? "#22C55E" : "#EF4444" }}>
                                                {stat.change}
                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: "20px", display: "flex", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "32px", color: "#1F2937" }}>{stat.value}</Typography>
                                        <Typography sx={{ fontSize: "20px", color: "#9CA3AF", marginLeft: "10px" }}>
                                            {stat.title.includes("Revenue") ? "" : "Ads"}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box sx={{ mt: { xs: "500px", md: "200px", xl: "48px" }, height: "249px"}}>

                <Box sx={{ display: "flex" }}>
                    <PeopleOutlineOutlinedIcon  sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
                    <Typography sx={{ fontSize: "32px", fontWeight: "semibold", ml: "20px" }}>Users</Typography>
                </Box>
                <Box sx={{ mt: "20px" }}>
                    <Grid container spacing={2}>
                        {users.map((user, index) => (
                            <Grid item xs={12} md={6} xl={3} key={index}>
                                <Box
                                    sx={{
                                        bgcolor: "white",
                                        borderRadius: "8px",
                                        border: "0.5px solid #CACACA",
                                        p: "20px",
                                        height: "137px",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Box sx={{ width: "12px", height: "12px", bgcolor: user.color, marginRight: "10px", borderRadius: "4px" }}></Box>
                                            <Typography sx={{ fontSize: "20px", color: "#9CA3AF" }}>{user.title}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: user.change.includes("+") ? "#22C55E" : "#EF4444"}}>
                                                {user.change}
                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: "20px", display: "flex", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "32px", color: "#1F2937" }}>{user.value}</Typography>
                                        <Typography sx={{ fontSize: "20px", color: "#9CA3AF", marginLeft: "10px" }}>
                                            {user.title.includes("Revenue") ? "" : "Users"}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Box>
    );
}

export default Content;
