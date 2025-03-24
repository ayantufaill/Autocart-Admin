import React, { useState } from "react";
import NotificationActive from "@/components/common/Notification/NotificationActive";
import {
  Avatar,
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Email } from "@mui/icons-material";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const emails: {
  id: number;
  name: string;
  email: string;
  image: string;
  subject: string;
  dateSent: string;
  status: "Read" | "Unread";
}[] = [
  {
    id: 1,
    name: "Florence Shaw",
    email: "example@gmail.com",
    image: "/Images/user/user.svg",
    subject: "This is the subject of the mail received.",
    dateSent: "1/2/2025",
    status: "Read",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    image: "/Images/user/user.svg",
    subject: "Meeting scheduled for Monday.",
    dateSent: "2/2/2025",
    status: "Unread",
  },
];

const adNotifications: {
  id: number;
  title: string;
  status: "Approved" | "Rejected";
  reason: string;
  imageUrl: string;
}[] = [
  {
    id: 101,
    title: "Luxury Apartment for Rent",
    status: "Approved",
    reason: "Your ad has been reviewed and approved.",
    imageUrl: "/Images/Ads/image.png",
  },
  {
    id: 102,
    title: "Car for Sale - Toyota Corolla",
    status: "Rejected",
    reason: "Your ad was rejected due to missing details.",
    imageUrl: "/Images/Ads/image.png",
  },
];

const statusAdsColors = {
  Approved: { color: "#07B007" },
  Rejected: { color: "#EF4444" },
};

const statusEmailColors = {
  Read: { color: "#6B7280" },
  Unread: { color: "#EF4444" },
};

function index() {
  const [emailList, setEmailList] = useState(emails);
  const [ads, setAds] = useState(adNotifications);

  const handleDismissEmail = (id: number) => {
    setEmailList(emailList.filter((email) => email.id !== id));
  };

  const handleDismissAllEmails = () => {
    setEmailList([]);
  };

  const handleDismissAd = (id: number) => {
    setAds(ads.filter((ad) => ad.id !== id));
  };

  const handleDismissAllAds = () => {
    setAds([]);
  };

  return (
    <div style={{ minHeight: "100%", backgroundColor: "#F9F9F9" }}>
      <NotificationActive />

      <Container sx={{ py: 3 }}>
        {emailList.length > 0 && <Divider sx={{ my: 3 }} />}

        <Box>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            display={emailList.length > 0 ? "flex" : "none"}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <Email sx={{ color: "#9CA3AF" }} /> Emails
            </Typography>
            <Box>
              <IconButton>
                <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton onClick={handleDismissAllEmails}>
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          </Stack>
          {emailList.map((notification) => (
            <Box
              key={notification.id}
              sx={{
                opacity: notification.status !== "Read" ? 1 : 0.6,
                p: 2,
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: 1,
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 2,
                borderLeft: `6px solid ${
                  statusEmailColors[notification.status].color
                }`,
              }}
            >
              <Avatar src={notification.image} alt={notification.name} />
              <Box flexGrow={1}>
                <Typography fontWeight={600}>{notification.email}</Typography>
                <Typography variant="subtitle2" sx={{ color: "#6C6685" }}>
                  {notification.dateSent}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6C6685" }}>
                  {notification.subject}
                </Typography>
              </Box>
              <IconButton onClick={() => handleDismissEmail(notification.id)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>

        {ads.length > 0 && <Divider sx={{ my: 3 }} />}

        {/* Ad Notifications */}
        <Box>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            display={ads.length > 0 ? "flex" : "none"}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <AdsClickIcon sx={{ color: "#9CA3AF" }} /> Ads
            </Typography>
            <Box>
              <IconButton>
                <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton onClick={handleDismissAllAds}>
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          </Stack>

          {ads.map((ad) => (
            <Box
              key={ad.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: 1,
                mt: 2,
                borderLeft: `6px solid ${statusAdsColors[ad.status].color}`,
              }}
            >
              <Avatar
                src={ad.imageUrl}
                alt={ad.title}
                sx={{ width: 40, height: 40 }}
              />
              <Box flexGrow={1}>
                <Typography fontWeight={600}>{ad.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: statusAdsColors[ad.status].color }}
                >
                  {ad.status}
                </Typography>
                <Typography variant="body2" color="gray">
                  {ad.reason}
                </Typography>
              </Box>
              <IconButton onClick={() => handleDismissAd(ad.id)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default index;
