import { Box, Typography, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import { SvgIconComponent } from "@mui/icons-material";

interface IconTitleBoxProps {
  icon: SvgIconComponent;
  title: string;
  sx?: SxProps<Theme>;
}

const IconTitleBox: FC<IconTitleBoxProps> = ({ icon: Icon, title, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        ...sx, 
      }}
    >
      <Icon sx={{ height: "26px", width: "26px", color: "#9CA3AF" }} />
      <Typography sx={{ fontSize: "24px", color: "#1F2937", fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default IconTitleBox;
