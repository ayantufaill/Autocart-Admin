import UserOpened from "@/components/common/Users/UserOpened";
import { Container } from "@mui/material";
import React from "react";

const ActiveUser: React.FC = () => {
  return (
    <div>
      <Container>
        <UserOpened status="Active" userData={[]} />
      </Container>
    </div>
  );
};

export default ActiveUser;
