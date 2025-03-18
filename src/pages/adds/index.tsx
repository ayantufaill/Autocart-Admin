import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import React from "react";

export default function index() {
  return (
    <div>
      <ColorTabs
        tabData={[
          { label: "All Ads", count: 428, path: "/" },
          { label: "Pending Ads", count: 37, path: "/" },
          { label: "Renew Ads", count: 42, path: "/" },
          { label: "Deleted Ads", count: 84, path: "/" },
          { label: "Approved Ads", count: 27, path: "/" },
          { label: "Rejected Ads", count: 58, path: "/" },
        ]}
        defaultTab={0}
      />
    </div>
  );
}
