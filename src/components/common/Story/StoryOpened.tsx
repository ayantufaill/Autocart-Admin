import {
  Delete,
  DifferenceOutlined,
  WarningOutlined,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const actions = [
  { label: "Mark Safe", color: "#60A5FA", icon: <DifferenceOutlined /> },
  { label: "Warn User", color: "#F97316", icon: <WarningOutlined /> },
  { label: "Delete Story", color: "#F87171", icon: <Delete /> },
];

const StoryOpened: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Container sx={{ py: 5 }}>
        <Stack
          spacing={{ xs: 2, md: 0 }}
          direction={{ md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={4}
        >
          <Typography
            sx={{
              color: "#1F2937",
              fontSize: { xs: "16px", lg: "20px" },
              fontWeight: 600,
              position: "relative",
              paddingLeft: "30px",
              "&::before": {
                content: '""',
                width: 16,
                height: 16,
                backgroundColor: "green",
                borderRadius: "4px",
                position: "absolute",
                transform: "translate(0%, 35%)",
                left: 0,
              },
            }}
          >
            Active
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{ bgcolor: action.color }}
                startIcon={action.icon}
              >
                {action.label}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Paper elevation={2} sx={{ padding: "36px" }}>
          <Typography
            fontWeight={500}
            fontSize={{ xs: "18px", md: "20px" }}
            mb={2}
          >
            Story Details
          </Typography>
          <Divider />
          <Grid container pt={4} spacing={{ xs: 4, lg: 8 }}>
            <Grid item xs={12} md={6} lg={4}>
              <Image
                src={"/Images/AdsActive/image 12.png"}
                width={300}
                height={300}
                alt="Active"
                layout="responsive"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Typography color="#9CA3AF" fontSize={{ xs: "16px", xl: "18px" }}>
                Caption
              </Typography>
              <Typography
                color="#1F2937"
                fontSize={{ xs: "16px", lg: "20px" }}
                maxWidth={"580px"}
                mt={1}
                fontWeight={500}
              >
                Lorem ipsum dolor sit amet consectetur. Varius mauris sed sed et
                nec diam volutpat proin cum. Volutpat massa egestas nunc ut
                convallis at adipiscing gravida dictum. Tristique at enim sem.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default StoryOpened;
