module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        gpt3: '#040C18',
        footer: '#031B34',
        paragraph: '#81AFDD',
        subtext: '#FF8A71',
        primarytext: '#81AFDD'
      },
      animation: {
        'scale-up-center':
          'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  plugins: []
}
