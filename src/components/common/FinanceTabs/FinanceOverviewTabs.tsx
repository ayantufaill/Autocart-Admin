import React from "react";
import { Box, Button } from "@mui/material";

interface Tab {
    label: string;
}

interface NavigationTabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <Box sx={{ height: {xs:'46px',xl:"94px"} }}>
            <Box
                sx={{
                    height: "46px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    flexWrap:{xs:'wrap', lg:'nowrap'},
                    justifyContent:{xs:'center', md:'flex-start'},
                    
                }}
            >
                {tabs.map((tab, index) => (
                    <Button
                        key={index}
                        variant={activeTab === tab.label ? "contained" : "text"}
                        sx={{
                            width: "222px",
                            height: "42px",
                            px: "4px",
                            py: "8px",
                            bgcolor: activeTab === tab.label ? "#07B007" : "transparent",
                            color: activeTab === tab.label ? "white" : "#9CA3AF",
                            fontSize: "18px",
                            borderRadius: "4px",
                            textTransform: "none",
                        }}
                        onClick={() => onTabChange(tab.label)}
                    >
                        {tab.label}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default NavigationTabs;
