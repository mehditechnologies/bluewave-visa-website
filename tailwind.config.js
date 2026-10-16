/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffe',
          300: '#7cc4fd',
          400: '#36a4fa',
          500: '#0c87eb',
          600: '#006bc9',
          700: '#0155a3',
          800: '#064985',
          900: '#0b3d6f',
          950: '#07274a',
        },
        navy: {
          800: '#0c1b33',
          900: '#071224',
          950: '#030a16',
        },
        cyan: {
          brand: '#00b4d8',
          accent: '#0077b6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Cabinet Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'wave-gradient': 'linear-gradient(135deg, #07274a 0%, #006bc9 50%, #00b4d8 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, #0f4c81 0%, #071a33 60%, #030a16 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
