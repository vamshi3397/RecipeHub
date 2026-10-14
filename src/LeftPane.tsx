import {
    Box,
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const LeftPane = () => {
    const [open, setOpen] = useState(true);

    const menuItems = [
        "Inbox",
        "Starred",
        "Send email",
        "Drafts",
        "All mail",
        "Trash",
        "Spam",
    ];

    return (
        <Box
            sx={{
                width: open ? '20%' : '5%',
                borderRight: 1,
                borderColor: "divider",
                transition: "width 300ms ease",
            }}
        >
            {/* Panel header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: 1,
                    height: 48,
                    boxSizing: "border-box",
                }}
            >
                <IconButton
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label={open ? "Close left panel" : "Open left panel"}
                >
                    {open ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                {open && (
                    <Typography component={'text'} fontWeight={600} noWrap>
                        Navigation
                    </Typography>
                )}
            </Box>

            <Divider />
            {open && (
                <List>
                    {menuItems.map((item) => (
                        <ListItemButton key={item}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    ))}
                </List>
            )}
        </Box>

    );
};