import React from "react";

import SearchBar from "@/components/common/SearchBar/SearchBar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Button, Stack } from "@mui/material";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import { useRouter } from "next/router";

const Buttons = [
  {
    label: "Compose Email",
    icon: <NoteAltOutlinedIcon />,
    path: "/admin/email/compose",
  },
  { label: "Bulk Mail", icon: <FilePresentOutlinedIcon />, path: "" },
  { label: "Download", icon: <FileDownloadOutlinedIcon />, path: "" },
];

type EmailActionsProps = {
  search: string;
  setSearch: (search: string) => void;
};

const EmailActions: React.FC<EmailActionsProps> = ({ search, setSearch }) => {
  const route = useRouter();
  return (
    <Stack spacing={4}>
      <Stack direction={{ lg: "row" }} spacing={4}>
        <SearchBar
          placeholder="Search User"
          search={search}
          setSearch={setSearch}
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
      <Stack direction={{ sm: "row" }} spacing={{ xs: 2 }}>
        {Buttons.map((btn, index) => (
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
    </Stack>
  );
};

export default EmailActions;
