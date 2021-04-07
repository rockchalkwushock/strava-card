import { formatDuration, intervalToDuration } from 'date-fns'

export const formatStravaSeconds = (seconds: number) => {
  return formatDuration(
    intervalToDuration({
      end: new Date(2021, 0, 1, 0, 0, seconds),
      start: new Date(2021, 0, 1, 0, 0, 0),
    }),
    { format: ['hours', 'minutes'] }
  )
}
