"use client";
import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceStatCard from "@/components/common/AdminCards/FinanceCard";
import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchAd from "@/components/common/SearchAd/SearchAd";

const adsData: {
  id: string;
  sellerType: "Private Seller" | "Trade Seller";
  title: string;
  category: string;
  userId: string;
  status:
    | "Active"
    | "Pending"
    | "Rejected"
    | "Expired"
    | "Flagged"
    | "Reported";
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
    status: "Reported",
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
    status: "Reported",
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
    status: "Reported",
    dateCreated: "20/01/2025",
    expiryDate: "20/02/2025",
    imageUrl: "/images/bmw3.jpg",
  },
];

const StoryReported: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <ColorTabs
        tabData={[
          { label: "Story Overview", path: "/admin/story/management" },
          { label: "Active Stories", path: "/admin/story/active" },
          { label: "Flagged Stories", path: "/admin/story/flagged" },
          { label: "Reported Stories", path: "/admin/story/reported" },
          { label: "Expired Stories", path: "/admin/story/expired" },
        ]}
        defaultTab={3}
      />
      <Container>
        <SearchAd search={search} setSearch={setSearch} />

        <Box>
          <Grid
            container
            spacing={2}
            mb={{ xs: "10px", sm: "15px", md: "20px", lg: "40px" }}
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
        <AdsTable ads={adsData} />
      </Container>
    </>
  );
};

export default StoryReported;
