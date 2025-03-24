import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import EmailActions from "@/components/common/EmailManagement/EmailActions";
import DraftTable from "@/components/common/EmailTable/DraftTable";
import { Box, Container } from "@mui/material";
import React, { useState } from "react";

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

const emailData: {
  userId: string;
  email: string;
  content: string;
  dateSaved: string;
  daysInDraft: number;
}[] = [
  {
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 2,
  },
  {
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 4,
  },
  {
    userId: "USER200",
    email: "adeolababasanye524542@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 3,
  },
  {
    userId: "USER200",
    email: "chrismaya442@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 4,
  },
  {
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 2,
  },
  {
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 6,
  },
  {
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    dateSaved: "20/01/2025",
    daysInDraft: 1,
  },
];

const index = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={3} />
      <Container sx={{ pb: 3 }}>
        <EmailActions search={search} setSearch={setSearch} />
        <Box mt={4}>
          <DraftTable
            emails={emailData}
            search={search}
            setSearch={setSearch}
          />
        </Box>
      </Container>
    </div>
  );
};

export default index;
