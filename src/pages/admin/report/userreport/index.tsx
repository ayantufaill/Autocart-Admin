import ColorTabs from "@/components/common/ColorTabs/ColorTabs";
import ErrorState from "@/components/common/Error";
import Loading from "@/components/common/Loading/Loading";
import ReportTable from "@/components/common/ReportTable/ReportTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { fetchFilterReportedUsers, fetchReportedAds, fetchReportedUsers, fetchSearchReportedUsers } from "@/redux/thunk/reports.thunk";
import { Search } from "@mui/icons-material";
import { Container, InputAdornment, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const User: React.FC = () => {
  const [search, setSearch] = useState("") // based on user id
  const [selectOption, setSelectOption] = useState("All")
  const dispatch = useAppDispatch();
  const { reportedAds, loading, error, reportedUsers } = useAppSelector((state: RootState) => state.reports);

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setSelectOption(e.target.value);
  };

  useEffect(() => {
    if (search) {
      dispatch(fetchSearchReportedUsers(search));
    } else {
      if (selectOption === "All") {
        dispatch(fetchReportedUsers());
      } else if (selectOption === "true") {
        dispatch(fetchFilterReportedUsers(true));
      } else if (selectOption === "false") {
        dispatch(fetchFilterReportedUsers(false));
      }
    }
  }, [search, selectOption, dispatch]);

  useEffect(() => {
    dispatch(fetchReportedAds());
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
        defaultTab={1}
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
        <div>
          <Select sx={{ height: 30, "& .MuiSelect-select": {} }} value={selectOption} onChange={(e) => { handleSelectChange(e) }}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </div>
        {
          loading ? <Loading /> : error ? <ErrorState error={error} /> : <>
            <ReportTable entityType="Users" Reports={reportedUsers} />
          </>
        }
      </Container>
    </div>
  );
};

export default User;
