import { fetchMessageAnalytics } from '@/redux/slices/messageAnalyticsSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "@/redux/store";
import { Typography, Grid } from '@mui/material';
import FinanceStatCard from '../../AdminCards/FinanceCard';

interface ReportedMessagesProps {
    showTitle?: boolean;
}

const ReportedMessagesAnalytics: React.FC<ReportedMessagesProps> = ({ showTitle = true }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { counts } = useSelector((state: RootState) => state.messageAnalytics)

    const reportedMessage = [
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

    useEffect(() => {
        dispatch(fetchMessageAnalytics())
    }, [dispatch])

    return (
        <>
            {showTitle && <Typography
                sx={{
                    fontSize: { xs: "14px", lg: "16px" },
                    color: "#9CA3AF",
                    mb: "16px",
                }}
            >
                Reported Message
            </Typography>}
            <Grid container spacing={2}>
                {reportedMessage.map((data, index) => (
                    <Grid item xs={12} md={6} lg={3} xl={3} key={index}>
                        <FinanceStatCard {...data} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ReportedMessagesAnalytics