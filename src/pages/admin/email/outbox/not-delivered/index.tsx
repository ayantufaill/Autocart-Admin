import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import EmailActions from "@/components/common/EmailManagement/EmailActions";
import EmailTabs from "@/components/common/EmailManagement/EmailTabs";
import OutboxTable from "@/components/common/EmailTable/OutboxTable";
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

const emailData: {
  status: "Not Delivered" | "Delivered" | "Opened";
  statusDate: string;
  userId: string;
  email: string;
  action: string;
  dateSent: string;
}[] = [
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    action: "Replied",
    dateSent: "20/01/2025",
  },
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    action: "- - -",
    dateSent: "20/01/2025",
  },
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "adeolababasanye524542@gmail.com",
    action: "- - -",
    dateSent: "20/01/2025",
  },
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "chrismaya442@gmail.com",
    action: "Replied",
    dateSent: "20/01/2025",
  },
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    action: "Forwarded",
    dateSent: "20/01/2025",
  },
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "ayelekeabdulmuizz@gmail.com",
    action: "- - -",
    dateSent: "20/01/2025",
  },
  {
    status: "Not Delivered",
    statusDate: "20/01/2025",
    userId: "USER200",
    email: "annatonellegavi@gmail.com",
    action: "- - -",
    dateSent: "20/01/2025",
  },
];

const index = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={2} />
      <Container sx={{ pb: 3 }}>
        <EmailActions search={search} setSearch={setSearch} />
        <EmailTabs
          tabs={[
            { title: "All", path: "/admin/email/outbox" },
            { title: "Delivered", path: "/admin/email/outbox/delivered" },
            { title: "Opened", path: "/admin/email/outbox/opened" },
            {
              title: "Not Delivered",
              path: "/admin/email/outbox/not-delivered",
            },
          ]}
          defaultTabValue={3}
        />
        <OutboxTable emails={emailData} search={search} setSearch={setSearch} />
      </Container>
    </div>
  );
};

export default index;
