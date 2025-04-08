import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access_token = localStorage.getItem("token");

    const publicRoutes = [
      "/authentication/forgot-password",
      "/authentication/otp",
      "/authentication/reset-password",
      "/authentication/sign-in",
      "/authentication/sign-up",
    ];
    if (publicRoutes.includes(router.pathname)) {
      setLoading(false);
      return;
    }

    if (!access_token) {
      router.push("/authentication/sign-in");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
