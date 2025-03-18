import { Box } from '@mui/material';
import AdHeader from '@/components/common/AdsActive/AdHeader';
import AdDetails from '@/components/common/AdsActive/AdDetail';
import AdImages from '@/components/common/AdsActive/AdImage';

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
        { label: "Mileage", value: "2000km" }
    ],
    [
        { label: "Category", value: "Car" },
        { label: "Vehicle License Number", value: "VH-24HGDHHSBV" },
        { label: "Type", value: "Private Seller" }
    ]
];

const description = `Lorem ipsum dolor sit amet consectetur. Pretium fermentum suspendisse dictumst fames egestas nullam velit. Quis quam tempor suscipit nisi eu tempus libero nulla. Cras purus tortor bibendum amet bibendum rhoncus. At a integer pretium nascetur tellus duis neque ut. Purus fusce mi ut nulla cras arcu. Nibh amet viverra id blandit in tellus sodales nullam. Bibendum ut commodo velit pharetra ullamcorper. Odio aliquam ullamcorper ut dictum consectetur congue tristique arcu. Sed imperdiet sit turpis massa. Ultricies amet egestas nulla massa vitae. Id mi vestibulum non dui accumsan. Rutrum faucibus sodales et vivamus adipiscing neque dig vitae vel. Porta et nullam ultrices eget mi nulla quis facilisi. Diam est.`;

const index = () => {
    const handleDelete = () => {
        console.log("Ad Deleted");
    };

    return (
        <Box sx={{ backgroundColor: '#F9F9F9', px: { xs: '30px', md: '60px' }, height: '100%', pb: '20px' }}>
            <AdHeader title="BMW Sport" onDelete={handleDelete} />
            <Box sx={{ border: "0.5px solid #CACACA", borderRadius: "24px", bgcolor: "#FFFFFF", px: '40px', pt: '40px' }}>
                <AdDetails details={details} description={description} />
                <AdImages images={itemData} />
            </Box>
        </Box>
    );
};

export default index;
