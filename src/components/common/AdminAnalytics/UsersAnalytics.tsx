import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ContentCards from '../AdminCards/AdsCard'
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUsersAnalytics } from "@/redux/thunk/userThunk";

const UsersAnalytics = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { totalUsers, activeUsers, dailyRegistered, dailyLoggedIn, bannedUsers, suspendedUsers, } =
        useSelector((state: RootState) => state.userAnalytics);

    useEffect(() => {
        dispatch(fetchUsersAnalytics());
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("usersCount", JSON.stringify({
            allUsers: totalUsers,
            activeUsers: activeUsers,
            suspendedUsers: suspendedUsers,
            bannedUsers: bannedUsers,
        }))

    }, [totalUsers, activeUsers, bannedUsers, suspendedUsers])

    const users = [
        {
            title: "Total Users",
            value: totalUsers?.toLocaleString?.() || "0",
            color: "#1E40AF",
            change: "+9.2%", // Placeholder
            unit: "Users",
        },
        {
            title: "Active Users",
            value: activeUsers?.toLocaleString?.() || "0",
            color: "#166534",
            change: "+9.2%",
            unit: "Users",
        },
        {
            title: "Daily Register Users",
            value: dailyRegistered?.toLocaleString?.() || "0",
            color: "#854D0E",
            change: "+9.2%",
            unit: "Users",
        },
        {
            title: "Daily Login",
            value: dailyLoggedIn?.toLocaleString?.() || "0",
            color: "#991B1B",
            change: "-9.2%",
            unit: "Users",
        },
    ];

    return (
        <Box sx={{ mb: 1 }}>
            <Box
                sx={{
                    display: "flex",
                    gap: { xs: "10px", md: "12px", lg: "16px" },
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <PeopleOutlineOutlinedIcon
                    sx={{
                        height: { xs: "22px", xl: "24px" },
                        width: { xs: "22px", xl: "24px" },
                        color: "#9CA3AF",
                    }}
                />
                <Typography
                    sx={{
                        fontSize: { xs: "18px", md: "20px", xl: "22px" },
                        color: "#1F2937",
                        fontWeight: 600,
                    }}
                >
                    Users
                </Typography>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    {users.map((user, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                            <ContentCards {...user} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default UsersAnalytics;
