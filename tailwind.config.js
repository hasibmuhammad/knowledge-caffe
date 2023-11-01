/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cafe-primary": {
          400: "#111",
        },
        "cafe-secondary": {
          400: "rgba(17, 17, 17, 0.60)",
        },
        "cafe-read": {
          400: "rgba(96, 71, 236, 0.10)",
        },
        "cafe-bookmark": {
          400: "rgba(17, 17, 17, 0.05)",
        },
        // ...
      },
    },
  },
  plugins: [],
};
