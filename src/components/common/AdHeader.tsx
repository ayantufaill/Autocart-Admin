import { Box, Typography, Button } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const AdHeader = ({ title, onDelete }) => {
    return (
        <Box
            sx={{
                py: "48px",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: "156px"
            }}
        >
            {/* Left Section */}
            <Box sx={{ display: 'flex', alignItems: "center", gap: { xs: '8px', sm: '24px' }, height: "40px" }}>
                <Box sx={{ height: { xs: '12px', sm: '16px' }, width: { xs: '12px', sm: '16px' }, bgcolor: "#07B007", borderRadius: "4px" }}></Box>
                <Typography sx={{ fontSize: { xs: '22px', sm: '26px', md: '32px' }, fontWeight: 600 }}>
                    {title}
                </Typography>
            </Box>
            {/* Right Section */}
            <Button
                variant="contained"
                onClick={onDelete}
                sx={{
                    backgroundColor: "#F87171",
                    color: "#FFFFFF",
                    height: { xs: '40px', sm: '50px', md: '60px' },
                    width: { xs: '130px', sm: '150px', md: '200px' },
                    px: { xs: '4px', md: '12px' },
                    py: { xs: '4px', md: '12px' },
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: '4px', md: '16px' },
                    borderRadius: "8px",
                    textTransform: "none",
                }}
            >
                <DeleteOutlineIcon sx={{ height: { xs: '22px', md: '36px' }, width: { xs: '22px', md: '36px' } }} />
                <Typography sx={{ fontSize: { xs: '18px', md: '24px' }, color: "#FFFFFF", fontWeight: 600 }}>
                    Delete Ad
                </Typography>
            </Button>
        </Box>
    );
};

export default AdHeader;
