import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ReportTable from "@/components/common/ReportTable/ReportTable";
import { Search } from "@mui/icons-material";
import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const report: {
  status: "Unread" | "Read";
  reportId: string;
  title: string;
  category: string;
  imageUrl: string;
  issueDate: string;
}[] = [
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Read",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Fraud",
    imageUrl: "/Images/Report/boy.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Read",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Fraud",
    imageUrl: "/Images/Report/boy.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Read",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Fraud",
    imageUrl: "/Images/Report/boy.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Read",
    reportId: "USER200",
    title: "Report on AD245",

    category: "Misleading information",
    imageUrl: "/Images/Report/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/boy.png",
    issueDate: "20/02/2025",
  },
];

const User: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs
        tabData={[
          {
            label: "All Reports",
            count: 90,
            path: "/admin/report",
            status: "",
          },
          {
            label: "Read",
            count: 50,
            path: "/admin/report/read",
            status: "Read",
          },
          {
            label: "Unread",
            count: 40,
            path: "/admin/report/unread",
            status: "Unread",
          },
          {
            label: "Ad Report",
            count: 35,
            path: "/admin/report/adreport",
            status: "",
          }, // missing
          {
            label: "User Report",
            count: 45,
            path: "/admin/report/userreport",
            status: "",
          }, // missing
        ]}
        defaultTab={0}
        setStatus={setStatus}
      />
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
        <ReportTable Reports={report} search={search} />
      </Container>
    </div>
  );
};

export default User;
