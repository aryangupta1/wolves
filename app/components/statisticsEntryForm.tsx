import { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

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
  onAddStats: (stats: GameStats) => void;
}

export const StatisticsEntryForm: React.FC<Props> = ({ onAddStats }) => {
  const [stats, setStats] = useState<GameStats>({
    date: '',
    opponent: '',
    goalsScored: 0,
    goalsConceded: 0,
    goalScorers: '',
    biggestWin: '',
    biggestFlop: '',
    quoteOfTheDay: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'goalsScored' || name === 'goalsConceded') {
      setStats({ ...stats, [name]: Number(value) });
    } else {
      setStats({ ...stats, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddStats(stats);
    setStats({
      date: '',
      opponent: '',
      goalsScored: 0,
      goalsConceded: 0,
      goalScorers: '',
      biggestWin: '',
      biggestFlop: '',
      quoteOfTheDay: ''
    });
    setShowForm(false);
  };

  return (
    <Box className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {showForm ? (
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                name="date"
                value={stats.date}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="opponent"
                value={stats.opponent}
                onChange={handleChange}
                label="Opponent"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                name="goalsScored"
                value={stats.goalsScored.toString()}
                onChange={handleChange}
                label="Goals Scored"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                name="goalsConceded"
                value={stats.goalsConceded.toString()}
                onChange={handleChange}
                label="Goals Conceded"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="goalScorers"
                value={stats.goalScorers}
                onChange={handleChange}
                label="Goal Scorers"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="biggestWin"
                value={stats.biggestWin}
                onChange={handleChange}
                label="Biggest Win"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="biggestFlop"
                value={stats.biggestFlop}
                onChange={handleChange}
                label="Biggest Flop"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="quoteOfTheDay"
                value={stats.quoteOfTheDay}
                onChange={handleChange}
                label="Quote of the Day"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" className="w-full">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            Enter Game Stats
          </Button>
        </Box>
      )}
    </Box>
  );
};
