import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
            }}
        >
            <CircularProgress sx={{ color: "#07B007" }} />
        </Box>
    )
}

export default Loading;
