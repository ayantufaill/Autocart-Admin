import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          mb={4}
        >
          <img
            src="/Images/logo.svg"
            alt="Cricket Mania Logo"
            style={{ height: 32 }}
          />
        </Box>

        <Box textAlign="left" mb={2}>
          <Typography fontWeight="medium" fontSize={14} mb={1}>
            Forgot Password
          </Typography>
          <Typography fontWeight="medium" color="#999999" fontSize={14} mb={1}>
            Enter your email address to reset your password
          </Typography>
        </Box>

        <Box textAlign="left" mb={1}>
          <Typography fontWeight="medium" fontSize={14} mb={1}>
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email address"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              style: { color: "white" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? (
                      <Visibility sx={{ color: "#8A8A8A" }} />
                    ) : (
                      <VisibilityOff sx={{ color: "#8A8A8A" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#1E1E1E",
              borderRadius: "4px",
              "& input::placeholder": { color: "#8A8A8A" },
              "& fieldset": { borderColor: "#3D3D3D" },
            }}
          />
        </Box>

        <Box textAlign="center" mb={3}>
          <Typography fontSize="14px" color="white" component="span">
            Didn’t receive yet.{" "}
            <Button
              onClick={() => {
                // Add your resend logic here
                console.log("Resend clicked");
              }}
              sx={{
                color: "#3C8C3A", // Green color
                fontSize: "14px",
                textTransform: "none",
                textDecoration: "underline",
                padding: 0,
                minWidth: "auto",
                background: "none", // Remove button background
                "&:hover": {
                  background: "none",
                  textDecoration: "underline",
                },
              }}
            >
              Resend
            </Button>
          </Typography>
        </Box>

        <Button
          onClick={() => router.push("/authentication/otp")}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3C8C3A",
            color: "white",
            borderRadius: "30px",
            fontWeight: "bold",
            py: 1.5,
            "&:hover": { backgroundColor: "#2E6B2D" },
          }}
        >
          Continue
        </Button>

        <Typography mt={3} fontSize="14px">
          Don’t have an account?{" "}
          <Link
            onClick={() => router.push("/authentication/sign-up")}
            underline="always"
            sx={{
              color: "#3C8C3A",
              fontWeight: "bold",
              cursor: "pointer",
              textDecorationColor: "#3C8C3A",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
