import { ReactNode } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Sidebar from "@/pages/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const CustomLayout = ({ children }: LayoutProps) => {

const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box  sx={{ display: 'flex', height: "100vh" }}>
        <Sidebar />
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default CustomLayout;
