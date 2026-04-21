import { TextField } from "@mui/material";
import type { InputProps } from "@bengali/shared-types";

const Input = ({
  name,
  value,
  label,
  type = "text",
  error,
  helperText,
  onChange,
  onBlur,
  ...rest
}: InputProps<string>) => {
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      type={type}
      fullWidth
      error={error}
      helperText={helperText}
      onChange={(e) =>
        onChange({
          target: {
            name: e.target.name,
            value: e.target.value,
          },
        })
      }
      onBlur={(e) =>
        onBlur?.({
          target: {
            name: e.target.name,
          },
        })
      }
      autoComplete="off"
      slotProps={{ inputLabel: { shrink: true } }}
      {...rest}
    />
  );
};

export default Input;
