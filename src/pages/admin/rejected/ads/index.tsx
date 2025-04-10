import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { Box, Button, Container, Stack } from "@mui/material";
import { Close, FileCopyOutlined } from "@mui/icons-material";
import { fetchRejectedAds } from "@/redux/slices/adsManagementSlice";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";

const adsData: {
  id: string;
  sellerType: "Private Seller" | "Trade Seller";
  title: string;
  category: string;
  userId: string;
  status: "Active" | "Pending" | "Rejected";
  dateCreated: string;
  expiryDate: string;
  imageUrl: string;
}[] = [
  {
    id: "AC2500",
    sellerType: "Private Seller",
    title: "BMW Sport",
    category: "Car Parts",
    userId: "USER200",
    status: "Rejected",
    dateCreated: "20/01/2025",
    expiryDate: "20/02/2025",
    imageUrl: "/images/bmw.jpg",
  },
  {
    id: "AC2501",
    sellerType: "Trade Seller",
    title: "BMW Sport",
    category: "Dealership",
    userId: "USER200",
    status: "Rejected",
    dateCreated: "20/01/2025",
    expiryDate: "20/02/2025",
    imageUrl: "/images/bmw2.jpg",
  },
  {
    id: "AC2502",
    sellerType: "Private Seller",
    title: "BMW Sport",
    category: "Vintage Car",
    userId: "USER200",
    status: "Rejected",
    dateCreated: "20/01/2025",
    expiryDate: "20/02/2025",
    imageUrl: "/images/bmw3.jpg",
  },
];

const RejectedAds: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRejectedAds());
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
        defaultTab={4}
      />

      <Box sx={{ backgroundColor: "#F9F9F9", pb: "20px" }}>
        <Container>
          <AdsTable ads={adsData} />
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

export default RejectedAds;
