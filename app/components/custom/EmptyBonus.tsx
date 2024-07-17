import React from 'react';
import { Box, Typography } from '@mui/material';
import { Image } from 'react-bootstrap';

interface EmptyCardProps {
  title: string;
  description: string;
  image: string;
}

const EmptyBonus = ({title, description, image}: EmptyCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#fff"
    >
      <Box
        component="img"
        src={image}
        alt="A+ Score"
        width="150px"
        height="150px"
        mb={2}
      />
      <Box maxWidth="380px">
        <Typography variant="h6" color="textPrimary">
          {title}
          
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyBonus;