import UserOpened from "@/components/common/Users/UserOpened";
import { Container } from "@mui/material";
import React from "react";

const BannedUser: React.FC = () => {
  return (
    <div>
      <Container>
        <UserOpened status="ACTIVE" userData={null} />
      </Container>
    </div>
  );
};

export default BannedUser;
