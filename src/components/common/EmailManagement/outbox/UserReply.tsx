import React from "react";
import { Paper, Typography, Divider, Stack } from "@mui/material";

interface UserReply {
  content: string[];
}

const UserReply: React.FC<UserReply> = ({ content }) => {
  return (
    <Paper sx={{ p: 4, borderRadius: 3 }} elevation={1}>
      <Typography
        sx={{ fontSize: { xs: "16px", lg: "20px", fontWeight: 600 } }}
      >
        User Reply
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

export default UserReply;
