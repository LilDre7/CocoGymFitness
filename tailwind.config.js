
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que la ruta esté configurada correctamente
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/assets/hero-photo.jpg')"
      }
    },
  },
  plugins: [],
};

