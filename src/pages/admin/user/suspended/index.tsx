import UserDetails from "@/components/common/Users/UserDetails";
import { Container } from "@mui/material";
import React from "react";

const SuspendedUser: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Container>
        <UserDetails status="Suspended" />
      </Container>
    </div>
  );
};

export default SuspendedUser;
