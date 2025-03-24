import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import { useRouter } from "next/router";
import { Add, CalendarViewMonthRounded, Send } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import CancelIcon from "@mui/icons-material/Cancel";
import WriteEmailMessage from "@/components/common/EmailManagement/WriteEmailMessage";

const tabs = [
  {
    label: "Mail Overview",
    path: "/admin/email",
  },
  {
    label: "Inbox Mail",
    path: "/admin/email/inbox",
  },
  {
    label: "Outbox Mail",
    path: "/admin/email/outbox",
  },
  {
    label: "Draft Mail",
    path: "/admin/email/draft",
  },
];

const buttons = [
  {
    label: "Compose Email",
    icon: <NoteAltOutlinedIcon />,
    path: "/admin/email/compose",
  },
  { label: "Bulk Mail", icon: <FilePresentOutlinedIcon />, path: "" },
];

const index = () => {
  const [search, setSearch] = useState<string>("");
  const route = useRouter();

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={-1} />
      <Container>
        <Stack direction={{ sm: "row" }} spacing={{ xs: 2 }}>
          <SearchBar
            placeholder="Search User"
            search={search}
            setSearch={setSearch}
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
        <Paper sx={{ p: 2, my: 3, borderRadius: 3 }}>
          {/* Head */}
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
                type="submit"
                disableRipple
                variant="contained"
                startIcon={<CalendarViewMonthRounded />}
                sx={{ bgcolor: "#1E40AF", borderRadius: 2 }}
              >
                Schedule Message
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
          <Typography color="#1F2937" fontWeight={600} fontSize={"16px"} mb={1}>
            Upload Recipient List
          </Typography>
          <Box
            sx={{
              py: 3,
              border: "2px solid",
              borderImageSlice: 3,
              borderImageRepeat: "round",
              borderImageSource: `url("data:image/svg+xml,%3Csvg%20width%3D%2242%22%20height%3D%2242%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200%20H%2016%20V%201%20H%201%20V%2016%20H%200%20V%200%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3Cpath%20d%3D%22M42%200%20V%2016%20H%2041%20V%201%20H%2026%20V%200%20H%2042%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3Cpath%20d%3D%22M42%2042%20H%2026%20V%2041%20H%2041%20V%2026%20H%2042%20V%2042%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3Cpath%20d%3D%22M0%2042%20V%2026%20H%201%20V%2041%20H%2016%20V%2042%20H%200%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3C%2Fsvg%3E")`,
              textAlign: "center",
            }}
          >
            <CloudUploadIcon
              sx={{ color: "#CACACA", width: "70px", height: "50px" }}
            />
            <Typography
              color="#1F2937"
              fontSize={"14px"}
              fontWeight={600}
              mt={1}
            >
              Choose a file or drag & drop it here
            </Typography>
            <Typography color="#CACACA" fontSize={"14px"} mt={0.5}>
              csv. xlsx. Up to 50MB{" "}
            </Typography>
            <Button
              variant="outlined"
              disableTouchRipple
              sx={{
                mt: 2,
                borderColor: "#CACACA",
                color: "#CACACA",
                borderRadius: 2,
              }}
            >
              Browse files
            </Button>
          </Box>

          <Box mt={3} mb={1} display={"flex"} gap={1}>
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
          <WriteEmailMessage />
        </Paper>
      </Container>
    </div>
  );
};

export default index;
