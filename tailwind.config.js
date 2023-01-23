/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        // Primary
        cl_cyan: "hsl(179, 62%, 43%)",
        cl_brightYellow: "hsl(71, 73%, 54%)",
        // Neutral
        cl_lightGray: "hsl(204, 43%, 93%)",
        cl_grayishBlue: "hsl(218, 22%, 67%)",
        cl_lightCyan: "hsl(179, 50%, 62%)",
      },
    },
  },
  plugins: [],
};
