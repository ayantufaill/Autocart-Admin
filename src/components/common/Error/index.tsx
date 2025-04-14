import { Alert, Box } from '@mui/material'
import React from 'react'

interface ErrorStateProps {
    error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
            }}
        >
            <Alert severity="error">{error}</Alert>
        </Box>
    )
}

export default ErrorState;
