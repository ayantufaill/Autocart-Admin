"use client";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import StoryTable from "@/components/common/StoryTable/StoryTable";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";
import { fetchActiveStories } from "@/redux/thunk/story.thunk";

const StoryActive: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeStories, loading, error } = useAppSelector((state: RootState) => state.story)
  const { counts } = useAppSelector((state: RootState) => state.storyAnalytics)
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    dispatch(fetchActiveStories())
  }, [dispatch])

  useEffect(() => {
    const storyCounts = localStorage.getItem("storyCounts");
    if (storyCounts) {
      const newStoryCounts = JSON.parse(storyCounts);
      setTodayCount(newStoryCounts?.today || 0)
    }
  }, [counts])

  const [search, setSearch] = useState("");
  const route = useRouter();

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
        defaultTab={1}
      />
      <Container sx={{ pb: 5 }}>
        <SearchBar
          placeholder="Search User"
          search={search}
          setSearch={setSearch}
        />

        {loading ? <Loading /> : error ? <ErrorState error={error} /> : activeStories && <>
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
          <StoryTable stories={activeStories} />
        </>}
      </Container>
    </div>
  );
};

export default StoryActive;
