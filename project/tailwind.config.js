/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      colors: {
        'space-dark': '#0a0a0f',
        'space-blue': '#1a1a2e',
        'space-purple': '#16213e',
        'neon-cyan': '#00ffff',
        'neon-purple': '#b300ff',
        'neon-pink': '#ff00ff',
        'star-white': '#ffffff',
        'cosmic-purple': '#4c1d95',
        'deep-space': '#030712',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
        'rocket-launch': 'rocket-launch 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #00ffff' },
          '100%': { boxShadow: '0 0 30px #00ffff, 0 0 40px #00ffff' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'rocket-launch': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-50px) rotate(-5deg)' },
          '50%': { transform: 'translateY(-100px) rotate(0deg)' },
          '75%': { transform: 'translateY(-50px) rotate(5deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        'nebula-gradient': 'radial-gradient(circle at 50% 50%, rgba(179, 0, 255, 0.3) 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
        'star-field': 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, #fff, transparent), radial-gradient(1px 1px at 90px 40px, #eee, transparent), radial-gradient(1px 1px at 130px 80px, #fff, transparent), radial-gradient(2px 2px at 160px 30px, #eee, transparent)',
      },
    },
  },
  plugins: [],
};