module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this to match your project structure
    ],
    theme: {
      extend: {
          fontFamily: {
              sans: ['Roboto', 'sans-serif'],
          },
          gridTemeplateColumns: {
              '70/30' : '70% 28%'
          },
      },
    },
    plugins: [],
  };