import { SummaryActivity } from 'strava'

export type AthleteStats = {
  ytdRunDistance: string
  ytdTotalRuns: number
}

export type Activity = Pick<SummaryActivity, 'name' | 'type'> & {
  date: string
  distance: string
  time: string
}

export type Strava = {
  activities: Array<Activity>
  totals: AthleteStats
}
