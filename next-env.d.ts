/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  export interface ProcessEnv {
    // Node Environment Variables
    NODE_ENV: 'development' | 'production' | 'test'
    // Custom Environment Variables
    NEXT_PUBLIC_STRAVA_ATHLETE_ID: string
    STRAVA_CLIENT_ID: string
    STRAVA_CLIENT_SECRET: string
    STRAVA_REFRESH_TOKEN: string
  }
}
