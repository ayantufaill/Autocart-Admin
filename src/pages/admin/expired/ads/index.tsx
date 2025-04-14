import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { Container, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { fetchAds, fetchExpiredAds, fetchSearchAds } from "@/redux/slices/adsManagementSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ErrorState from "@/components/common/Error";
import Loading from "@/components/common/Loading/Loading";

const ExpiredAds: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filteredAds, setFilteredAds] = useState<string>("");

  const { ads, expiredAds, loading, error } = useAppSelector(
    (state) => state.ads
  );

  useEffect(() => {
    dispatch(fetchAds());
  }, []);

  useEffect(() => {
    if (filteredAds) {
      dispatch(fetchSearchAds({ url: "ads", search: filteredAds, status: "EXPIRED", targetKey: "expiredAds" }))
    }
    else {
      dispatch(fetchExpiredAds());
    }
  }, [dispatch, filteredAds]);

  const activeAdsCount = ads.filter((ad) => ad.status === "Active").length;
  const pendingAdsCount = ads.filter((ad) => ad.status === "Pending").length;
  const rejectedAdsCount = ads.filter((ad) => ad.status === "Rejected").length;

  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        paddingBottom: "40px",
        minHeight: "100%",
      }}
    >
      <ColorTabs
        tabData={[
          { label: "All Ads", count: ads.length, path: "/admin/ads" },
          { label: "Approved Ads", count: activeAdsCount, path: "/admin/active/ads" },
          { label: "Expired Ads", count: expiredAds.length, path: "/admin/expired/ads" },
          { label: "Pending Ads", count: pendingAdsCount, path: "/admin/pending/ads" },
          { label: "Rejected Ads", count: rejectedAdsCount, path: "/admin/rejected/ads" },
        ]}
        defaultTab={2}
      />

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
        ) : error ? (
          <ErrorState error={error} />
        ) : (
          <AdsTable ads={expiredAds.filter(ad => ad.userName.includes(filteredAds))} />
        )}
      </Container>
    </div>
  );
};

export default ExpiredAds;
