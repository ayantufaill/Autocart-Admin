import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import UserTable from "@/components/common/UserTable/UserTable";
import { Search } from "@mui/icons-material";
import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

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

const tabs = [
  { label: "All Users", count: 5247, path: "/admin/user", status: "" },
  {
    label: "Active Users",
    count: 924,
    path: "/admin/active/user",
    status: "Active",
  },
  {
    label: "Suspended Users",
    count: 74,
    path: "/admin/suspended/user",
    status: "Suspended",
  },
  {
    label: "Banned Users",
    count: 80,
    path: "/admin/banned/user",
    status: "Banned",
  },
];

const User: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs tabData={tabs} defaultTab={0} setStatus={setStatus} />
      <Container sx={{ pb: 10 }}>
        <TextField
          placeholder={"Search User"}
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            fontSize: "12px",
            color: "#BFC3CB",
            marginBottom: 2,
            backgroundColor: "#F9F9F9",
            width: { xs: "100%", md: "70%" },
            maxWidth: "600px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              maxHeight: "43px",
            },
            "& ::placeholder": {
              color: "#CBCED4",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#BFC3CB" }} />
              </InputAdornment>
            ),
          }}
        />
        <UserTable Users={users} search={search} />
      </Container>
    </div>
  );
};

export default User;
