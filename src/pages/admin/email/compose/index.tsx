import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Add, Search, Send } from "@mui/icons-material";
import WriteEmailMessage from "@/components/common/EmailManagement/WriteEmailMessage";
import SearchBar from "@/components/common/SearchBar/SearchBar";

import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import { useRouter } from "next/router";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";

const buttons = [
  {
    label: "Compose Email",
    icon: <NoteAltOutlinedIcon />,
    path: "/admin/email/compose",
  },
  { label: "Bulk Mail", icon: <FilePresentOutlinedIcon />, path: "" },
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

const ComposeEmail = () => {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<String>("");
  const route = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
      }}
    >
      <ColorTabs tabData={tabs} defaultTab={4} setStatus={setStatus} />
      <Container>
        <Stack direction={{ sm: "row" }} spacing={{ xs: 2 }} mb={3}>
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
          {buttons.map((btn, index) => (
            <Button
              key={index}
              onClick={() => route.push(btn.path)}
              variant="outlined"
              sx={{
                color: "#9CA3AF",
                borderColor: "#9CA3AF",
                borderRadius: "10px",
                height: "43px",
              }}
              startIcon={btn.icon}
            >
              {btn.label}
            </Button>
          ))}
        </Stack>
        <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
          <form>
            {/* Header */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              mb={1}
            >
              <IconButton>
                <CancelIcon />
              </IconButton>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  type="submit"
                  disableRipple
                  variant="contained"
                  startIcon={<Send />}
                  sx={{ bgcolor: "#1F2937", borderRadius: 2 }}
                >
                  Send Message
                </Button>
                <Button
                  disableRipple
                  variant="outlined"
                  startIcon={<Add />}
                  sx={{
                    borderColor: "#E4E4E4",
                    borderRadius: 2,
                    color: "#1F2937",
                  }}
                >
                  Save to Draft
                </Button>
              </Stack>
            </Stack>

            {/* Body */}
            <Box mt={2}>
              {/* To Field */}
              <Box mb={1} display={"flex"} gap={1}>
                <span style={{ color: "#9CA3AF" }}>To:</span>
                <input
                  name="to"
                  defaultValue="ayelekeabdulmuizz@gmail.com"
                  style={{
                    all: "unset",
                    fontWeight: 600,
                    color: "#1F2937",
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                />
              </Box>
              <Divider sx={{ mb: 2 }} />

              {/* Subject Field */}
              <Box mb={1} display={"flex"} gap={1}>
                <span style={{ color: "#9CA3AF" }}>Subject:</span>
                <input
                  name="subject"
                  defaultValue={"Rectification of your Transaction"}
                  style={{
                    all: "unset",
                    fontWeight: 600,
                    color: "#1F2937",
                    fontSize: "16px",
                    flexGrow: 1,
                  }}
                />
              </Box>
              <Divider sx={{ mb: 2 }} />

              {/* Message Field */}
              <WriteEmailMessage />
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ComposeEmail;
