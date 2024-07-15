import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'filled' | 'outlined';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = 'filled',
  children,
  ...props
}) => {
  return (
    <Button
      variant={variantType === 'filled' ? 'contained' : 'outlined'}
      {...props}
      sx={{
        backgroundColor: variantType === 'filled' ? '#111827' : 'transparent',
        color: variantType === 'outlined' ? '#111827' : 'white',
        borderColor: variantType === 'outlined' ? '#111827' : 'transparent',
        '&:hover': {
          backgroundColor: variantType === 'filled' ? '#1f2937' : 'rgba(0, 0, 0, 0.04)', // Slightly darker on hover for filled
          borderColor: variantType === 'outlined' ? '#111827' : 'transparent',
          color: variantType === 'outlined' ? '#111827' : 'white'
        },
        ...props.sx, // Allows custom styles to be applied in addition
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
