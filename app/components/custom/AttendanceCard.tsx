'use client'
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import OpsTeamRepairModal from "./InfoModal";

interface CardHeaderDetailsProps {
  title: string;
  description: string;
  bonusType: string;
  date: string;
  buttonText: string;
  imageUrl: string;
}

const AttendanceCard: React.FC<CardHeaderDetailsProps> = ({
  title,
  description,
  bonusType,
  date,
  buttonText,
  imageUrl,
}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Grid container spacing={3} mx={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {description}
            </Typography>
            <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    p: 1,
                    textAlign: "left",
                    padding: "20px",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Attendance List
                  </Typography>
                  <Typography variant="body2" color="error">
                    {bonusType}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    p: 1,
                    textAlign: "left",
                    padding: "20px",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Date
                  </Typography>
                  <Typography variant="body2" color="primary">
                    {date}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#A5A6F6", color: "white" }}
              startIcon={<SimCardDownloadIcon />}
              onClick={handleModalOpen}
            >
              {buttonText}
            </Button>

          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="/images/bonus.png"
              alt="Score"
              style={{ width: "60%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <OpsTeamRepairModal open={modalOpen} onClose={handleModalClose} />
    </>
  );
};

export default AttendanceCard;
