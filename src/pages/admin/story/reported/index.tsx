"use client";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import StoryTable from "@/components/common/StoryTable/StoryTable";

import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hooks";
import { fetchReportedStories } from "@/redux/thunk/story.thunk";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";
import { Search } from "@mui/icons-material";
import { fetchSearchReportedStories } from "@/redux/thunk/reports.thunk";

const StoryReported: React.FC = () => {
  const [searchId, setSearchId] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const { counts } = useAppSelector((state: RootState) => state.storyAnalytics)
  const [todayCount, setTodayCount] = useState(0);

  const { reportedStories, loading, error } = useAppSelector((state: RootState) => state.story)


  useEffect(() => {
    if (searchId) {
      dispatch(fetchSearchReportedStories(searchId));
    }
    else {
      dispatch(fetchReportedStories());
    }
  }, [dispatch, searchId])

  useEffect(() => {
    const storyCounts = localStorage.getItem("storyCounts");
    if (storyCounts) {
      const newStoryCounts = JSON.parse(storyCounts);
      setTodayCount(newStoryCounts?.today || 0)
    }
  }, [counts])

  const [search, setSearch] = useState("");

  return (
    <div style={{ minHeight: "100%", backgroundColor: "#F9F9F9" }}>
      <ColorTabs
        tabData={[
          { label: "Story Overview", path: "/admin/story/management" },
          { label: "Active Stories", path: "/admin/story/active" },
          // { label: "Flagged Stories", path: "/admin/story/flagged" },
          { label: "Reported Stories", path: "/admin/story/reported" },
          { label: "Expired Stories", path: "/admin/story/expired" },
        ]}
        defaultTab={2}
      />
      <Container sx={{ pb: 5 }}>
        <TextField
          placeholder={"Search Report"}
          variant="outlined"
          onChange={(e) => setSearchId(e.target.value)}
          sx={{
            fontSize: "12px",
            color: "#BFC3CB",
            marginBottom: 2,
            backgroundColor: "#F9F9F9",
            width: { xs: "100%", md: "70%" },
            maxWidth: "600px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              maxHeight: "43px",
            },
            "& ::placeholder": {
              color: "#CBCED4",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#BFC3CB" }} />
              </InputAdornment>
            ),
          }}
        />

        {loading ? <Loading /> : error ? <ErrorState error={error} /> : reportedStories && <>
          <Box>
            <Grid
              container
              spacing={2}
              mb={{ xs: "10px", sm: "15px", md: "20px", lg: "40px" }}
              mt={4}
            >
              <Grid item xs={12} md={6} lg={6} xl={3}>
                <FinanceStatCard
                  {...{
                    title: "Today",
                    amount: todayCount,
                    percentage: "+9.2%",
                    comparisonText: "Compared to yesterday",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <StoryTable stories={reportedStories} />
        </>}
      </Container>
    </div>
  );
};

export default StoryReported;
