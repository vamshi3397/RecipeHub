import { Button, Stack } from "@mui/material";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    variant: "text" | "outlined" | "contained";
    onClick: () => void;
}
export const ButtonComponent = ({ label, variant, onClick }: ButtonProps) => {
    return (<>
        <Stack>
            <Button
                variant={variant}
                onClick={onClick}
                component="label"
            >
                {label}
            </Button>
        </Stack>
    </>)
}