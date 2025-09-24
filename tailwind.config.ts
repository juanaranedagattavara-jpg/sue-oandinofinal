import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sa': {
          'primary': '#0E5E6F',    // azul andino profundo
          'accent': '#7FB069',     // verde regenerativo
          'sand': '#D9C8B4',       // tierra clara
          'ink': '#1C1C1E',        // texto
          'cloud': '#F5F6F7',      // fondo suave
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      }
    },
  },
  plugins: [],
}
export default config
