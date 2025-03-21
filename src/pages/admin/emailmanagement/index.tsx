import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FlaggedMessage from "@/components/common/Messagemanagement/Flaggedmessage";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { Search } from "@mui/icons-material";
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

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";

const Buttons = [
  { label: "Compose Email", icon: <NoteAltOutlinedIcon />, path: "" },
  { label: "Bulk Mail", icon: <FilePresentOutlinedIcon />, path: "" },
  { label: "Download", icon: <FileDownloadOutlinedIcon />, path: "" },
];

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
    count: 428,
    path: "/admin/emailmanagement",
  },
  {
    label: "Inbox Mail",
    count: 37,
    path: "/admin/emailmanagement/inbox",
  },
  {
    label: "Outbox Mail",
    count: 42,
    path: "/admin/emailmanagement/outbox",
  },
  {
    label: "Draft Mail",
    count: 58,
    path: "/admin/emailmanagement/draft",
  },
];

const index = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ backgroundColor: "#F9F9F9", paddingBottom: "20px" }}>
      <ColorTabs tabData={tabs} defaultTab={0} />
      <Container>
        <Stack>
          <SearchBar
            placeholder="Search User"
            search={search}
            setSearch={setSearch}
          />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          {Buttons.map((btn, index) => (
            <Button
              onClick={() => console.log(btn.path)}
              variant="outlined"
              sx={{
                color: "#9CA3AF",
                borderColor: "#9CA3AF",
                borderRadius: "8px",
              }}
              startIcon={btn.icon}
            >
              {btn.label}
            </Button>
          ))}
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
