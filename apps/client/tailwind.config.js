/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@ostigan-tailwind/configs/tailwind/tailwind.config')],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '22px'],
        '2xs': ['10px', '20px'],
        '2xl': ['22px', '32px'],
        '3xl': ['24px', '36px'],
        '4xl': ['28px', '38px'],
      },
      screens: {
        xs: { min: '0px' },
        sm: { min: '768px' },
        md: { min: '1025px' },
        lg: { min: '1280px' },
        xl: { min: '1440px' },
      },
      colors: {
        'error-ffa6b11a': '#ffa6b11a',
        'gray-AEAEAE': '#AEAEAE',
        'gray-E5E5E5': '#E5E5E5',
      },
      fontFamily: {
        IRANSansXFaNum: ['var(--font-IRANSansXFaNum)'],
      },
    },
  },
}
