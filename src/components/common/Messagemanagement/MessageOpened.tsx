import React from "react";
import { Box, Typography, Button, Divider, Grid, Stack } from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import UserInfo from "@/components/common/Messagemanagement/DetailCard";
import InfoCard from "@/components/common/Messagemanagement/InfoCard";

const buttonData = [
  {
    label: "Mark Safe",
    color: "#60A5FA",
    icon: <FileCopyOutlinedIcon sx={{ height: "21px", width: "21px" }} />,
  },
  {
    label: "Warn Sender",
    color: "#F97316",
    icon: <WarningAmberOutlinedIcon sx={{ height: "21px", width: "21px" }} />,
  },
  {
    label: "Suspend Sender",
    color: "#9CA3AF",
    icon: <PauseCircleOutlinedIcon sx={{ height: "21px", width: "21px" }} />,
  },
  {
    label: "Delete Message",
    color: "#F87171",
    icon: <DeleteOutlinedIcon sx={{ height: "21px", width: "21px" }} />,
  },
];

const MessageData = {
  title: "Message",
  content:
    "Lorem ipsum dolor sit amet consectetur. Metus duis augue massa non. Sollicitudin cursus id sit leo sed arcu nam libero elit. Ultrices tincidunt morbi eleifend ut nunc vitae. Elementum luctus aliquam sed a sed a morbi nunc facilisi. Adipiscing egestas nunc interdum fusce. Congue faucibus eget ullamcorper vel sem. Erat in purus tincidunt risus laoreet fusce. Nunc semper pulvinar mauris duis varius turpis tempus. Tempus amet cursus morbi duis pellentesque orci diam integer.",
  details: [
    { label: "Date sent", value: "Sunday 26th December 2025" },
    { label: "Time sent", value: "09:57pm" },
  ],
};

const FlagReasonData = {
  title: "Reason for Flag",
  content:
    "Lorem ipsum dolor sit amet consectetur. Metus duis augue massa non. Sollicitudin cursus id sit leo sed arcu nam libero elit. Ultrices tincidunt morbi eleifend ut nunc vitae. Elementum luctus aliquam sed a sed a morbi nunc facilisi. Adipiscing egestas nunc interdum fusce. Congue faucibus eget tincidunt risus laoreet fusce. Nunc semper pulvinar mauris duis varius turpis tempus. Tempus amet cursus morbi duis pellentesque orci diam integer.Egestas volutpat elit lacus risus magna at. Dictumst aliquam vulputate augue aliquet amet nibh aliquam et. Urna quis faucibus odio in mauris volutpat. Blandit etiam viverra dictum donec tristique pulvinar sit consectetur et. Eget tellus imperdiet orci dui pharetra neque duis quam. Amet lorem facilisi enim at sit proin justo nisl elementum.",
};

type MessageOpenedProps = {
  IconColor: string;
  title: string;
};

const MessageOpened: React.FC<MessageOpenedProps> = ({ IconColor, title }) => {
  console.log(IconColor);

  return (
    <Box
      sx={{ px: { xs: "20px", lg: "40px" }, bgcolor: "#F9F9F9", pb: "30px" }}
    >
      <Stack
        spacing={{ xs: 2, lg: 0 }}
        direction={{ lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={4}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Box
            sx={{
              width: "16px",
              height: "16px",
              bgcolor: IconColor,
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              color: "#1F2937",
              fontSize: { xs: "18px", lg: "20px" },
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
        </Stack>

        <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
          {buttonData.map((btn, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{ bgcolor: btn.color }}
              startIcon={btn.icon}
            >
              {btn.label}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "65px" }}>
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            border: "0.5px solid #CACACA",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#1F2937",
                fontSize: { xs: "20px", lg: "22px" },
                fontWeight: 600,
              }}
            >
              User Details
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: "#CACACA" }} />
          <UserInfo />
        </Box>

        <InfoCard {...MessageData} />
        <InfoCard {...FlagReasonData} />
      </Box>
    </Box>
  );
};

export default MessageOpened;
