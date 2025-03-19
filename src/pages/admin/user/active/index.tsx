import UserDetails from "@/components/common/Users/UserDetails";
import { Container } from "@mui/material";
import React from "react";

const ActiveUser: React.FC = () => {
  return (
    <div>
      <Container>
        <UserDetails status="Active" />
      </Container>
    </div>
  );
};

export default ActiveUser;
