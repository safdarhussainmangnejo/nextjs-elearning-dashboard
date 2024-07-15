import { Card, CardContent, Typography, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  icon: SvgIconComponent;
}

const FeatureCard = ({ title, description, backgroundColor, icon: Icon }: FeatureCardProps) => {
  return (
    <Card>
      <Box sx={{ position: 'relative', backgroundColor, p: 3, height: '100px', display: 'flex', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
        <Icon sx={{ position: 'absolute', top: 8, right: 8, fontSize: 40, color: 'white' }} />
        <Typography variant="h6" color="text.primary" sx={{ position: 'absolute', bottom: 8, left: 8, fontWeight: 'bold', color: 'white' }}>{title}</Typography>
      </Box>
      <CardContent sx={{ p: 2 }}>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
