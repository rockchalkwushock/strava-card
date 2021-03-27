import useSWR, { SWRResponse } from 'swr'

import { AthleteStats, Maybe } from '@interfaces'
import { fetcher } from '@lib'

type UseStrava = () => SWRResponse<Maybe<AthleteStats>, unknown>

export const useStrava: UseStrava = () => {
  return useSWR<Maybe<AthleteStats>, unknown>('/api/strava', fetcher)
}
