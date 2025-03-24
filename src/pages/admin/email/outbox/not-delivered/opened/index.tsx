import OutboxOpened from "@/components/common/EmailManagement/outbox/OutboxOpened";
import React from "react";

const index = () => {
  return (
    <div>
      <OutboxOpened status="Not Delivered" />
    </div>
  );
};

export default index;
