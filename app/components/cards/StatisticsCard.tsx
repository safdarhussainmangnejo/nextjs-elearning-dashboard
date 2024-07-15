"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface StatisticsCardProps {
  title: string;
  value: string;
  change: string;
  changeColor: string;
  icon: SvgIconComponent;
  graph: SvgIconComponent;
}

const StatisticsCard = ({
  title,
  value,
  change,
  changeColor,
  icon: Icon,
  graph: Arrow,
}: StatisticsCardProps) => {
  console.log({ title, value, change, changeColor, Icon, Arrow });
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Icon
              sx={{
                fontSize: 40,
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" sx={{ mt: 2 }}>
            {value}
          </Typography>
          <Typography
            variant="body2"
            color={changeColor}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "12px",
              padding: "4px 8px",
              marginLeft: "8px",
              marginTop: "8px",
            }}
          >
            <Arrow
              sx={{
                minWidth: "unset",
                marginRight: "4px",
              }}
            />
            {/* <TrendingUpRounded fontSize="small" />
            </Arrow> */}
            {change}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;

// import { Icon } from '@iconify/react';
// import ReactApexChart from 'react-apexcharts';
// import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
// import trendingDownFill from '@iconify/icons-eva/trending-down-fill';
// // material
// import { alpha, useTheme, styled } from '@mui/material/styles';
// import { Box, Card, Typography, Stack } from '@mui/material';
// // utils
// // ----------------------------------------------------------------------

// const IconWrapperStyle = styled('div')(({ theme }) => ({
//   width: 24,
//   height: 24,
//   display: 'flex',
//   borderRadius: '50%',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.success.main,
//   backgroundColor: alpha(theme.palette.success.main, 0.16)
// }));

// // ----------------------------------------------------------------------

// const PERCENT = 0.15;
// // const TOTAL_INSTALLED = 2;
// const CHART_DATA = [{ data: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20] }];

// interface StatisticsCardProps {
//   title: string;
//   value: string;
//   change: string;
//   changeColor: string;
//   totalNumber?: any;
// }

// const StatisticsCard = ({ title, value, change, changeColor, totalNumber }: StatisticsCardProps) => {
//   const theme = useTheme();

//   const chartOptions = {
//     // colors: [theme.palette.chart.blue[0]],
//     colors: [theme.palette.text.primary],
//     chart: { sparkline: { enabled: true } },
//     plotOptions: { bar: { columnWidth: '68%', borderRadius: 2 } },
//     labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
//     tooltip: {
//       x: { show: false },
//       y: {
//         formatter: (seriesName:any) => Intl.NumberFormat().format(seriesName),
//         title: {
//           formatter: () => ''
//         }
//       },
//       marker: { show: false }
//     }
//   };

//   return (
//     <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
//       <Box sx={{ flexGrow: 1 }}>
//         <Typography variant="subtitle2">{title}</Typography>

//         <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, mb: 1 }}>
//           <IconWrapperStyle
//             sx={{
//               ...(PERCENT < 0 && {
//                 color: 'error.main',
//                 bgcolor: alpha(theme.palette.text.secondary, 0.16)
//               })
//             }}
//           >
//             <Icon width={16} height={16} icon={PERCENT >= 0 ? trendingUpFill : trendingDownFill} />
//           </IconWrapperStyle>
//           <Typography component="span" variant="subtitle2">
//             {PERCENT > 0 && '+'}
//             {Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1 }).format(PERCENT / 100) }
//           </Typography>
//         </Stack>

//         <Typography variant="h3">{totalNumber}</Typography>
//       </Box>

//       <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} width={60} height={36} />
//     </Card>
//   );
// }
// export default StatisticsCard;

// import { Card, CardContent, Typography } from '@mui/material';

// interface StatisticsCardProps {
//   title: string;
//   value: string;
//   change: string;
//   changeColor: string;
// }

// const StatisticsCard = ({ title, value, change, changeColor }: StatisticsCardProps) => {
//   return (

//     <Card>
//       <CardContent>
//         <Typography variant="h6">{title}</Typography>
//         <Typography variant="h3">{value}</Typography>
//         <Typography color={changeColor}>{change}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default StatisticsCard;
