import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid } from "@mui/material";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { useState } from "react";
import StoryTable, { Story } from "@/components/common/StoryTable/StoryTable";

const financeData = [
  {
    title: "Today",
    amount: "852",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "This Week",
    amount: "54752",
    percentage: "-0.2%",
    comparisonText: "Compared to previous Week",
  },
  {
    title: "This Month",
    amount: "255475",
    percentage: "+9.2%",
    comparisonText: "Compared to previous month",
  },
  {
    title: "This Year",
    amount: "22534285",
    percentage: "-8.4%",
    comparisonText: "Compared to previous year",
  },
];

const sampleStories: Story[] = [
  {
    status: "Active",
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
    status: "Reported",
    userimgUrl: "/Images/Ads/profile3.png",
    userId: "user789",
    storyContent: "Controversial post about politics",
    storyId: "story003",
    uploadDate: "2025-03-10",
    storyImageUrl: "/Images/Ads/politics.jpg",
  },
  {
    status: "Flagged",
    userimgUrl: "/Images/Ads/profile4.png",
    userId: "user101",
    storyContent: "Funny cat video",
    storyId: "story004",
    uploadDate: "2025-03-18",
    storyImageUrl: "/Images/Ads/cat.jpg",
  },
  {
    status: "Active",
    userimgUrl: "/Images/Ads/profile5.png",
    userId: "user202",
    storyContent: "Travel vlog from Europe",
    storyId: "story005",
    uploadDate: "2025-03-22",
    storyImageUrl: "/Images/Ads/europe.jpg",
  },
];

const StoryManagement: React.FC = () => {
  const [search, setSearch] = useState<string>("");
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
        defaultTab={0}
      />
      <Container sx={{ pb: 5 }}>
        <SearchBar
          placeholder="Search User"
          search={search}
          setSearch={setSearch}
        />
        <Grid
          container
          spacing={2}
          mb={{ xs: "10px", sm: "15px", md: "20px", lg: "40px" }}
          mt={4}
        >
          {financeData.map((data, index) => (
            <Grid item xs={12} md={6} lg={6} xl={3} key={index}>
              <FinanceStatCard {...data} />
            </Grid>
          ))}
        </Grid>
        <StoryTable stories={sampleStories} />
      </Container>
    </div>
  );
};

export default StoryManagement;
