import { Strava as StravaClient } from 'strava'
import { endOfWeek, format, getUnixTime, startOfWeek } from 'date-fns'

import { Maybe, Strava } from '@interfaces'
import { formatStravaSeconds } from 'utils'

// Instantiate Strava client.
const client = new StravaClient({
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STRAVA_CLIENT_SECRET,
  refresh_token: process.env.STRAVA_REFRESH_TOKEN,
})

export async function getStrava(): Promise<Maybe<Strava>> {
  const date = new Date()
  try {
    // Define request for activities.
    const activitiesRequest = client.activities.getLoggedInAthleteActivities({
      // Bound the query to the current weeks activities.
      after: getUnixTime(startOfWeek(date)),
      before: getUnixTime(endOfWeek(date)),
    })
    // Define request for stats.
    const statsRequest = client.athletes.getStats({
      // Library expects a number.
      id: parseInt(process.env.NEXT_PUBLIC_STRAVA_ATHLETE_ID),
    })

    // Here we can batch our requests.
    // NOTE: If any request fails Promise.all will reject!
    const [activities, stats] = await Promise.all([
      activitiesRequest,
      statsRequest,
    ])

    // If Strava API call fails reject the Promise with null.
    // The frontend will interpret this and handle displaying
    // the correct UI.
    if (!activities || !stats) {
      return Promise.reject(null)
    }

    return Promise.resolve({
      activities: activities.map(a => ({
        date: format(new Date(a.start_date_local), 'EEE'),
        distance: `${(a.distance / 1000).toFixed(2)} km`,
        name: a.name,
        time: formatStravaSeconds(a.elapsed_time),
        type: a.type,
      })),
      totals: {
        ytdRunDistance: `${(stats.ytd_run_totals.distance / 1000).toFixed(
          2
        )} km`,
        ytdTotalRuns: stats.all_run_totals.count,
      },
    })
  } catch (error) {
    throw new Error(error)
  }
}
