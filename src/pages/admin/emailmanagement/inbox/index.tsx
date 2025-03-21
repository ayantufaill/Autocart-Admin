import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import EmailTabs from "@/components/common/EmailManagement/EmailTabs";
import EmailTable, {
  EmailMessage,
} from "@/components/common/EmailTable/EmailTable";
import { Container } from "@mui/material";
import React, { useState } from "react";

const emailData: EmailMessage[] = [
  {
    status: "Read",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Unread",
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    content: "Lorem ipsum dolor sit amet consectetur.",
    date: "20/01/2025",
  },
  {
    status: "Unread",
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
    status: "Unread",
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
  const [search, setSearch] = useState<string>("");
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={1} />
      <EmailTabs
        tabs={[
          { title: "All", path: "/" },
          { title: "Read", path: "/admin/emailmanagement/inbox/read" },
          { title: "Unread", path: "/admin/emailmanagement/inbox/unread" },
        ]}
        defaultTabValue={0}
      />
      <Container sx={{ py: 3 }}>
        <EmailTable emails={emailData} search={search} setSearch={setSearch} />
      </Container>
    </div>
  );
};

export default index;
