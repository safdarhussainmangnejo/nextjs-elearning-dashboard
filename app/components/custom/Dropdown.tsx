import { TextField, MenuItem } from '@mui/material';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ label, options, value, onChange }: DropdownProps) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
