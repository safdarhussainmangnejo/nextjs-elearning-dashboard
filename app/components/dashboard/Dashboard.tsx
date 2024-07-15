import { Grid, Box, Typography, Container, ListItemIcon } from "@mui/material";
import Layout from "@/app/theme/Layout";
import StatisticsCard from "../cards/StatisticsCard";
import FeatureCard from "../cards/FeatureCard";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Import the icon for the Schedule card
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; // Import the icon for Mentor and Tutor cards
import SettingsIcon from '@mui/icons-material/Settings';

const statisticsData = [
  {
    title: "Total Students",
    value: "3,540",
    change: "+25.5%",
    changeColor: "primary.light",
    icon: PeopleIcon,
    graph: TrendingUpRounded,
  },
  {
    title: "Tutor/Mentor",
    value: "1,150",
    change: "+4.10%",
    changeColor: "primary.light",
    icon: SchoolIcon,
    graph: TrendingUpRounded,
  },
  {
    title: "Instalment",
    value: "0",
    change: "+5.1%",
    changeColor: "primary.light",
    icon: AddRoundedIcon,
    graph: TrendingUpRounded,
  },
  {
    title: "Paid Off",
    value: "400",
    change: "-25.5%",
    changeColor: "error.main",
    icon: RemoveRoundedIcon,
    graph: TrendingDownRoundedIcon,
  },
];

const featureData = [
  { title: 'Schedule', description: 'Request and set schedule', backgroundColor: '#BED7DC', icon: CalendarTodayIcon },
  { title: 'Mentor', description: 'Materials, Class Zoom Link, Recording, Assignments', backgroundColor: '#AFC8AD', icon: SupervisorAccountIcon },
  { title: 'Tutor', description: 'Materials, Class Zoom Link, Recording, Assignments', backgroundColor: '#ACB1D6', icon: SupervisorAccountIcon },
  { title: 'Setting', description: 'Materials, Class Zoom Link, Recording, Assignments', backgroundColor: '#F2CB7E', icon: SettingsIcon },
];

const Dashboard = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
      <Box >
      <Typography variant="h2" gutterBottom>
      Dashboard Operational
    </Typography>
    <Box display="flex" alignItems="center" justifyContent="space-between">
    <Typography variant="h6" mt={5} mb={5}>
      Time Frame: All-Time <ListItemIcon ><ArrowDownwardRoundedIcon /></ListItemIcon>
    </Typography>
    </Box>
    
        <Grid container spacing={3}>
          {statisticsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatisticsCard
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeColor={stat.changeColor}
                icon={stat.icon}
                graph={stat.graph}
              />
            </Grid>
          ))}
          </Grid>
</Box>

          <Box mt={5}>
            <Typography variant="h5" gutterBottom>
              Fitur
            </Typography>
            <Grid container spacing={3}>
            {featureData.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard 
                  title={feature.title}
                  description={feature.description}
                  backgroundColor={feature.backgroundColor}
                  icon={feature.icon}
                />
              </Grid>
            ))}
            </Grid>
          </Box>
       
      </Container>

      {/* <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard Operational
        </Typography>
        <Grid container spacing={3}>
          {statisticsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatisticsCard 
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeColor={stat.changeColor}
              />
            </Grid>
          ))}
        </Grid>

        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Fitur
          </Typography>
          <Grid container spacing={3}>
            {featureData.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard 
                  title={feature.title}
                  description={feature.description}
                  backgroundColor={feature.backgroundColor}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout> */}
    </>
  );
};

export default Dashboard;
