import { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const CustomLayout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
};

export default CustomLayout;
