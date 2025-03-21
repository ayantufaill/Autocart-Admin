import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  InputAdornment,
  Container,
} from "@mui/material";
import FlaggedMessage from "@/components/common/Messagemanagement/Flaggedmessage";
import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { Search } from "@mui/icons-material";
import MessagesTable, {
  Message,
} from "@/components/common/MessageTable/MessageTable";

const reported = [
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

const messages: Message[] = [
  {
    status: "Reported",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Suspicious Activities",
    Date: "20/01/2025",
  },
  {
    status: "Reported",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Inappropriate Language",
    Date: "20/01/2025",
  },
  {
    status: "Reported",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Suspicious Activities",
    Date: "20/01/2025",
  },
  {
    status: "Reported",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Inappropriate Language",
    Date: "20/01/2025",
  },
  {
    status: "Reported",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Suspicious Activities",
    Date: "20/01/2025",
  },
  {
    status: "Reported",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Inappropriate Language",
    Date: "20/01/2025",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("Flagged Messages");
  const [search, setSearch] = useState<string>("");

  return (
    <Box bgcolor={"#F9F9F9"} pb={5}>
      <ColorTabs
        tabData={[
          { label: "Message Overview", path: "/admin/messagemanagement" },
          {
            label: "Flagged Messages",
            path: "/admin/messagemanagement/flagged",
          },
          {
            label: "Reported Messages",
            path: "/admin/messagemanagement/reported",
          },
        ]}
        defaultTab={2}
      />
      <Container>
        <TextField
          placeholder="Search User"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            marginBottom: 2,
            backgroundColor: "#F9F9F9",
            width: { xs: "90%", md: "70%" },
            maxWidth: "600px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              maxHeight: "48px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "28px", mb: 3 }}
        >
          <Typography
            sx={{
              color: "#1F2937",
              fontSize: { xs: "18px", md: "20px", xl: "22px" },
              fontWeight: 600,
            }}
          >
            Flagged Messages
          </Typography>
          <Grid container spacing={2}>
            {reported.map((item) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                <FlaggedMessage {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <MessagesTable
          Messages={messages}
          search={search}
          setSearch={setSearch}
        />
      </Container>
    </Box>
  );
};

export default Index;
