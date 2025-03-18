import { Box } from "@mui/material";
import AdHeader from "@/components/common/AdsActive/AdHeader";
import AdDetails from "@/components/common/AdsActive/AdDetail";
import AdImages from "@/components/common/AdsActive/AdImage";

const itemData = [
  { img: "/Images/AdsActive/image 12.png", title: "Image 1" },
  { img: "/Images/AdsActive/image 15.png", title: "Image 2" },
  { img: "/Images/AdsActive/image 14.png", title: "Image 3" },
  { img: "/Images/AdsActive/image 13.png", title: "Image 4" },
];

const details = [
  [
    { label: "Title", value: "BMW Sport" },
    { label: "Youtube Link", value: "www.youtube.com" },
    { label: "Mileage", value: "2000km" },
  ],
  [
    { label: "Category", value: "Car" },
    { label: "Vehicle License Number", value: "VH-24HGDHHSBV" },
    { label: "Type", value: "Private Seller" },
  ],
];

const description = `Lorem ipsum dolor sit amet consectetur. Pretium fermentum suspendisse dictumst fames egestas nullam velit. Quis quam tempor suscipit nisi eu tempus libero nulla. Cras purus tortor bibendum amet bibendum rhoncus. At a integer pretium nascetur tellus duis neque ut. Purus fusce mi ut nulla cras arcu. Nibh amet viverra id blandit in tellus sodales nullam.`;

const Index = () => {
  const handleReject = () => {
    console.log("Ad Rejected");
  };

  const handleApprove = () => {
    console.log("Ad Approved");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        px: { xs: "20px", md: "40px" },
        minHeight: "100vh",
        color: "#1F2937",
      }}
    >
      {/* Ad Header with Only Approve & Reject Buttons */}
      <AdHeader
        title="BMW Sport"
        onApprove={handleApprove}
        onReject={handleReject}
      />

      <Box
        sx={{
          border: "0.5px solid #CACACA",
          borderRadius: "16px",
          bgcolor: "#FFFFFF",
          px: "30px",
          pt: "30px",
          minHeight: "100vh",
        }}
      >
        {/* Ad Details */}
        <AdDetails details={details} description={description} />

        {/* Ad Images */}
        <AdImages images={itemData} />
      </Box>
    </Box>
  );
};

export default Index;
