import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Grid } from "@mui/material";

const data = [
    { day: "01", value: 20 },
    { day: "02", value: 10 },
    { day: "03", value: 12 },
    { day: "04", value: 18 },
    { day: "05", value: 6 },
    { day: "06", value: 4 },
    { day: "07", value: 14 },
    { day: "08", value: 8 },
    { day: "09", value: 10 },
    { day: "10", value: 12 },
    { day: "11", value: 19 },
    { day: "12", value: 15 },
    { day: "13", value: 16 },
    { day: "14", value: 5 },
    { day: "15", value: 3 },
    { day: "16", value: 7 },
    { day: "17", value: 9 },
    { day: "18", value: 14 },
    { day: "19", value: 15 },
    { day: "20", value: 11 },
    { day: "21", value: 10 },
];

export default function CustomBarChart() {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ width: "100%", overflowX: "auto", display: "flex", justifyContent: "center" }}>
                    <BarChart
                        dataset={data}
                        xAxis={[{ scaleType: "band", dataKey: "day" }]}
                        yAxis={[
                            {
                                valueFormatter: (value) => `$${value}`,
                            },
                        ]}
                        series={[
                            {
                                dataKey: "value",
                                color: "url(#redGradient)",
                            },
                        ]}
                       
                        height={400}
                    >
                     
                        <svg width="0" height="0">
                            <defs>
                                <linearGradient id="redGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#DE4949" />
                                    <stop offset="100%" stopColor="#F2C89C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </BarChart>
                </Box>
            </Grid>
        </Grid>
    );
}
