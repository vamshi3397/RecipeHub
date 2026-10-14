import { Box, Typography } from "@mui/material"

export const RightPane = () => {
    return (
        <>
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    p: 3,
                }}
            >
                <Typography variant="h5" component={'text'} fontWeight={600}>
                    Right Panel
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    This area automatically expands or shrinks when you toggle
                    the left panel.
                </Typography>
            </Box>
        </>
    )
}