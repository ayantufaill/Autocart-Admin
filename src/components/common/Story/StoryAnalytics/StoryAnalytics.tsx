import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "@/redux/store";
import { fetchStoryAnalytics } from '@/redux/slices/storyAnalyticsSlice';
import { Grid } from "@mui/material"
import FinanceStatCard from '../../AdminCards/FinanceCard';

const StoryAnalytics = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { counts } = useSelector((state: RootState) => state.storyAnalytics)

    useEffect(() => {
        dispatch(fetchStoryAnalytics())
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("storyCounts", JSON.stringify(counts))
    }, [counts])

    const stories = [
        {
            title: "Daily",
            amount: counts.daily || 0,
            percentage: "+9.2%",
            comparisonText: "Compared to yesterday",
        },
        {
            title: "Weekly",
            amount: counts.weekly || 0,
            percentage: "+9.4%",
            comparisonText: "Compared to yesterday",
        },
        {
            title: "Monthly",
            amount: counts.monthly || 0,
            percentage: "-9.9%",
            comparisonText: "Compared to yesterday",
        },
        {
            title: "Yearly",
            amount: counts.yearly || 0,
            percentage: "+9.1%",
            comparisonText: "Compared to yesterday",
        },
    ];

    return (
        <>
            <Grid container spacing={2}>
                {stories.map((data, index) => (
                    <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                        <FinanceStatCard {...data} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default StoryAnalytics