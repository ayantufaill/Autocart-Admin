import React from "react";
import { TextField, InputAdornment } from "@mui/material";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchAd: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <TextField
      placeholder="Search Ads"
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        marginBottom: 2,
        backgroundColor: "#F9F9F9",
        width: "600px",
        borderRadius: "10px",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img
              src="/Images/Ads/search.png"
              alt="Search"
              width={18}
              height={18}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchAd;
