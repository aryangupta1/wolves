import { useState } from 'react'
import { TextField, Button } from '@mui/material'

interface GameStats {
  date: string
  opponent: string
  goalsScored: number
  goalsConceded: number
  goalScorers: string
  biggestWin: string
  biggestFlop: string
  quoteOfTheDay: string
}

interface Props {
  onAddStats: (stats: GameStats) => void
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
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'goalsScored' || name === 'goalsConceded') {
      setStats({ ...stats, [name]: Number(value) })
    } else {
      setStats({ ...stats, [name]: value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddStats(stats)
    setStats({
      date: '',
      opponent: '',
      goalsScored: 0,
      goalsConceded: 0,
      goalScorers: '',
      biggestWin: '',
      biggestFlop: '',
      quoteOfTheDay: ''
    })
  }

  return (
    <form className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <TextField
        type="date"
        name="date"
        value={stats.date}
        onChange={handleChange}
        label="Date"
        variant="outlined"
        fullWidth
        className="mb-4"
      />
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
      <Button type="submit" variant="contained" color="primary" className="w-full">
        Submit
      </Button>
    </form>
  )
}
