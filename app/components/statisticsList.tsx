import { List, ListItem, Typography } from '@mui/material'

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
  statsList: GameStats[]
}

export const StatisticsList: React.FC<Props> = ({ statsList }) => {
  return (
    <List className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {statsList.map((stats, index) => (
        <ListItem key={index} divider className="flex flex-col">
          <Typography variant="body1" className="text-gray-700">Date: {stats.date}</Typography>
          <Typography variant="body1" className="text-gray-700">Opponent: {stats.opponent}</Typography>
          <Typography variant="body1" className="text-gray-700">Goals Scored: {stats.goalsScored}</Typography>
          <Typography variant="body1" className="text-gray-700">Goals Conceded: {stats.goalsConceded}</Typography>
          <Typography variant="body1" className="text-gray-700">Goal Scorers: {stats.goalScorers}</Typography>
          <Typography variant="body1" className="text-gray-700">Biggest Win: {stats.biggestWin}</Typography>
          <Typography variant="body1" className="text-gray-700">Biggest Flop: {stats.biggestFlop}</Typography>
          <Typography variant="body1" className="text-gray-700">Quote of the Day: {stats.quoteOfTheDay}</Typography>
        </ListItem>
      ))}
    </List>
  )
}
