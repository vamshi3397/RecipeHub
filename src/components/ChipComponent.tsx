
import { Chip as MuiChip } from "@mui/material";

interface ChipProps {
  label: string;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  variant?: "filled" | "outlined";
  size?: "small" | "medium";
  disabled?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
}

export const ChipComponent = ({
  label,
  color = "default",
  variant = "filled",
  size = "medium",
  disabled = false,
  onDelete,
  onClick,
}: ChipProps) => {
  return (
    <MuiChip
      label={label}
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      onDelete={onDelete}
      onClick={onClick}
    />
  );
};
