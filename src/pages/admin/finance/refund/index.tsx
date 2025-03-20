import React from "react";
import { Box } from "@mui/material";

import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import FinanceTable from "@/components/common/FinanceTable/FinanceTable";

const financeData: {
  adID: string;
  userId: string;
  transactionId: string;
  amount: string;
  date: string;
  imageUrl: string;
  userImageUrl: string;
}[] = [
  {
    adID: "AD001",
    userId: "USR001",
    transactionId: "TXN001",
    amount: "$100",
    date: "2023-10-01",
    imageUrl: "/Images/Ads/Profile.png",
    userImageUrl: "/Images/Ads/image.png",
  },
  {
    adID: "AD002",
    userId: "USR002",
    transactionId: "TXN002",
    amount: "$200",
    date: "2023-10-02",
    imageUrl: "/Images/Ads/Profile.png",
    userImageUrl: "/Images/Ads/image.png",
  },
  {
    adID: "AD003",
    userId: "USR003",
    transactionId: "TXN003",
    amount: "$300",
    date: "2023-10-03",
    imageUrl: "/Images/Ads/Profile.png",
    userImageUrl: "/Images/Ads/image.png",
  },
  {
    adID: "AD004",
    userId: "USR004",
    transactionId: "TXN004",
    amount: "$400",
    date: "2023-10-04",
    imageUrl: "/Images/Ads/Profile.png",
    userImageUrl: "/Images/Ads/image.png",
  },
  {
    adID: "AD005",
    userId: "USR005",
    transactionId: "TXN005",
    amount: "$500",
    date: "2023-10-05",
    imageUrl: "/Images/Ads/Profile.png",
    userImageUrl: "/Images/Ads/image.png",
  },
];

const index: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        px: "60px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "20px", md: "20px" },
      }}
    >
      <ColorTabs
        tabData={[
          { label: "Finance Overview", path: "/admin/finance" },
          { label: "All Transactions", path: "/admin/finance/alltransaction" },
          { label: "Refund Management", path: "/admin/finance/refund" },
        ]}
        defaultTab={2}
      />
      <FinanceTable finance={financeData} />
    </Box>
  );
};

export default index;
