import * as React from 'react'
import { Loader } from 'react-feather'

import { useStrava } from '@hooks'

type Props = {}

export const StravaCard: React.FC<Props> = () => {
  const { data, error } = useStrava()

  return (
    <div
      className={`bg-orange-300 flex flex-col p-4 rounded-lg shadow-md dark:bg-orange-500 ${
        !data ? 'items-center justify-center rounded-full' : undefined
      }`}
    >
      {error ? (
        <h1 className="text-2xl">Error</h1>
      ) : !data ? (
        <Loader className="animate-spin h-20 w-20 text-indigo-300 dark:text-indigo-700" />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}
