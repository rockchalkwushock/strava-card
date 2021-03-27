import * as React from 'react'

import { useStrava } from '@hooks'

type Props = {}

export const StravaCard: React.FC<Props> = () => {
  const { data, error } = useStrava()

  if (error) return <h1>Error</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <div className="bg-orange-500 border border-transparent flex flex-col p-4 rounded-lg shadow-md">
      <header className="flex items-center justify-center mb-4 w-full">
        <h1 className="font-medium italic text-2xl">My Strava Data</h1>
      </header>
      <div className="flex flex-col flex-grow space-y-2">
        <div className="bg-orange-200 p-4 rounded-lg shadow-md">
          <h4 className="font-medium mb-2 underline">Yearly Totals</h4>
          <p className="text-sm">
            Total Distance Ran: {data.totals.ytdRunDistance}
          </p>
          <p className="text-sm">Total Runs: {data.totals.ytdTotalRuns}</p>
        </div>
        <div className="bg-orange-200 p-4 rounded-lg shadow-md">
          <h4 className="font-medium mb-2 underline">Weekly Activity</h4>
          <ul>
            {data.activities.length === 0 ? (
              <p>No activity yet</p>
            ) : (
              <ul>
                {data.activities.map((a, i) => (
                  <li className="text-sm" key={`${i}--${a.date}`}>
                    {a.date}: {a.name} -- {a.distance} -- {a.time}
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
