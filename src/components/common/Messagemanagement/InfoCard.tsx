import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface CardProps {
  title: string;
  content: string;
  details?: { label: string; value: string }[];
}

const InfoCard: React.FC<CardProps> = ({ title, content, details }) => {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        border: "0.5px solid #CACACA",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "17px",
        px: "20px",
        py: "30px",
        mb: "20px",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#1F2937",
            fontSize: { xs: "18px", lg: "20px" },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#CACACA" }} />
      <Box>
        <Typography
          sx={{
            color: "#9CA3AF",
            fontSize: { xs: "14px", sm: "16px", lg: "18px" },
          }}
        >
          {content}
        </Typography>
      </Box>
      {details && details.length > 0 && (
        <>
          <Divider sx={{ bgcolor: "#CACACA" }} />
          {details.map((detail, index) => (
            <Box key={index} sx={{ display: "flex", gap: "5px" }}>
              <Typography
                sx={{ color: "#1F2937", fontSize: { xs: "14px", md: "16px" } }}
              >
                {detail.label}:
              </Typography>
              <Typography
                sx={{ color: "#9CA3AF", fontSize: { xs: "14px", md: "16px" } }}
              >
                {detail.value}
              </Typography>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default InfoCard;
