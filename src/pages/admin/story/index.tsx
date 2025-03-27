import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Container, Grid, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import StoryTable, { Story } from "@/components/common/StoryTable/StoryTable";
import { Search } from "@mui/icons-material";

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

const tabs = [
  {
    label: "Story Overview",
    path: "/admin/story/management",
    status: "",
  },
  {
    label: "Active Stories",
    path: "/admin/story/active",
    status: "Active",
  },
  {
    label: "Flagged Stories",
    path: "/admin/story/flagged",
    status: "Flagged",
  },
  {
    label: "Reported Stories",
    path: "/admin/story/reported",
    status: "Reported",
  },
  {
    label: "Expired Stories",
    path: "/admin/story/expired",
    status: "Expired",
  },
];

const StoryManagement: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState("");
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={0} setStatus={setStatus} />
      <Container sx={{ pb: 5 }}>
        <TextField
          placeholder={"Search User"}
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
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
        <StoryTable stories={sampleStories} search={search} />
      </Container>
    </div>
  );
};

export default StoryManagement;
