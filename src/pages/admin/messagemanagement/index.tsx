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
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import MessagesTable, {
  Message,
} from "@/components/common/MessageTable/MessageTable";
import SearchBar from "@/components/common/SearchBar/SearchBar";

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
    status: "Flagged",
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
    status: "Flagged",
    SenderId: "USER200",
    ReceiverId: "USER200",
    MessageContent: "Lorem ipsum dolor sit amet consectetur.",
    Reason: "Inappropriate Language",
    Date: "20/01/2025",
  },
  {
    status: "Flagged",
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

const FlaggedMessagesGrid = () => {
  const [search, setSearch] = useState<string>("");

  const [activeTab, setActiveTab] = useState<string>("Message Overview");
  //tabs need to be changed

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
        defaultTab={0}
      />
      <Container>
        <SearchBar
          placeholder="Search User"
          search={search}
          setSearch={setSearch}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Box sx={{ py: "18px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "28px" }}>
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
                {data.map((item) => (
                  <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                    <FlaggedMessage {...item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box sx={{ bgcolor: "#f9f9f9", py: "18px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <Typography
              sx={{
                color: "#1F2937",
                fontSize: { xs: "18px", md: "20px", xl: "22px" },
                fontWeight: 600,
              }}
            >
              Reported Messages
            </Typography>
            <Grid container spacing={2}>
              {reported.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                  <FlaggedMessage {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
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

export default FlaggedMessagesGrid;
