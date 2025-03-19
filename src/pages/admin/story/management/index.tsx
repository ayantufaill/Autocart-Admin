import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid } from "@mui/material";

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
    status: "Active",
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
    status: "Pending",
    dateCreated: "20/01/2025",
    expiryDate: "20/02/2025",
    imageUrl: "/images/bmw3.jpg",
  },
];

const StoryManagement: React.FC = () => {
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
      <Container>
        <Grid
          container
          spacing={2}
          mb={{ xs: "10px", sm: "15px", md: "20px", lg: "40px" }}
        >
          {financeData.map((data, index) => (
            <Grid item xs={12} md={6} lg={6} xl={3} key={index}>
              <FinanceStatCard {...data} />
            </Grid>
          ))}
        </Grid>
        <AdsTable ads={adsData} />
      </Container>
    </div>
  );
};

export default StoryManagement;
