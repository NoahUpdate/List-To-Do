/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'my-image':
          "url('/src/assets/images/kinich_frame.jpg')"
      },
      backgroundColor: {
        custom: ' hsla(143, 44%, 55%, 0.65)',
        'custom-xlight': ' hsla(143, 44%, 55%, 0.15)',
        'custom-light': ' hsla(143, 44%, 55%, 0.35)',
        'custom-bold': ' hsla(143, 44%, 55%, 0.85)',
        'custom-white': 'rgba(255, 255, 255, 0.5)'
      },
      borderColor: {
        custom: ' hsla(143, 44%, 55%, 0.65)',
        'custom-xlight': ' hsla(143, 86%, 80%, 0.15)',
        
        'custom-light': ' hsla(143, 44%, 55%, 0.35)',
        'custom-bold': ' hsla(143, 44%, 55%, 0.85)',
        'custom-white': 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  plugins: []
};
