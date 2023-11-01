/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cafe-primary": {
          400: "#111",
        },
        // ...
      },
    },
  },
  plugins: [],
};
