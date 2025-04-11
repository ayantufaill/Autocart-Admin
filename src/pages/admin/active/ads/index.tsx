import AdsTable from "@/components/common/AdsTable/AdsTable";
import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchActiveAds } from "@/redux/slices/adsManagementSlice";
import { Container } from "@mui/material";
import React, { useEffect } from "react";

const index: React.FC = () => {
  const dispatch = useAppDispatch();

  const ActiveAds = useAppSelector((state) => state);

  useEffect(() => {
    console.log("Hit api");
    dispatch(fetchActiveAds());
  }, [dispatch]);

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
          { label: "All Ads", count: 428, path: "/admin/ads" },
          { label: "Approved Ads", count: 27, path: "/admin/active/ads" },
          { label: "Expired Ads", count: 42, path: "/admin/expired/ads" },
          { label: "Pending Ads", count: 37, path: "/admin/pending/ads" },
          { label: "Rejected Ads", count: 58, path: "/admin/rejected/ads" },
        ]}
        defaultTab={1}
      />
      <Container>
        <AdsTable ads={[]} />
      </Container>
    </div>
  );
};

export default index;
