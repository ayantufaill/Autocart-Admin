import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";

import React from "react";

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

export default function Index() {
  return (
    <div>
      <ColorTabs />
      <AdsTable ads={adsData} />
    </div>
  );
}
