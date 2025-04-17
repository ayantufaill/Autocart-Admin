import React, { useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchAdsAnalytics } from '@/redux/thunk/adsAnalytics.thunk';
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import ContentCards from '../AdminCards/AdsCard';

const AdsAnalytivs = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { totalAds, todayAdsCount, statusCounts, } = useSelector(
        (state: RootState) => state.adsAnalytics
    );

    useEffect(() => {
        dispatch(fetchAdsAnalytics());
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("adsCounts", JSON.stringify(statusCounts));
    }, [statusCounts])

    const getStatusCount = (status: string) => {
        return (
            statusCounts.find(
                (s: { status: string }) =>
                    s.status.toUpperCase() === status.toUpperCase()
            )?.count || 0
        );
    };

    const stats = [
        {
            title: "Total Ads",
            value: totalAds.toLocaleString(),
            color: "#1E40AF",
            change: "+9.2%",
            unit: "Ads",
        },
        {
            title: "Pending Ads",
            value: getStatusCount("PENDING").toLocaleString(),
            color: "#854D0E",
            change: "+9.2%",
            unit: "Ads",
        },
        {
            title: "Active Ads",
            value: getStatusCount("ACTIVE").toLocaleString(),
            color: "#166534",
            change: "+9.2%",
            unit: "Ads",
        },
        {
            title: "Daily Ads Created",
            value: todayAdsCount.toLocaleString(),
            color: "#991B1B",
            change: "+9.2%",
            unit: "Ads",
        },
    ];


    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    gap: { xs: "10px", md: "12px", lg: "16px" },
                    alignItems: "center",
                    mb: 3,
                    mt: { xs: 4, md: 10, lg: 0 },
                }}
            >
                <AdsClickOutlinedIcon
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
                    Ads
                </Typography>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    {stats.map((stat, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                            <ContentCards {...stat} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default AdsAnalytivs;
