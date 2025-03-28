import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

interface FlaggedMessageProps {
  title: string;
  value: number;
  percentage: string;
  description: string;
}

const FlaggedMessage: React.FC<FlaggedMessageProps> = ({
  title,
  value,
  percentage,
  description,
}) => {
  return (
    <Box
      sx={{
        height: "126px",
        bgcolor: "#FFFFFF",
        borderRadius: "6px",
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
            {value}
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
        <Typography sx={{ fontSize: "14px", color: "#9CA3AF" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlaggedMessage;
