import React from "react";
import { Paper, Typography, Divider, Stack } from "@mui/material";

interface EmailDisplayProps {
  subject: string;
  content: string[];
}

const EmailDisplay: React.FC<EmailDisplayProps> = ({ subject, content }) => {
  return (
    <Paper sx={{ p: 4, borderRadius: 3 }} elevation={1}>
      <Typography sx={{ fontSize: { xs: "16px", lg: "20px" } }}>
        <span style={{ color: "#9CA3AF", marginRight: 5, fontSize: "16px" }}>
          Subject:{" "}
        </span>
        <span style={{ fontWeight: 600 }}>{subject}</span>
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={{ xs: 1, md: 0 }}>
        {content.map((paragraph, index) => (
          <Typography
            sx={{ fontSize: { xs: "14px", lg: "16px" }, color: "#9CA3AF" }}
            key={index}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </Paper>
  );
};

export default EmailDisplay;
