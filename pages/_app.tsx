import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'
import { ThemeToggle } from '@components'

type Props = AppProps & {}

const App: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      // This needs to match what is being used in tailwind.config.js
      attribute="class"
      // What the default theme will be if:
      // 1. 'system' does not override it.
      // 2. a different theme is not found in localStorage.
      defaultTheme="light"
      // Look at what he user's system is set to and use that.
      enableSystem
      // The key that will put in localStorage.
      storageKey="strava-card-theme"
      // List of themes.
      themes={['light', 'dark']}
    >
      <div className="bg-indigo-300 flex flex-col min-h-screen min-w-screen text-gray-900 dark:bg-indigo-900">
        <div className="flex justify-end pt-4 px-4 w-full">
          <ThemeToggle />
        </div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
