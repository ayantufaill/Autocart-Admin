import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import EmailActions from "@/components/common/EmailManagement/EmailActions";
import FlaggedMessage from "@/components/common/Messagemanagement/Flaggedmessage";
import { Search } from "@mui/icons-material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Today",
    value: 54,
    percentage: "+9.2%",
    description: "Compared to yesterday",
  },
  {
    id: 2,
    title: "This Week",
    value: 25455,
    percentage: "-9.2%",
    description: "Compared to Last Week",
  },
  {
    id: 3,
    title: "This Month",
    value: 347588,
    percentage: "+9.2%",
    description: "Compared to Last Month",
  },
  {
    id: 4,
    title: "This Year",
    value: 875223,
    percentage: "+9.2%",
    description: "Compared to Last Year",
  },
];

const Mails = [
  { title: "Inbox Mail", data: data },
  { title: "Outbox Mail", data: data },
];

const tabs = [
  {
    label: "Mail Overview",
    path: "/admin/email",
    status: "",
  },
  {
    label: "Inbox Mail",
    path: "/admin/email/inbox",
    status: "Inbox",
  },
  {
    label: "Outbox Mail",
    path: "/admin/email/outbox",
    status: "Outbox",
  },
  {
    label: "Draft Mail",
    path: "/admin/email/draft",
    status: "Draft",
  },
];

const index = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div style={{ backgroundColor: "#F9F9F9", paddingBottom: "20px" }}>
      <ColorTabs tabData={tabs} defaultTab={0} setStatus={setStatus} />
      <Container sx={{ pb: 3 }}>
        <Stack spacing={4}>
          <Stack direction={{ lg: "row" }} spacing={4}>
            <TextField
              placeholder={"Search User"}
              variant="outlined"
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                fontSize: "12px",
                color: "#BFC3CB",
                marginBottom: 2,
                backgroundColor: "#F9F9F9",
                width: { xs: "100%", md: "70%" },
                maxWidth: "600px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  maxHeight: "43px",
                },
                "& ::placeholder": {
                  color: "#CBCED4",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "#BFC3CB" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction={{ sm: "row" }} spacing={{ xs: 2 }}>
              <Button
                variant="outlined"
                startIcon={<CalendarMonthOutlinedIcon />}
                sx={{
                  borderColor: "#9CA3AF",
                  borderRadius: "10px",
                  maxHeight: "43px",
                  color: "#9CA3AF",
                }}
              >
                From Date
              </Button>

              <Button
                variant="outlined"
                startIcon={<CalendarMonthOutlinedIcon />}
                sx={{
                  borderColor: "#9CA3AF",
                  borderRadius: "10px",
                  maxHeight: "43px",
                  color: "#9CA3AF",
                }}
              >
                To Date
              </Button>
            </Stack>
          </Stack>
          <EmailActions search={search} setSearch={setSearch} />
        </Stack>
        <Box>
          {Mails.map((mail, index) => (
            <Box
              key={index}
              sx={{
                my: 5,
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              <Typography
                sx={{
                  color: "#1F2937",
                  fontSize: { xs: "18px", md: "20px", xl: "22px" },
                  fontWeight: 600,
                }}
              >
                {mail.title}
              </Typography>
              <Grid container spacing={2}>
                {mail.data.map((item) => (
                  <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                    <FlaggedMessage {...item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default index;
