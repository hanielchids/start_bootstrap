/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      bg: {
        "hero-section": "url('bg-masthead.jpeg')",
      },
    },
  },
  plugins: [],
};
