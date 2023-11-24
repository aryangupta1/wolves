import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface GameStats {
  date: string;
  opponent: string;
  goalsScored: number;
  goalsConceded: number;
  goalScorers: string;
  biggestWin: string;
  biggestFlop: string;
  quoteOfTheDay: string;
}

interface Props {
  statsList: GameStats[];
}

export const StatisticsList: React.FC<Props> = ({ statsList }) => {
  return (
    <Grid container spacing={2} className="mb-4">
      {statsList.map((stats, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card className="shadow-lg rounded bg-blue-50 hover:bg-blue-100">
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Game on: {stats.date}
              </Typography>
              <Typography variant="subtitle1">Opponent: {stats.opponent}</Typography>
              <Typography variant="body2">Goals Scored: {stats.goalsScored}</Typography>
              <Typography variant="body2">Goals Conceded: {stats.goalsConceded}</Typography>
              <Typography variant="body2">Goal Scorers: {stats.goalScorers}</Typography>
              <Typography variant="body2">Biggest Win: {stats.biggestWin}</Typography>
              <Typography variant="body2">Biggest Flop: {stats.biggestFlop}</Typography>
              <Typography variant="body2">Quote of the Day: {stats.quoteOfTheDay}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
