import {
  AttachFile,
  FormatBold,
  FormatItalic,
  Image,
} from "@mui/icons-material";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const WriteEmailMessage: React.FC = () => {
  return (
    <Box mt={2} position={"relative"}>
      <textarea
        name="message"
        rows={10}
        placeholder="Type your message here..."
        style={{
          width: "100%",
          border: "1px solid #E4E4E4",
          borderRadius: 7,
          padding: 10,
          resize: "none",
          fontSize: "16px",
          fontStyle: "italic",
          color: "#1F2937",
          fontWeight: "lighter",
          paddingBottom: 50,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 6,
          left: 8,
          bgcolor: "white",
          width: "98%",
          borderImageSlice: 3,
          borderImageRepeat: "round",
          borderImageSource: `url("data:image/svg+xml,%3Csvg%20width%3D%2242%22%20height%3D%2242%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200%20H%2016%20V%201%20H%201%20V%2016%20H%200%20V%200%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3Cpath%20d%3D%22M42%200%20V%2016%20H%2041%20V%201%20H%2026%20V%200%20H%2042%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3Cpath%20d%3D%22M42%2042%20H%2026%20V%2041%20H%2041%20V%2026%20H%2042%20V%2042%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3Cpath%20d%3D%22M0%2042%20V%2026%20H%201%20V%2041%20H%2016%20V%2042%20H%200%22%20fill%3D%22rgb(202%2C202%2C202)%22%20%2F%3E%3C%2Fsvg%3E")`,
          borderStyle: "solid none none none",
        }}
      >
        <ToggleButtonGroup size="small" exclusive>
          {[
            { icon: <FormatBold fontSize="small" />, value: "bold" },
            { icon: <FormatItalic fontSize="small" />, value: "bold" },
            { icon: <AttachFile fontSize="small" />, value: "bold" },
            { icon: <Image fontSize="small" />, value: "bold" },
          ].map((tab, index) => (
            <ToggleButton
              key={index}
              value={tab.value}
              sx={{ border: "none", color: "#9CA3AF" }}
              disableTouchRipple
            >
              {tab.icon}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default WriteEmailMessage;
