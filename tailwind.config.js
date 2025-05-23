/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGold: '#b8860b',
        // primaryGold: '#FFCE7E',
      },
      backgroundColor: {
        // Cores Simples
        primaryGold: '#FFCE7E',
        dark: '#121417',
        darkBg: '#1E1E1E',
        darkFill: '#0D0F11',

      },
      backgroundImage: {
        'home_lol': "url('/bgSummerRift.png')",
        'home_white_lol': "url('/bgSummerRift_light.png')",
        'card_black': "url('/background/card_black.png')",
        'card_white': "url('/background/card_white.png')",
        'filChamp': "url('/background/pictureChamp.png')",
        'filID': "url('/background/pictureID.png')",
        
        // Cores Gradiente
        gradientLine: 'linear-gradient(90deg, #D29F53 0%, #B68A48 35%, #8A6837 65%, #6C522B 100%)',
        gradientLineFill: 'linear-gradient(-90deg, #0D0F11 0%, #E3AB5A 100%)',
        gradienButton: 'linear-gradient(90deg, #533C1E 0%, #3B2C18 100%)',
        gradienblacktransparent: 'linear-gradient(90deg,rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0) 100%);',
        gradienwhitetransparent: 'linear-gradient(90deg,rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0.35) 75%, rgba(255, 255, 255, 0) 100%);',
      },  
    },
  },
  plugins: [],
}

