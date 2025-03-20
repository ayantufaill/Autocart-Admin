import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

interface FinanceStatCardProps {
  title: string;
  amount: string | number;
  percentage?: string;
  comparisonText?: string;
}

const FinanceStatCard: React.FC<FinanceStatCardProps> = ({
  title,
  amount,
  percentage = "",
  comparisonText = "",
}) => {
  return (
    <Box
      sx={{
        height: "130px",
        bgcolor: "#FFFFFF",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "0.5px solid #CACACA",
        px: { xs: "14px", lg: "18px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          sx={{ color: "#854D0E", fontSize: { xs: "14px", md: "16px" } }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            p: "1px",
            height: "23px",
            width: "23px",
            border: "0.5px solid #CACACA",
            bgcolor: "white",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalendarMonthOutlinedIcon
            sx={{ color: "#9CA3AF", width: "15px", height: "15px" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "6px",
          justifyContent: "center",
          height: "51px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#1F2937",
              fontSize: { xs: "18px", md: "20px", xl: "22px" },
              fontWeight: 500,
            }}
          >
            {amount}
          </Typography>

          <Typography
            sx={{
              color: percentage.includes("+") ? "#22C55E" : "#EF4444",
              fontSize: "12px",
            }}
          >
            {percentage}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            color: "#9CA3AF",
          }}
        >
          {comparisonText}
        </Typography>
      </Box>
    </Box>
  );
};

export default FinanceStatCard;
