import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ReportTable from "@/components/common/ReportTable/ReportTable";
import { Container } from "@mui/material";
import React from "react";
import ReportedAds from "./adreport";

// const report: {
//   status: "Unread" | "Read";
//   reportId: string;
//   title: string;
//   category: string;
//   imageUrl: string;
//   issueDate: string;
// }[] = [
//   {
//     status: "Unread",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Misleading information",
//     imageUrl: "/Images/Report/image.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Read",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Fraud",
//     imageUrl: "/Images/Report/boy.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Read",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Misleading information",
//     imageUrl: "/Images/Report/image.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Unread",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Fraud",
//     imageUrl: "/Images/Report/boy.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Read",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Misleading information",
//     imageUrl: "/Images/Report/image.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Unread",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Fraud",
//     imageUrl: "/Images/Report/boy.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Read",
//     reportId: "USER200",
//     title: "Report on AD245",

//     category: "Misleading information",
//     imageUrl: "/Images/Report/image.png",
//     issueDate: "20/02/2025",
//   },
//   {
//     status: "Unread",
//     reportId: "USER200",
//     title: "Report on AD245",
//     category: "Misleading information",
//     imageUrl: "/Images/Report/boy.png",
//     issueDate: "20/02/2025",
//   },
// ];

const User: React.FC = () => {
  return (
    // <div style={{ backgroundColor: "#F9F9F9" }}>
    //   <ColorTabs
    //     tabData={[
    //       { label: "All Reported Ads", count: 90, path: "/admin/report" },
    //       { label: "Read", count: 50, path: "/admin/report/read" },
    //       {
    //         label: "Unread",
    //         count: 40,
    //         path: "/admin/report/unread",
    //       },
    //       { label: "Ad Report", count: 35, path: "/admin/report/adreport" },
    //       { label: "All Reported Users", count: 45, path: "/admin/report/userreport" },
    //     ]}
    //     defaultTab={0}
    //   />
    //   <Container sx={{ pb: 10 }}>
    //     <ReportTable Reports={report} />
    //   </Container>
    // </div>
    <ReportedAds />
  );
};

export default User;
