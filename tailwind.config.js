/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.6s ease-in",
        "fade-out": "fade-out 0.6s ease-in-out",
        "slide-in-top": "slide-in-top 0.6s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-out",
        'zoom-in': 'zoom-in 0.6s ease-out'
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        }
      }
    },
  },
  plugins: [],
};
