import { Box } from "@mui/material"
import { LeftPane } from "../LeftPane"
import { RightPane } from "../RightPane"

export const Recipes = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                width: "100%",
                height: "100vh",
            }}>
                <LeftPane />
                <RightPane />
            </Box>
        </>
    )
}