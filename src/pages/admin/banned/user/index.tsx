import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import { Container } from "@mui/material";
import React from "react";

const users: {
  status: "Active" | "Suspended" | "Banned";
  name: string;
  email: string;
  adsPosted: number;
  userId: string;
  imageUrl: string;
  regDate: string;
}[] = [
  {
    status: "Banned",
    name: "John Doe",
    email: "john.doe@example.com",
    adsPosted: 10,
    userId: "USR12345",
    imageUrl: "/Images/Users/john.png",
    regDate: "2023-05-15",
  },
  {
    status: "Banned",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    adsPosted: 5,
    userId: "USR67890",
    imageUrl: "/Images/Users/jane.png",
    regDate: "2022-09-10",
  },
  {
    status: "Banned",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    adsPosted: 3,
    userId: "USR54321",
    imageUrl: "/Images/Users/michael.png",
    regDate: "2021-12-25",
  },
  {
    status: "Banned",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    adsPosted: 8,
    userId: "USR09876",
    imageUrl: "/Images/Users/sarah.png",
    regDate: "2023-03-20",
  },
  {
    status: "Banned",
    name: "David Brown",
    email: "david.brown@example.com",
    adsPosted: 6,
    userId: "USR11223",
    imageUrl: "/Images/Users/david.png",
    regDate: "2022-06-30",
  },
];

const BannedUsers: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs />
      <Container sx={{ pb: 10 }}>
        <UserTable Users={users} />
      </Container>
    </div>
  );
};

export default BannedUsers;
