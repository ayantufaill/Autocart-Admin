import React, { useEffect, useState } from "react";
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
} from "@/components/common/MessageTable/MessageTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchReportedMessages } from "@/redux/slices/messageManagementSlice";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";
import ReportedMessages from "@/components/common/Messagemanagement/ReportedMessages/ReportedMessages";

const Index = () => {

  const dispatch = useAppDispatch()
  const { reportedMessages, loading, error } = useAppSelector(state => state.messages)

  useEffect(() => {
    console.log("Messages called");
    dispatch(fetchReportedMessages());
  }, [dispatch])

  return (
    <Box bgcolor={"#F9F9F9"} pb={5} minHeight={"100%"}>
      <ColorTabs
        tabData={[
          {
            label: "Reported Messages",
            path: "/admin/messagemanagement/reported",
          },
        ]}
        defaultTab={0}
      />
      <Container>
        <TextField
          placeholder="Search User"
          variant="outlined"
          // onChange={(e) => setSearch(e.target.value)}
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
        {loading ? <Loading /> : error ? <ErrorState error={error} /> : reportedMessages &&
          <>
            <Box sx={{ mt: "30px", mb: "50px" }}>
              <Typography
                sx={{
                  color: "#1F2937",
                  fontSize: { xs: "18px", md: "20px", xl: "22px" },
                  fontWeight: 600,
                  mb: "28px"
                }}
              >
                Reported Messages
              </Typography>
              <ReportedMessages showTitle={false} />
            </Box>
            <MessagesTable
              Messages={reportedMessages}
            />
          </>
        }
      </Container>
    </Box>
  );
};

export default Index;
