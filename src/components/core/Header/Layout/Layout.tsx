import { ReactNode } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Header from "../Header";
import Sidebar from "@/components/core/Sidebar";
import { Source_Sans_3 } from "next/font/google";

interface LayoutProps {
  children: ReactNode;
}

const sans = Source_Sans_3({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const CustomLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const authRoutes = [
    "/authentication/sign-in",
    "/authentication/sign-up",
    "/authentication/otp",
  ];
  const isAuthPage = authRoutes.includes(router.pathname);

  return (
    <Box
      className={sans.className}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        "& .css-s2t35c-MuiTabs-scroller": {
          fontFamily: "Source-Sans-3",
        },
      }}
    >
      {!isAuthPage && <Header />}

      <main className={sans.className}>
        <Box sx={{ display: "flex" }}>
          {!isAuthPage && <Sidebar />}
          <Box sx={{ flex: 1 }}>{children}</Box>
        </Box>
      </main>
    </Box>
  );
};

export default CustomLayout;
