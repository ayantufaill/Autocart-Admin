import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ReportTable from "@/components/common/ReportTable/ReportTable";
import { Container } from "@mui/material";
import React from "react";

const reports: {
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
    imageUrl: "/Images/Report/UnRead/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Fraud",
    imageUrl: "/Images/Report/UnRead/girl.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/UnRead/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Fraud",
    imageUrl: "/Images/Report/UnRead/girl.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/UnRead/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Fraud",
    imageUrl: "/Images/Report/UnRead/girl.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/UnRead/image.png",
    issueDate: "20/02/2025",
  },
  {
    status: "Unread",
    reportId: "USER200",
    title: "Report on AD245",
    category: "Misleading information",
    imageUrl: "/Images/Report/UnRead/girl.png",
    issueDate: "20/02/2025",
  },
];

const Unread: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ColorTabs
        tabData={[
          { label: "All Reports", count: 90, path: "/admin/report" },
          { label: "Read", count: 50, path: "/admin/report/read" },
          {
            label: "Unread",
            count: 40,
            path: "/admin/report/unread",
          },
          { label: "Ad Report", count: 35, path: "/admin/report/adreport" },
          { label: "User Report", count: 45, path: "/admin/report/userreport" },
        ]}
        defaultTab={2}
      />
      <Container sx={{ pb: 10 }}>
        <ReportTable Reports={reports} />
      </Container>
    </div>
  );
};

export default Unread;
