import UserDetails from "@/components/common/Users/UserDetails";
import { Container } from "@mui/material";
import React from "react";

const BannedUser: React.FC = () => {
  return <div>
    <Container>
      <UserDetails status="Banned" />
    </Container>
  </div>;
};

export default BannedUser;
