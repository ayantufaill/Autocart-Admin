import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { useAppDispatch } from "@/redux/hooks";
import { fetchPendingAds } from "@/redux/slices/adsManagementSlice";
import { Close, FileCopyOutlined } from "@mui/icons-material";
import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect } from "react";
const PendingAds: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPendingAds());
  }, [dispatch]);

  return (
    <div>
      <ColorTabs
        tabData={[
          { label: "All Ads", count: 428, path: "/admin/ads" },
          { label: "Approved Ads", count: 27, path: "/admin/active/ads" },
          { label: "Expired Ads", count: 42, path: "/admin/expired/ads" },
          { label: "Pending Ads", count: 37, path: "/admin/pending/ads" },
          { label: "Rejected Ads", count: 58, path: "/admin/rejected/ads" },
        ]}
        defaultTab={3}
      />
      <Box sx={{ bgcolor: "#F9F9F9", pb: "40px" }}>
        <Container>
          <AdsTable ads={[]} />
        </Container>
      </Box>
      <Stack direction={"row"} spacing={3} pt={3} pl={3}>
        <Button
          variant="contained"
          sx={{ bgcolor: "#60A5FA" }}
          startIcon={<FileCopyOutlined />}
        >
          Approve All Ads
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#F87171" }}
          startIcon={<Close />}
        >
          Reject All Ads
        </Button>
      </Stack>
    </div>
  );
};

export default PendingAds;
