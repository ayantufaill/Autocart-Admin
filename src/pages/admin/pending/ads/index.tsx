import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { Close, FileCopyOutlined } from "@mui/icons-material";
import { Button, Container, Stack } from "@mui/material";

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
    status: "Pending",
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
    status: "Pending",
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
    status: "Pending",
    dateCreated: "20/01/2025",
    expiryDate: "20/02/2025",
    imageUrl: "/images/bmw3.jpg",
  },
];

const StoryManagement: React.FC = () => {
  return (
    <div>
      <ColorTabs
        tabData={[
          { label: "All Ads", path: "/", count: 428 },
          { label: "Pending Ads", path: "/admin/pending/ads", count: 37 },
          { label: "Renew Ads", path: "/", count: 42 },
          { label: "Deleted Ads", path: "/", count: 84 },
          { label: "Approved Ads", path: "/admin/active/ads", count: 27 },
          { label: "Rejected Ads", path: "/admin/rejected/ads", count: 27 },
        ]}
        defaultTab={1}
      />
      <Container sx={{ bgcolor: "#F9F9F9", pb: "40px" }}>
        <AdsTable ads={adsData} />
      </Container>
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

export default StoryManagement;
