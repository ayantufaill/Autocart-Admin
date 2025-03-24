import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import router from "next/router";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const handleTogglePassword = () => setShowPassword(!showPassword);

  // Validate password rules
  const handlePasswordBlur = () => {
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must include minimum 8 characters, upper case letter, lowercase letter and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  // Check if passwords match
  const handleConfirmPasswordBlur = () => {
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

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
        {/* Logo */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <img
            src="/Images/logo.svg"
            alt="Cricket Mania Logo"
            style={{ height: 32 }}
          />
        </Box>

        {/* Password */}
        <Box textAlign="left" mb={1}>
          <Typography fontSize={16} color="#999999" mt={2} mb={2}>
            Create a new password to get into your account!
          </Typography>
          <Typography fontWeight="medium" fontSize={16} mb={1}>
            Password
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
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
          {passwordError && (
            <Typography
              mt={1}
              fontSize="12px"
              color="#FF4D4F"
              fontWeight="medium"
            >
              {passwordError}
            </Typography>
          )}
        </Box>

        {/* Confirm Password */}
        <Box textAlign="left" mb={1}>
          <Typography fontWeight="medium" fontSize={16} mb={1}>
            Confirm Password
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your confirm password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleConfirmPasswordBlur}
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
          {confirmPasswordError && (
            <Typography
              mt={1}
              fontSize="12px"
              color="#FF4D4F"
              fontWeight="medium"
            >
              {confirmPasswordError}
            </Typography>
          )}
        </Box>

        {/* Button */}
        <Button
          onClick={() => router.push("/authentication/sign-in")}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3C8C3A",
            color: "white",
            borderRadius: "30px",
            fontWeight: "bold",
            mt: 2,
            py: 1.5,
            "&:hover": { backgroundColor: "#2E6B2D" },
          }}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}
