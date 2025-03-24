import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import EmailActions from "@/components/common/EmailManagement/EmailActions";
import EmailTabs from "@/components/common/EmailManagement/EmailTabs";
import EmailTable, {
  EmailMessage,
} from "@/components/common/EmailTable/EmailTable";
import { Container } from "@mui/material";
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

const emailData: EmailMessage[] = [
  {
    status: "Read",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Read",
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Read",
    userId: "USER200",
    email: "adeolababasanye524542@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Read",
    userId: "USER200",
    email: "chrismaya442@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Read",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Read",
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Read",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
];

const index = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={1} />
      <Container sx={{ pb: 3 }}>
        <EmailActions search={search} setSearch={setSearch} />
        <EmailTabs
          tabs={[
            { title: "All", path: "/admin/email/inbox" },
            { title: "Read", path: "/admin/email/inbox/read" },
            { title: "Unread", path: "/admin/email/inbox/unread" },
          ]}
          defaultTabValue={1}
        />
        <EmailTable emails={emailData} search={search} setSearch={setSearch} />
      </Container>
    </div>
  );
};

export default index;
