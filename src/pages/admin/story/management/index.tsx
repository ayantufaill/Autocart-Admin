import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid } from "@mui/material";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import StoryTable from "@/components/common/StoryTable/StoryTable";
import StoryAnalytics from "@/components/common/Story/StoryAnalytics/StoryAnalytics";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchActiveStories, fetchExpiredStories, fetchReportedStories } from "@/redux/thunk/story.thunk";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { RootState } from "@/redux/store";
import { Story } from "@/redux/slices/storySlice";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";

// const sampleStories: Story[] = [
//   {
//     status: "Active",
//     userimgUrl: "/Images/Ads/profile1.png",
//     userId: "user123",
//     storyContent: "Amazing sunset view!",
//     storyId: "story001",
//     uploadDate: "2025-03-20",
//     storyImageUrl: "/Images/Ads/sunset.jpg",
//   },
//   {
//     status: "Expired",
//     userimgUrl: "/Images/Ads/profile2.png",
//     userId: "user456",
//     storyContent: "New product launch details",
//     storyId: "story002",
//     uploadDate: "2025-02-15",
//     storyImageUrl: "/Images/Ads/product.jpg",
//   },
//   {
//     status: "Reported",
//     userimgUrl: "/Images/Ads/profile3.png",
//     userId: "user789",
//     storyContent: "Controversial post about politics",
//     storyId: "story003",
//     uploadDate: "2025-03-10",
//     storyImageUrl: "/Images/Ads/politics.jpg",
//   },
//   {
//     status: "Flagged",
//     userimgUrl: "/Images/Ads/profile4.png",
//     userId: "user101",
//     storyContent: "Funny cat video",
//     storyId: "story004",
//     uploadDate: "2025-03-18",
//     storyImageUrl: "/Images/Ads/cat.jpg",
//   },
//   {
//     status: "Active",
//     userimgUrl: "/Images/Ads/profile5.png",
//     userId: "user202",
//     storyContent: "Travel vlog from Europe",
//     storyId: "story005",
//     uploadDate: "2025-03-22",
//     storyImageUrl: "/Images/Ads/europe.jpg",
//   },
// ];

const StoryManagement: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([])
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchActiveStories())
    dispatch(fetchExpiredStories())
    dispatch(fetchReportedStories())
  }, [dispatch])

  const { activeStories, expiredStories, loading, error, reportedStories } = useAppSelector((state: RootState) => state.story)
  useEffect(() => {
    if (activeStories.length || expiredStories.length || reportedStories.length) {
      const mergedStories = [...activeStories, ...expiredStories, ...reportedStories];
      const shuffledStories = [...mergedStories].sort(() => Math.random() - 0.5);
      setStories(shuffledStories);
    }
  }, [activeStories, expiredStories, reportedStories]);

  // const [search, setSearch] = useState<string>("");
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
        defaultTab={0}
      />
      <Container sx={{ pb: 5 }}>
        {/* <SearchBar
          placeholder="Search User"
          search={search}
          setSearch={setSearch}
        /> */}

        <TextField
          placeholder={"Search User"}
          variant="outlined"
          // onChange={(e) => setSearch(e.target.value)}
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

        {/* <Grid
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
        </Grid> */}
        {loading ? <Loading /> : <>
          <Box mb={{ xs: "10px", sm: "15px", md: "20px", lg: "40px" }} mt={4}>
            <StoryAnalytics />
          </Box>
          <StoryTable stories={stories} />
        </>}
      </Container>
    </div >
  );
};

export default StoryManagement;
