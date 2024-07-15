import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyBonus: React.FC = () => {
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
        src="/images/bonus.png"
        alt="A+ Score"
        width="150px"
        height="150px"
        mb={2}
      />
      <Box maxWidth="350px">
        <Typography variant="h6" color="textPrimary">
          No Bonuses Have Been Recorded
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Are you sure you want to accept this?
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyBonus;