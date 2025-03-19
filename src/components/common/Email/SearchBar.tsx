import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface SearchBarProps {
  placeholder?: string;
  width?: { xs: string; lg: string };
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search Ads",
  width = { xs: "100%", lg: "500px" },
}) => {
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      sx={{
        width,
        backgroundColor: "#F9F9F9",
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          height: "48px",
          px: "16px",
          py: "12px",
        },
        "& .MuiInputBase-input": {
          height: "100%",
          padding: "12px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon sx={{ color: "#9CA3AF" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
