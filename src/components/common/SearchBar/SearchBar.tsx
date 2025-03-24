import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

type SearchBarProps = {
  placeholder: string;
  search: string;
  setSearch: (search: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, setSearch }) => {
  return (
    <TextField
      placeholder={placeholder}
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
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#BFC3CB" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
