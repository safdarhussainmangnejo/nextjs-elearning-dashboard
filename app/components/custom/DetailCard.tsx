import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

interface DetailCardProps {
  details: {
    title: string;
    menteeName: string;
    bonusType: string;
    scholarshipName: string;
    universityDesignation: string;
    startYear: string;
    mentoringMonth: string;
    attachments: string;
  };
}

const DetailCard: React.FC<DetailCardProps> = ({ details }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Detail
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Title
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.title}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Mentee's Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.menteeName}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Bonus Type
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.bonusType}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                University Designation
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                {details.universityDesignation}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Scholarship Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.scholarshipName}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Start Year
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.startYear}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Mentoring Month
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.mentoringMonth}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="textSecondary">
                Attachment
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">{details.attachments}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailCard;
