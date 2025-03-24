import EmailDisplay from "@/components/common/EmailManagement/EmailDisplay";
import OutboxHeader from "@/components/common/EmailManagement/outbox/OutboxHeader";
import UserReply from "@/components/common/EmailManagement/outbox/UserReply";
import UserDetails from "@/components/common/Users/UserDetails";
import { Box, Container } from "@mui/material";
import React from "react";

type Status = {
  "Not Delivered": string;
  Delivered: string;
  Opened: string;
};

const statusConfig: Status = {
  "Not Delivered": "#EAB308",
  Delivered: "#3B82F6",
  Opened: "#9CA3AF",
};

interface OutboxOpenedProps {
  status: "Not Delivered" | "Delivered" | "Opened";
}

const OutboxOpened: React.FC<OutboxOpenedProps> = ({ status }) => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Container sx={{ py: 3 }}>
        <OutboxHeader
          title={status}
          color={statusConfig[status]}
          forwardPath="/"
          replyPath="/"
        />
        <EmailDisplay
          subject="Report on a glitch that Occurred on the app"
          content={["this email is empty."]}
        />
        <Box my={6}>
          <UserReply content={["no reply yet..."]} />
        </Box>
        <UserDetails status="Banned" />
      </Container>
    </div>
  );
};

export default OutboxOpened;
