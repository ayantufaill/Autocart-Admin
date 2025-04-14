import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ErrorState from "@/components/common/Error";
import Loading from "@/components/common/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchAds, fetchPendingAds } from "@/redux/slices/adsManagementSlice";
import { fetchSearch } from "@/redux/thunk/fetchSearch";
import { Close, FileCopyOutlined, Search } from "@mui/icons-material";
import { Box, Button, Container, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const PendingAds: React.FC = () => {
  const dispatch = useAppDispatch();

  const [filteredAds, setFilteredAds] = useState<string>("");
  const { ads, pendingAds, loading, error } = useAppSelector((state) => state.ads);

  const approvedAdsCount = ads.filter(ad => ad.status === "Active").length;
  const expiredAdsCount = ads.filter(ad => ad.status === "Expired").length;
  const rejectedAdsCount = ads.filter(ad => ad.status === "Rejected").length;

  useEffect(() => {
    dispatch(fetchAds());
  }, [])

  useEffect(() => {
    if (filteredAds) {
      dispatch(fetchSearch({ url: "ads", search: filteredAds, targetKey: "pendingAds", status: "PENDING" }))
    }
    else {
      dispatch(fetchPendingAds());
    }
  }, [dispatch, filteredAds]);



  return (
    <div style={{ minHeight: "100%" }}>
      <ColorTabs
        tabData={[
          { label: "All Ads", count: ads.length, path: "/admin/ads" },
          { label: "Approved Ads", count: approvedAdsCount, path: "/admin/active/ads" },
          { label: "Expired Ads", count: expiredAdsCount, path: "/admin/expired/ads" },
          { label: "Pending Ads", count: pendingAds.length, path: "/admin/pending/ads" },
          { label: "Rejected Ads", count: rejectedAdsCount, path: "/admin/rejected/ads" },
        ]}
        defaultTab={3}
      />
      <Box sx={{ minHeight: "60vh", bgcolor: "#F9F9F9" }}>
        <Container>
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
          {loading ? (
            <Loading />
          ) : error ? <ErrorState error={error} /> : (
            <AdsTable ads={pendingAds} />
          )}
        </Container>
      </Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3} pt={3} pl={6}>
        <Button
          variant="contained"
          sx={{ bgcolor: "#60A5FA", maxWidth: "260px" }}
          startIcon={<FileCopyOutlined />}
        >
          Approve All Ads
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#F87171", maxWidth: "260px" }}
          startIcon={<Close />}
        >
          Reject All Ads
        </Button>
      </Stack>
    </div>
  );
};

export default PendingAds;
