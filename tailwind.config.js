module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans for Tailwind CSS usage in all JS/TS files
    './public/index.html', // Includes the index.html file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Example custom color (blue)
        secondary: '#f59e0b', // Example custom color (amber)
      },
      spacing: {
        '128': '32rem', // Custom spacing
      },
      borderRadius: {
        'xl': '1.25rem', // Custom border radius
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional plugin for form styling
    require('@tailwindcss/typography'), // Optional plugin for better typography
    require('@tailwindcss/forms'),
  ],
};
