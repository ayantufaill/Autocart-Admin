import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ErrorState from "@/components/common/Error";
import Loading from "@/components/common/Loading/Loading";
import ReportTable from "@/components/common/ReportTable/ReportTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { fetchReportedAds, fetchReportedUsers, fetchSearchReportedAds } from "@/redux/thunk/reports.thunk";
import { Search } from "@mui/icons-material";
import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

// const reports: {
//   status: "Unread" | "Read";
//   reportId: string;
//   title: string;
//   category: string;
//   imageUrl: string;
//   issueDate: string;
// }[] = [
//     {
//       status: "Unread",
//       reportId: "USER206",
//       title: "Report on AD245",
//       category: "Misleading information",
//       imageUrl: "/Images/Report/image.png",
//       issueDate: "20/02/2025",
//     },
//     {
//       status: "Read",
//       reportId: "USER205",
//       title: "Report on AD245",
//       category: "Fraud",
//       imageUrl: "/Images/Report/boy.png",
//       issueDate: "20/02/2025",
//     },
//     {
//       status: "Read",
//       reportId: "USER204",
//       title: "Report on AD245",
//       category: "Misleading information",
//       imageUrl: "/Images/Report/image.png",
//       issueDate: "20/02/2025",
//     },
//     {
//       status: "Unread",
//       reportId: "USER203",
//       title: "Report on AD245",
//       category: "Fraud",
//       imageUrl: "/Images/Report/Unread/girl.png",
//       issueDate: "20/02/2025",
//     },
//     {
//       status: "Unread",
//       reportId: "USER202",
//       title: "Report on AD245",
//       category: "Misleading information",
//       imageUrl: "/Images/Report/boy.png",
//       issueDate: "20/02/2025",
//     },
//     {
//       status: "Read",
//       reportId: "USER200",
//       title: "Report on AD245",
//       category: "Fraud",
//       imageUrl: "/Images/Report/image.png",
//       issueDate: "20/02/2025",
//     },
//     {
//       status: "Unread",
//       reportId: "USER201",
//       title: "Report on AD245",

//       category: "Misleading information",
//       imageUrl: "/Images/Report/Unread/girl.png",
//       issueDate: "20/02/2025",
//     },
//   ];

const ReportedAds: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reportedAds, loading, error, reportedUsers } = useAppSelector((state: RootState) => state.reports);
  const [search, setSearch] = useState("") // based on user id

  useEffect(() => {
    if (search) {
      console.log(search)
      dispatch(fetchSearchReportedAds(search))
    }
    else {
      console.log("fetchReportedAds")
      dispatch(fetchReportedAds());
    }
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(fetchReportedUsers());
  }, [])

  return (
    <div style={{ minHeight: "100%", backgroundColor: "#F9F9F9" }}>
      <ColorTabs
        tabData={[
          { label: "All Reported Ads", count: reportedAds.length, path: "/admin/report" },
          // { label: "Read", count: 50, path: "/admin/report/read" },
          // {
          //   label: "Unread",
          //   count: 40,
          //   path: "/admin/report/unread",
          // },
          // { label: "Ad Report", count: 35, path: "/admin/report/adreport" },
          { label: "All Reported Users", count: reportedUsers.length, path: "/admin/report/userreport" },
        ]}
        defaultTab={0}
      />
      <Container sx={{ pb: 10 }}>
        <TextField
          placeholder={"Search Reports"}
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
        {loading ? <Loading /> : error ? <ErrorState error={error} /> : <ReportTable entityType="Ads" Reports={reportedAds} />}
      </Container>
    </div>
  );
};

export default ReportedAds;
