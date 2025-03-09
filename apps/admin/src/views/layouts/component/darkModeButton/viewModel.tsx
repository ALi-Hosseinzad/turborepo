'use client'

import { useTheme } from 'next-themes'
import type { Dispatch, SetStateAction } from 'react'

interface ReturnType {
  theme?: string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function DarkModeButtonModel(): ReturnType {
  const { theme, setTheme } = useTheme()

  return { theme, setTheme }
}
