import * as React from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

type Props = AppProps & {}

const App: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
