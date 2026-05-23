module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D9E75',
        secondary: '#EF9F27',
        background: '#F8F6F0',
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'full': '9999px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}