import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        valentine: {
          pink: '#ff7ac8',
          red: '#ff4763',
          soft: '#ffd6e7',
          cream: '#fff5f8',
          ink: '#2a1c2b'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 71, 99, 0.35)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pop: {
          '0%': { transform: 'scale(0.7)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        bloom: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '70%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.9' },
          '100%': { transform: 'translateY(-120px) scale(1.25)', opacity: '0' }
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        pop: 'pop 300ms ease-out',
        shimmer: 'shimmer 6s linear infinite',
        bloom: 'bloom 900ms ease-out',
        floatUp: 'floatUp 900ms ease-out',
        wobble: 'wobble 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: [forms]
};
