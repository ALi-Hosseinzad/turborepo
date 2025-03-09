import { borderRadius } from './borderRadiuses'
import { boxShadow } from './boxShadows'
import { colors } from './colors'
import { gap } from './gaps'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './apps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius,
      gap,
      colors,
      boxShadow,
    },
  },
  plugins: [],
}
