import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ErrorState from "@/components/common/Error";
import Loading from "@/components/common/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchActiveAds, fetchAds, fetchSearchAds } from "@/redux/slices/adsManagementSlice";
import { RootState } from "@/redux/store";
import { Search } from "@mui/icons-material";
import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const index: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filteredAds, setFilteredAds] = useState<string>("");

  const { ads, error, activeAds, loading } = useSelector((state: RootState) => state.ads);

  useEffect(() => {
    dispatch(fetchAds());
  }, [])

  useEffect(() => {
    if (filteredAds) {
      dispatch(fetchSearchAds({ url: "ads", search: filteredAds, targetKey: "activeAds", status: "ACTIVE" }))
    }
    else {
      dispatch(fetchActiveAds());
    }
  }, [dispatch, filteredAds]);

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
          { label: "All Ads", count: ads.length, path: "/admin/ads" },
          { label: "Approved Ads", count: activeAds.length, path: "/admin/active/ads" },
          { label: "Expired Ads", count: ads.filter(ad => ad.status == "Expired").length, path: "/admin/expired/ads" },
          { label: "Pending Ads", count: ads.filter(ad => ad.status == "Pending").length, path: "/admin/pending/ads" },
          { label: "Rejected Ads", count: ads.filter(ad => ad.status == "Rejected").length, path: "/admin/rejected/ads" },
        ]}
        defaultTab={1}
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
        ) : error ? <ErrorState error={error} /> : (
          <AdsTable ads={activeAds} />
        )}
      </Container>
    </div>
  );
};

export default index;
