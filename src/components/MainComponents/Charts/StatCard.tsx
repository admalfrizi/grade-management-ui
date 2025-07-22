import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses } from '@mui/x-charts/LineChart';

export type InfoCardProps = {
  nmInfo: string;
  vlInfo: string;
};

export default function StatCard({
  nmInfo,
  vlInfo,
}: InfoCardProps) {
  // const theme = useTheme();
  // const daysInWeek = getDaysInMonth(4, 2024);

  // const trendColors = {
  //   up:
  //     theme.palette.mode === 'light'
  //       ? theme.palette.success.main
  //       : theme.palette.success.dark,
  //   down:
  //     theme.palette.mode === 'light'
  //       ? theme.palette.error.main
  //       : theme.palette.error.dark,
  //   neutral:
  //     theme.palette.mode === 'light'
  //       ? theme.palette.grey[400]
  //       : theme.palette.grey[700],
  // };

  // const labelColors = {
  //   up: 'success' as const,
  //   down: 'error' as const,
  //   neutral: 'default' as const,
  // };

  // const color = labelColors[trend];
  // const chartColor = trendColors[trend];
  // const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

  return (
    <Card variant="outlined" sx={{ height: '100%'}}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {nmInfo}
        </Typography>
        <Typography variant="h4" component="p">
          {vlInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}