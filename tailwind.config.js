/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.6s ease-in both",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(.22,.41,.72,.7) both",
        "fade-in-down": "fade-in-down 0.6s cubic-bezier(.22,.41,.72,.7) both",
        "fade-in-left": "fade-in-left 0.6s cubic-bezier(.22,.41,.72,.7) both",
        "fade-in-right": "fade-in-right 0.6s cubic-bezier(.22,.41,.72,.7) both",
        
        "fade-out": "fade-out 0.6s ease-in-out",
        "fade-out-up": "fade-out-up 0.6s ease-in-out",
        "fade-out-down": "fade-out-down 0.6s ease-in-out",
        "fade-out-left": "fade-out-left 0.6s ease-in-out",
        "fade-out-right": "fade-out-right 0.6s ease-in-out",

        "slide-in-top": "slide-in-top 0.6s ease-in-out both",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-in-out both",
        "slide-in-left": "slide-in-left 0.6s ease-in-out both",
        "slide-in-right": "slide-in-right 0.6s ease-in-out both",
        "zoom-in": "zoom-in 0.6s ease-out both",
        "zoom-out": "zoom-out 0.6s ease-out",
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
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            tranform: "translateY(0px)"
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            tranform: "translateY(0px)"
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            tranform: "translateY(0px)"
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            tranform: "translateY(0px)"
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
        "fade-out-up": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)"
          },
        },
        "fade-out-down": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
        },
        "fade-out-left": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-20px)"
          },
        },
        "fade-out-right": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(20px)"
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
        "slide-in-left": {
          "0%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(.5)" },
        },
      },
    },
  },
  plugins: [],
};
