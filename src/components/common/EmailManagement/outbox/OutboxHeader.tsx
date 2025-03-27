import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { Reply, Forward } from "@mui/icons-material";

interface MailHeaderProps {
  color: string;
  title: string;
  replyPath?: string;
  forwardPath?: string;
}

const OutboxHeader: React.FC<MailHeaderProps> = ({
  color,
  title,
  replyPath,
  forwardPath,
}) => {
  return (
    <Stack
      direction={{ md: "row" }}
      justifyContent="space-between"
      spacing={{ xs: 2, md: 0 }}
      mb={3}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Box
          sx={{
            bgcolor: color,
            width: { xs: "12px", md: "14px" },
            height: { xs: "12px", md: "14px" },
            borderRadius: "3px",
          }}
        />
        <Typography
          sx={{
            color: "#1F2937",
            fontWeight: 600,
            fontSize: { xs: "16px", lg: "20px" },
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#9CA3AF" }}>
          30/01/2025
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#9CA3AF" }}>
          04:35PM
        </Typography>
      </Stack>
      <Stack direction={{ sm: "row" }} spacing={{ xs: 2 }}>
        <Button
          variant="outlined"
          startIcon={<Reply />}
          sx={{
            borderColor: "#9CA3AF",
            color: "#9CA3AF",
            maxWidth: "210px",
            borderRadius: 2,
          }}
          href={replyPath}
        >
          Reply Mail
        </Button>
        <Button
          variant="outlined"
          startIcon={<Forward />}
          sx={{
            borderColor: "#9CA3AF",
            color: "#9CA3AF",
            maxWidth: "210px",
            borderRadius: 2,
          }}
          href={forwardPath}
        >
          Forward Mail
        </Button>
      </Stack>
    </Stack>
  );
};

export default OutboxHeader;
