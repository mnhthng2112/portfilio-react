module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      },
      colors: {
        'greyLight': '#f0f0f0',
        'greyMedium': '#f4f4f4',
        'greySemiBold': '#cdcdcd',
        'greyBold': '#a2a2a2',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}