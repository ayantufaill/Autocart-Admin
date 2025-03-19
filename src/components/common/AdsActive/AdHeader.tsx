import { Box, Typography, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface AdHeaderProps {
  title: string;
  onApprove?: () => void;
  onReject?: () => void;
  onDelete?: () => void;
}

const AdHeader: React.FC<AdHeaderProps> = ({
  title,
  onApprove,
  onReject,
  onDelete,
}) => {
  return (
    <Box
      sx={{
        py: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "6px", sm: "12px" },
          height: "30px",
        }}
      >
        <Box
          sx={{
            height: "10px",
            width: "10px",
            bgcolor: "#07B007",
            borderRadius: "3px",
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "22px" },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "10px" }}>
        {onApprove && (
          <Button
            variant="contained"
            onClick={onApprove}
            sx={{
              backgroundColor: "#60A5FA",
              color: "#FFFFFF",
              height: { xs: "30px", sm: "38px", md: "44px" },
              width: { xs: "90px", sm: "110px", md: "140px" },
              borderRadius: "6px",
              textTransform: "none",
              gap: "1px",
              "&:hover": { backgroundColor: "#3A75BF" },
            }}
          >
            <DeleteOutlineIcon sx={{ height: "20px", width: "20px", mr: 1 }} />
            Approve Ad
          </Button>
        )}
        {onReject && (
          <Button
            variant="contained"
            onClick={onReject}
            sx={{
              backgroundColor: "#F87171",
              color: "#FFFFFF",
              height: { xs: "30px", sm: "38px", md: "44px" },
              width: { xs: "90px", sm: "110px", md: "140px" },
              borderRadius: "6px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",

              gap: "2px",
              "&:hover": { backgroundColor: "#EA5656" },
            }}
          >
            <CancelIcon sx={{ height: "20px", width: "20px", mr: 1 }} />
            Reject Ad
          </Button>
        )}

        {onDelete && (
          <Button
            variant="contained"
            onClick={onDelete}
            sx={{
              backgroundColor: "#F87171",
              color: "#FFFFFF",
              height: { xs: "30px", sm: "38px", md: "44px" },
              width: { xs: "90px", sm: "110px", md: "130px" },
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderRadius: "6px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#DC2626" },
            }}
          >
            <DeleteOutlineIcon sx={{ height: "20px", width: "20px" }} />
            Delete
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AdHeader;
