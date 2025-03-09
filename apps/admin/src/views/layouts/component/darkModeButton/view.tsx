'use client'

import React from 'react'
import DarkModeButtonModel from './viewModel'

export default function DarkModeButton(): React.ReactElement {
  const { setTheme } = DarkModeButtonModel()

  return (
    <div className="flex gap-2 py-4">
      <button
        type="button"
        className="border border-black rounded-lg p-2 mx-4"
        onClick={() => {
          setTheme('dark')
        }}
      >
        dark
      </button>
      <button
        type="button"
        className="border border-black rounded-lg p-2"
        onClick={() => {
          setTheme('light')
        }}
      >
        light
      </button>
    </div>
  )
}
