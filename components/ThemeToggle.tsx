import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'react-feather'

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  const onToggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <button
      aria-label="Toggle Color Theme"
      className="bg-indigo-100 border-0 cursor-pointer flex h-14 items-center justify-center mr-2 outline-none rounded-full top-0 w-14 z-20 focus:outline-none lg:mr-0"
      onClick={onToggleTheme}
      type="button"
    >
      {mounted && theme === 'dark' && (
        <Moon className="hover:text-amber-400 dark:hover:text-amber-300" />
      )}
      {mounted && theme === 'light' && (
        <Sun className="hover:text-amber-400 dark:hover:text-amber-300" />
      )}
    </button>
  )
}
