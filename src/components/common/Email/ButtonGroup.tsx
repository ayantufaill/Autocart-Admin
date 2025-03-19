import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface ButtonItem {
  label: string;
  icon: React.ReactNode;
}

interface ButtonGroupProps {
  buttons: ButtonItem[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: { xs: "center", sm: "flex-start" },
        alignItems: "center",
      }}
    >
      {buttons.map((btn, index) => (
        <Button
          key={index}
          variant="outlined"
          startIcon={btn.icon}
          sx={{
            px: "12px",
            py: "10px",
            borderRadius: "12px",
            borderColor: "#CACACA",
            textTransform: "none",
            gap: "5px",
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", sm: "175px" },
          }}
        >
          <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#9CA3AF" }}>
            {btn.label}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default ButtonGroup;
