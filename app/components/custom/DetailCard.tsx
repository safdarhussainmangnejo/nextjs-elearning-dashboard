import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

interface DetailCardProps {
  details: { title: string; description: string }[];
}

const DetailCard: React.FC<DetailCardProps> = ({ details }) => {
  return (
    <>
    <Typography variant="h6" gutterBottom>
          Detail
        </Typography>
    <Card variant="outlined">
      <CardContent>
        <Grid  spacing={3}>
          {details.map((detail, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {detail.title}
              </Typography>
              <Typography variant="body2">{detail.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    </>
  );
};

export default DetailCard;