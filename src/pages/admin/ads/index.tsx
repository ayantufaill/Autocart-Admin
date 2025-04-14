import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, InputAdornment, TextField } from "@mui/material";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import AdsTable from "@/components/common/AdsTable/AdsTable";
import { fetchAds } from "@/redux/slices/adsManagementSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Search } from "@mui/icons-material";
import { fetchSearch } from "@/redux/thunk/fetchSearch";
import Loading from "@/components/common/Loading/Loading";
import ErrorState from "@/components/common/Error";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { error, ads, loading } = useSelector((state: RootState) => state.ads);
  const [filteredAds, setFilteredAds] = useState<string>("");

  const adsArray = Array.isArray(ads) ? ads : [];

  useEffect(() => {
    if (filteredAds) {
      dispatch(
        fetchSearch({ url: "ads", search: filteredAds, targetKey: "ads" })
      );
    } else {
      dispatch(fetchAds());
    }
  }, [dispatch, filteredAds]);

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
    <div
      style={{
        backgroundColor: "#F9F9F9",
        paddingBottom: 20,
        minHeight: "100%",
      }}
    >
      <ColorTabs
        tabData={[
          { label: "All Ads", count: adsArray.length, path: "/admin/ads" },
          {
            label: "Approved Ads",
            count: adsArray.filter((a) => a.status === "ACTIVE").length,
            path: "/admin/active/ads",
          },
          {
            label: "Expired Ads",
            count: adsArray.filter((a) => a.status === "Expired").length,
            // count: 0, // change here
            path: "/admin/expired/ads",
          },
          {
            label: "Pending Ads",
            count: adsArray.filter((a) => a.status === "PENDING").length,
            path: "/admin/pending/ads",
          },
          {
            label: "Rejected Ads",
            count: adsArray.filter((a) => a.status === "REJECTED").length,
            path: "/admin/rejected/ads",
          },
        ]}
        defaultTab={0}
      />
      <Container sx={{ pb: 10 }}>
        <TextField
          placeholder={"Search User"}
          variant="outlined"
          onChange={(e) => setFilteredAds(e.target.value)}
          value={filteredAds}
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
        {loading ? <Loading /> : error ? <ErrorState error={error} /> : <AdsTable ads={formattedAds} />}
      </Container>
    </div>
  );
}
