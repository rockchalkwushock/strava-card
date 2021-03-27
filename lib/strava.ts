import { Strava } from 'strava'

import { AthleteStats, Maybe } from '@interfaces'

// Instantiate Strava client.
const client = new Strava({
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STRAVA_CLIENT_SECRET,
  refresh_token: process.env.STRAVA_REFRESH_TOKEN,
})

export async function getStrava(): Promise<Maybe<AthleteStats>> {
  try {
    // Fetch total stats.
    const stats = await client.athletes.getStats({
      // Library expects a number.
      id: parseInt(process.env.NEXT_PUBLIC_STRAVA_ATHLETE_ID),
    })

    // If Strava API call fails reject the Promise with null.
    // The frontend will interpret this and handle displaying
    // the correct UI.
    if (!stats) {
      return Promise.reject(null)
    }

    return Promise.resolve({
      ytdRunDistance: `${(stats.ytd_run_totals.distance / 1000).toFixed(2)} km`, // 25 km
      ytdTotalRuns: stats.all_run_totals.count, // 32
    })
  } catch (error) {
    throw new Error(error)
  }
}
