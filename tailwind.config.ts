import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
     
        'nsTsm': {'min':'359px', 'max': '767px'},
        // => @media (min-width: 359px) and (max-width: 767px) { ... }
        'mdup': {'min': '768px', 'max': '1023px'},
        
      },
    },
  },
  plugins: [],
}
export default config
