import UserOpened from "@/components/common/Users/UserOpened";
import { Container } from "@mui/material";
import React from "react";

const SuspendedUser: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Container>
        <UserOpened status="ACTIVE" userData={null} />
      </Container>
    </div>
  );
};

export default SuspendedUser;
