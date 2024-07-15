import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { headerDetailsData, detailCardData } from "@/app/utils/dummyData";
import CardHeaderDetails from '../custom/AttendanceCard';
import DetailCard from '../custom/DetailCard';

const DaftarHadirForm = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Detail Bonus
          </Typography>
        </Box>

        <CardHeaderDetails {...headerDetailsData} />

        <DetailCard details={detailCardData} />
      </Box>
    </Container>
  );
};

export default DaftarHadirForm;