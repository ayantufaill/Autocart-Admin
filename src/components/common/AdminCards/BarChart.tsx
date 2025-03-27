import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Button, Grid } from "@mui/material";

import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

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
    <Box textAlign={{ xs: "left", lg: "right" }}>
      <Button
        variant="outlined"
        sx={{ borderColor: "#CACACA", color: "#9CA3AF" }}
        endIcon={<UnfoldMoreIcon sx={{ color: "#1F2937" }} />}
      >
        Jan 2025
      </Button>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BarChart
          borderRadius={8}
          grid={{
            horizontal: true,
          }}
          dataset={data}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "day",
            },
          ]}
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
          sx={{
            [`& .${axisClasses.line}`]: {
              display: "none",
            },
            [`& .${chartsGridClasses.line}`]: {
              strokeDasharray: "5 5",
              strokeWidth: 1,
            },
            [`& .${axisClasses.left} text`]: {
              fill: "#9CA3AF",
            },
            [`& .${axisClasses.bottom} text`]: {
              fill: "#9CA3AF",
            },
            [`& .${axisClasses.tick}`]: {
              display: "none",
            },
            // gap: 10,
          }}
        >
          <svg width="0" height="0">
            <defs>
              <linearGradient id="redGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#E36B5F" />
                <stop offset="100%" stopColor="#EFB590" />
              </linearGradient>
            </defs>
          </svg>
        </BarChart>
      </Box>
    </Box>
  );
}
