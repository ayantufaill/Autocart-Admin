import React from 'react'
import { Box, Typography, Grid } from '@mui/material';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import FinanceOverviewTabs from "@/components/common/FinanceTabs/FinanceOverviewTabs";
import FinanceStatCard from '@/components/common/AdminCards/FinanceCard';
import CustomBarChart from '@/components/common/AdminCards/BarChart';

const financeData = [
  { title: 'Daily', amount: '$6,733,345', percentage: '+9.2%', comparisonText: 'Compared to yesterday' },
  { title: 'Weekly', amount: '$6,767,345', percentage: '+9.4%', comparisonText: 'Compared to yesterday' },
  { title: 'Monthly', amount: '$6,833,345', percentage: '-9.9%', comparisonText: 'Compared to yesterday' },
  { title: 'Yearly', amount: '$6,733,395', percentage: '+9.1%', comparisonText: 'Compared to yesterday' }
];
const index: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>("Finance Overview");

  const tabs = [
    { label: "Finance Overview" },
    { label: "All Transactions" },
    { label: "Refund Management" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        px: '60px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '20px', md: '37px' },
      }}
    >
   
      <Box sx={{ py: '24px', height: '94px',mb:{xs:'120px',sm:'120px', md:'50px'} }}>
        <FinanceOverviewTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Box>


    
      <Box sx={{
        display: 'flex', flexDirection: "column", gap: '7px'
      }}>
        {/* Heading */}
        <Box sx={{ display: "flex", gap: '16px', alignItems: 'center', mb: '15px' }}>
          <PaidOutlinedIcon sx={{ height: "36px", width: "36px", color: "#9CA3AF" }} />
          <Typography sx={{ fontSize: '32px', color: '#1F2937', fontWeight: 600 }}>Finance Overview</Typography>
        </Box>
        {/* Cards */}
        <Box>
          <Grid container spacing={2}>
            {financeData.map((data, index) => (
              <Grid item xs={12} md={6} lg={6} xl={3} key={index}>
                <FinanceStatCard {...data} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bar Chart */}
        <Box sx={{ my: { xs: '20px', lg: '60px' } }}>
          <CustomBarChart />
        </Box>
      </Box>
    </Box>
  )
}

export default index