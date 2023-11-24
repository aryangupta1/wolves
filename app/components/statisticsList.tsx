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
      <div className="flex flex-col space-y-4">
        {statsList.map((stats, index) => (
          <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-gray-700">Date: {stats.date}</p>
            <p className="text-gray-700">Opponent: {stats.opponent}</p>
            <p className="text-gray-700">Goals Scored: {stats.goalsScored}</p>
            <p className="text-gray-700">Goals Conceded: {stats.goalsConceded}</p>
            <p className="text-gray-700">Goal Scorers: {stats.goalScorers}</p>
            <p className="text-gray-700">Biggest Win: {stats.biggestWin}</p>
            <p className="text-gray-700">Biggest Flop: {stats.biggestFlop}</p>
            <p className="text-gray-700">Quote of the Day: {stats.quoteOfTheDay}</p>
          </div>
        ))}
      </div>
    )
  }
  