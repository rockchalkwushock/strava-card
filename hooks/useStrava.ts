import useSWR, { SWRResponse } from 'swr'

import { Maybe, Strava } from '@interfaces'
import { fetcher } from '@lib'

type UseStrava = () => SWRResponse<Maybe<Strava>, unknown>

export const useStrava: UseStrava = () => {
  return useSWR<Maybe<Strava>, unknown>('/api/strava', fetcher)
}
