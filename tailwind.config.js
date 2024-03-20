module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
     ],
     theme: {
      extend: {
        colors: {
          primary: '#4f46e5', // A shade of purple
          secondary: '#fbbf24', // A shade of yellow
        },
        fontFamily: {
          'body': ['"Open Sans"', 'sans-serif'],
          'display': ['"Roboto"', 'sans-serif'],
        },
      },
    }, 
  plugins: [],
}