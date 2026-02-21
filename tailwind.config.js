export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'line-expand': {
          '0%': { transform: 'translateX(-50%) scaleX(0)' },
          '100%': { transform: 'translateX(-50%) scaleX(1)' },
        },
        'bubble': {
          '0%': { transform: 'translateY(0)', opacity: '0.3' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
      },
      animation: {
        'line-expand': 'line-expand 1s ease-out forwards',
        'bubble': 'bubble linear infinite',
      },
    },
  },
  plugins: [],
}
