import { Box, Grid } from '@mui/material';

interface ImageItem {
    img: string;
    title: string;
}

interface AdImagesProps {
    images: ImageItem[];
}

const AdImages: React.FC<AdImagesProps> = ({ images }) => {
    return (
        <Box sx={{ minHeight: '464px', display: "flex", alignItems: "center", justifyContent: "center", py: { xs: 8, lg: 4 } }}>
            <Box sx={{ minHeight: '444px', width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Grid container spacing={4}>
                    {images.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={3} key={index}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: "auto", xl: "344px" }, 
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    aspectRatio: "16/9",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default AdImages;
