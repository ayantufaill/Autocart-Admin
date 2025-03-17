import { Box, Grid, Typography, Divider } from '@mui/material';

interface DetailItem {
  label: string;
  value: string;
}

interface AdDetailsProps {
  details: DetailItem[][];  // Expecting an array of arrays of detail items
  description: string;
}

const AdDetails: React.FC<AdDetailsProps> = ({ details, description }) => {
  return (
    <Box>
      {/* Ad Details Section */}
      <Typography sx={{ fontSize: { xs: '22px', sm: '26px', md: '32px' }, fontWeight: 600, color: '#1F2937' }}>
        Ads Detail
      </Typography>
      <Divider sx={{ bgcolor: "#CACACA", my: 4 }} />

      {/* Grid Container */}
      <Grid container spacing={4}>
        {/* Ad Details Section (2 Columns on xl) */}
        <Grid item xs={12} md={6} lg={6} xl={3}>
          <Box sx={{ display: 'flex', flexDirection: "column", gap: '64px' }}>
            {details[0]?.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: "column", gap: '24px' }}>
                <Typography sx={{ fontSize: '24px', color: "#9CA3AF", letterSpacing: "1%" }}>
                  {item.label}
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '22px', sm: '26px', md: '32px' },
                  fontWeight: 600, color: '#1F2937'
                }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={3}>
          <Box sx={{ display: 'flex', flexDirection: "column", gap: '64px' }}>
            {details[1]?.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: "column", gap: '24px' }}>
                <Typography sx={{ fontSize: '24px', color: "#9CA3AF", letterSpacing: "1%" }}>
                  {item.label}
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '22px', sm: '26px', md: '32px' },
                  fontWeight: 600, color: '#1F2937'
                }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Description Section */}
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <Box sx={{ border: '0.5px solid #CACACA', borderRadius: '8px', px: '40px', py: '40px' }}>
            <Typography sx={{ fontSize: { xs: '18px', sm: '20px', md: '24px' }, fontWeight: 600, color: '#000000', mb: '10px' }}>
              Description
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, color: '#9CA3AF', lineHeight: '30px' }}>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdDetails;
