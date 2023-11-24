"use client";
import { useState } from 'react'
import { StatisticsEntryForm } from './components/statisticsEntryForm'
import { StatisticsList } from './components/statisticsList'
import HomePage from './pages/home'

export default function Home() {
  // This component is now marked for client-side execution

  const [statsList, setStatsList] = useState([])

  // const addStats = (newStats: any) => {
  //   setStatsList([...statsList, newStats])
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* <StatisticsEntryForm onAddStats={addStats} />
      <StatisticsList statsList={statsList} /> */}
      <HomePage/>
    </main>
  )
}
