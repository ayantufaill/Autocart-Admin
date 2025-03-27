import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { Search } from "@mui/icons-material";
import { Container, InputAdornment, TextField } from "@mui/material";

import React, { useState } from "react";

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

const tabs = [
  { label: "All Ads", count: 428, path: "/admin/ads", status: "" },
  {
    label: "Pending Ads",
    count: 37,
    path: "/admin/pending/ads",
    status: "Pending",
  },
  { label: "Renew Ads", count: 42, path: "/", status: "" },
  { label: "Deleted Ads", count: 84, path: "/", status: "" },
  {
    label: "Approved Ads",
    count: 27,
    path: "/admin/active/ads",
    status: "Approved",
  },
  {
    label: "Rejected Ads",
    count: 58,
    path: "/admin/rejected/ads",
    status: "Rejected",
  },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div style={{ backgroundColor: "#F9F9F9", paddingBottom: 20 }}>
      <ColorTabs tabData={tabs} defaultTab={0} setStatus={setStatus} />
      <Container>
        <TextField
          placeholder={"Search Ads"}
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

        <AdsTable ads={adsData} search={search} />
      </Container>
    </div>
  );
}
