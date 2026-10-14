
import {
  TextField
} from "@mui/material";


interface TextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  type?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const InputComponent = ({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  error = false,
  helperText,
  fullWidth = false
}: TextInputProps) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      variant="outlined"
    />
  );
};
