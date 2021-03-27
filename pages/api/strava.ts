import type { NextApiRequest, NextApiResponse } from 'next'

import { AthleteStats, Maybe } from '@interfaces'
import { getStrava } from '@lib'

export default async (
  _: NextApiRequest,
  res: NextApiResponse<Maybe<AthleteStats>>
) => {
  try {
    const response = await getStrava()
    // The endpoint will always respond with a 200
    // regardless if the Strava API requests fail.
    // The frontend will display UI conditionally
    // based on the data returned.
    return res.status(200).json(response)
  } catch (error) {
    throw new Error(error)
  }
}
