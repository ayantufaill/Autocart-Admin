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
    status: "Active",
    name: "John Doe",
    email: "john.doe@example.com",
    adsPosted: 10,
    userId: "USR12345",
    imageUrl: "/Images/Users/john.png",
    regDate: "2023-05-15",
  },
  {
    status: "Suspended",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    adsPosted: 5,
    userId: "USR67890",
    imageUrl: "/Images/Users/jane.png",
    regDate: "2022-11-23",
  },
  {
    status: "Banned",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    adsPosted: 2,
    userId: "USR24680",
    imageUrl: "/Images/Users/michael.png",
    regDate: "2021-08-30",
  },
  {
    status: "Active",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    adsPosted: 8,
    userId: "USR13579",
    imageUrl: "/Images/Users/emily.png",
    regDate: "2022-02-14",
  },
  {
    status: "Active",
    name: "John Doe",
    email: "john.doe@example.com",
    adsPosted: 10,
    userId: "USR12345",
    imageUrl: "/Images/Users/john.png",
    regDate: "2023-05-15",
  },
  {
    status: "Suspended",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    adsPosted: 5,
    userId: "USR67890",
    imageUrl: "/Images/Users/jane.png",
    regDate: "2022-11-23",
  },
  {
    status: "Banned",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    adsPosted: 2,
    userId: "USR24680",
    imageUrl: "/Images/Users/michael.png",
    regDate: "2021-08-30",
  },
  {
    status: "Active",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    adsPosted: 8,
    userId: "USR13579",
    imageUrl: "/Images/Users/emily.png",
    regDate: "2022-02-14",
  },
];

const User: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs />
      <Container sx={{ pb: 10 }}>
        <UserTable Users={users} />
      </Container>
    </div>
  );
};

export default User;
