"use client";
import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchAd from "@/components/common/SearchAd/SearchAd";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import StoryTable, { Story } from "@/components/common/StoryTable/StoryTable";

const sampleStories: Story[] = [
  {
    status: "Expired",
    userimgUrl: "/Images/Ads/profile1.png",
    userId: "user123",
    storyContent: "Amazing sunset view!",
    storyId: "story001",
    uploadDate: "2025-03-20",
    storyImageUrl: "/Images/Ads/sunset.jpg",
  },
  {
    status: "Expired",
    userimgUrl: "/Images/Ads/profile2.png",
    userId: "user456",
    storyContent: "New product launch details",
    storyId: "story002",
    uploadDate: "2025-02-15",
    storyImageUrl: "/Images/Ads/product.jpg",
  },
  {
    status: "Expired",
    userimgUrl: "/Images/Ads/profile3.png",
    userId: "user789",
    storyContent: "Controversial post about politics",
    storyId: "story003",
    uploadDate: "2025-03-10",
    storyImageUrl: "/Images/Ads/politics.jpg",
  },
  {
    status: "Expired",
    userimgUrl: "/Images/Ads/profile4.png",
    userId: "user101",
    storyContent: "Funny cat video",
    storyId: "story004",
    uploadDate: "2025-03-18",
    storyImageUrl: "/Images/Ads/cat.jpg",
  },
  {
    status: "Expired",
    userimgUrl: "/Images/Ads/profile5.png",
    userId: "user202",
    storyContent: "Travel vlog from Europe",
    storyId: "story005",
    uploadDate: "2025-03-22",
    storyImageUrl: "/Images/Ads/europe.jpg",
  },
];
const StoryExpired: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs
        tabData={[
          { label: "Story Overview", path: "/admin/story/management" },
          { label: "Active Stories", path: "/admin/story/active" },
          { label: "Flagged Stories", path: "/admin/story/flagged" },
          { label: "Reported Stories", path: "/admin/story/reported" },
          { label: "Expired Stories", path: "/admin/story/expired" },
        ]}
        defaultTab={4}
      />
      <Container sx={{ pb: 5 }}>
        <SearchBar
          placeholder="Search User"
          search={search}
          setSearch={setSearch}
        />

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
                  amount: "852",
                  percentage: "+9.2%",
                  comparisonText: "Compared to yesterday",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <StoryTable stories={sampleStories} />
      </Container>
    </div>
  );
};

export default StoryExpired;
