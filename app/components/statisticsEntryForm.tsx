import { useState } from 'react'

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
      <input
        type="date"
        name="date"
        value={stats.date}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Date"
      />
      <input
        type="text"
        name="opponent"
        value={stats.opponent}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Opponent"
      />
      <input
        type="number"
        name="goalsScored"
        value={stats.goalsScored}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Goals Scored"
      />
      <input
        type="number"
        name="goalsConceded"
        value={stats.goalsConceded}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Goals Conceded"
      />
      <input
        type="text"
        name="goalScorers"
        value={stats.goalScorers}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Goal Scorers"
      />
      <input
        type="text"
        name="biggestWin"
        value={stats.biggestWin}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Biggest Win"
      />
      <input
        type="text"
        name="biggestFlop"
        value={stats.biggestFlop}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Biggest Flop"
      />
      <textarea
        name="quoteOfTheDay"
        value={stats.quoteOfTheDay}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Quote of the Day"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  )
}
