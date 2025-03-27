import { Box, Grid, Typography, Divider } from "@mui/material";

interface DetailItem {
  label: string;
  value: string;
}

interface AdDetailsProps {
  details: DetailItem[][];
  description: string;
}

const AdDetails: React.FC<AdDetailsProps> = ({ details, description }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "22px", md: "24px" },
          fontWeight: 600,
          color: "#1F2937",
        }}
      >
        Ads Details
      </Typography>
      <Divider sx={{ bgcolor: "#CACACA", my: 2 }} />

      <Grid container spacing={4} alignItems="start">
        {/* Details Section */}
        <Grid item xs={12} md={6} lg={5}>
          <Grid container spacing={4}>
            {details.map((column, colIndex) => (
              <Grid key={colIndex} item xs={12} sm={6} md={12} lg={6}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
                >
                  {column.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", md: "15px" },
                          color: "#9CA3AF",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "18px" },
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Description Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              border: "0.5px solid #CACACA",
              borderRadius: "8px",
              p: "24px",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                mb: "12px",
              }}
            >
              Description
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#9CA3AF",
                lineHeight: "30px",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdDetails;
