import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { headerDetailsData, detailCardData, mentorAttendanceHeaderDetailsData } from "@/app/utils/dummyData";
import CardHeaderDetails from '../custom/AttendanceCard';
import DetailCard from '../custom/DetailCard';
import DaftarAttendance from '../custom/DaftarAttendance';

const DaftarHadirForm = () => {
  return (
    // <DaftarAttendance/>
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

        <CardHeaderDetails {...mentorAttendanceHeaderDetailsData} />

        <DetailCard details={detailCardData} />
      </Box>
    </Container>
  );
};

export default DaftarHadirForm;