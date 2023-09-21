import React, { useState, useContext } from 'react'

import { cn } from '../../utils/tw-merge'

const enum THEME_COLOR {
  LIGHT = 'light',
  DARK = 'dark'
}

type ContextType = {
  theme: THEME_COLOR
  setTheme: (theme: THEME_COLOR) => void
}

const ThemeContext = React.createContext<ContextType>({
  theme: THEME_COLOR.DARK,
  setTheme: () => {}
})

function Comp1() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={cn('flex gap-4 items-center justify-center flex-col', {
      'text-white': theme === THEME_COLOR.DARK,
    })}>
      <h1>Current Theme: {theme}</h1>
    </div>
  )
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext)

  return (
    <div className='flex gap-4 items-center justify-center flex-row'>
      <button
        className='bg-gray-200 p-2 rounded hover:bg-gray-300 px-4 py-2'
        onClick={() => setTheme(THEME_COLOR.LIGHT)}
      >
        Light
      </button>
      <button
        className='bg-gray-800 p-2 rounded hover:bg-gray-900 text-white px-4 py-2'
        onClick={() => setTheme(THEME_COLOR.DARK)}
      >
        Dark
      </button>
    </div>
  )
}

export default function Context() {
  const [theme , setTheme ] = useState(THEME_COLOR.LIGHT)

  return (
    <div className={cn('flex gap-4 items-center justify-center flex-col p-8 rounded-md shadow', {
      'bg-gray-100': theme === THEME_COLOR.LIGHT,
      'bg-gray-600': theme === THEME_COLOR.DARK,
    })}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Comp1 />
        <Comp2 />
      </ThemeContext.Provider>
    </div>
  )
}
