import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import AdsTable from "@/components/common/AdsTable/AdsTable";
import { fetchAds } from "@/redux/slices/adsManagementSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const ads = useSelector((state: RootState) => state.ads.ads);
  const loading = useSelector((state: RootState) => state.ads.loading);

  const adsArray = Array.isArray(ads) ? ads : [];

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  const formattedAds = adsArray.map((ad) => ({
    id: ad.id,
    sellerType:
      ad.user?.role === "PRIVATE_SELLER"
        ? "Private Seller"
        : ("Trade Seller" as "Private Seller" | "Trade Seller"),
    title: ad.itemName,
    category: ad.adType || "Unknown",
    userId: ad.user?.id || "N/A",
    status:
      ad.status === "ACTIVE"
        ? "Active"
        : ad.status === "REJECTED"
        ? "Rejected"
        : ("Pending" as "Active" | "Pending" | "Rejected"),
    dateCreated: new Date(ad.createDate).toLocaleDateString("en-GB"),
    expiryDate: "20/02/2025",
    imageUrl: ad.uploadImagesForAd?.[0] || "/images/default.jpg",
  }));

  return (
    <div style={{ backgroundColor: "#F9F9F9", paddingBottom: 20 }}>
      <ColorTabs
        tabData={[
          { label: "All Ads", count: adsArray.length, path: "/admin/ads" },
          {
            label: "Pending Ads",
            count: adsArray.filter((a) => a.status === "PENDING").length,
            path: "/admin/pending/ads",
          },

          {
            label: "Approved Ads",
            count: adsArray.filter((a) => a.status === "ACTIVE").length,
            path: "/admin/active/ads",
          },
          {
            label: "Rejected Ads",
            count: adsArray.filter((a) => a.status === "REJECTED").length,
            path: "/admin/rejected/ads",
          },
        ]}
        defaultTab={0}
      />
      <Container>
        {loading ? <div>Loading ads...</div> : <AdsTable ads={formattedAds} />}
      </Container>
    </div>
  );
}
