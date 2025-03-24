import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import EmailActions from "@/components/common/EmailManagement/EmailActions";
import FlaggedMessage from "@/components/common/Messagemanagement/Flaggedmessage";

import { Box, Container, Grid, Typography } from "@mui/material";
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

const index = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ backgroundColor: "#F9F9F9", paddingBottom: "20px" }}>
      <ColorTabs tabData={tabs} defaultTab={0} />
      <Container sx={{ pb: 3 }}>
        <EmailActions search={search} setSearch={setSearch} />
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
