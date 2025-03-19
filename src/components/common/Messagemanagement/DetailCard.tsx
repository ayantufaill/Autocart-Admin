import { Box, Typography } from "@mui/material";
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';

interface UserInfo {
    label: string;
    value: string;
}

interface ProfileCardProps {
    title: string;
    imageSrc: string;
    userData: UserInfo[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, imageSrc, userData }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "17px", flex: 1 }}>
            <Typography sx={{ color: "#1F2937", fontSize: "20px", fontWeight: 600 }}>{title}</Typography>
            <Box
                sx={{
                    p: "16px",
                    border: "0.5px solid #CACACA",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "36px",
                }}
            >
                <Box
                    component="img"
                    src={imageSrc}
                    alt="Profile Image"
                    sx={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: 2, objectFit: "contain" }}
                />
                <Box sx={{ display: "flex", gap: "60px" }}>
                    {[0, 4].map((startIndex) => (
                        <Box key={startIndex} sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            {userData.slice(startIndex, startIndex + 4).map((info) => (
                                <Box key={info.label} sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    <Typography sx={{ color: "#9CA3AF", fontSize: "18px" }}>{info.label}</Typography>
                                    <Typography sx={{ color: "#1F2937", fontSize: "20px", fontWeight: 600 }}>{info.value}</Typography>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

const senderData: UserInfo[] = [
    { label: "Name", value: "AbdulMuizz Ayeleke" },
    { label: "Email Address", value: "ayeleke@gmail.com" },
    { label: "Phone Number", value: "+2348034254781" },
    { label: "Followers", value: "500" },
    { label: "Country", value: "Nigeria" },
    { label: "Area", value: "Lagos" },
    { label: "Type", value: "Private Seller" },
    { label: "Following", value: "850" },
];

const receiverData: UserInfo[] = [
    { label: "Name", value: "John Doe" },
    { label: "Email Address", value: "johndoe@gmail.com" },
    { label: "Phone Number", value: "+1234567890" },
    { label: "Followers", value: "1200" },
    { label: "Country", value: "USA" },
    { label: "Area", value: "New York" },
    { label: "Type", value: "Business Buyer" },
    { label: "Following", value: "300" },
];

const UserProfiles: React.FC = () => {
    return (
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <Box sx={{ width: { xs: '100%', lg: '45%' } }}>
                <ProfileCard title="Sender" imageSrc="/images/MessageFlagged/image 88.png" userData={senderData} />
            </Box>
            <Box sx={{ display: { xs: 'none', lg: "flex" }, alignItems: "center", justifyContent: "center" }}>
                <SyncAltOutlinedIcon sx={{ color: '#9CA3AF', width: '40px', height: '40px' }} />
            </Box>
            <Box sx={{ width: { xs: '100%', lg: '45%' } }}>
                <ProfileCard title="Receiver" imageSrc="/images/MessageFlagged/image 87.png" userData={receiverData} />
            </Box>
        </Box>
    );
};

export default UserProfiles;
