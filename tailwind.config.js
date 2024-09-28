/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('/src/assets/images/kinich_frame.jpg')"
      },
      backgroundColor: {
        custom: ' hsla(143, 44%, 55%, 0.65)',
        'custom-white': 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  plugins: []
};
