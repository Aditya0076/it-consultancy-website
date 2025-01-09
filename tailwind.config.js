const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        darkCustomGradient: `
          linear-gradient(to bottom, #374151 0%, rgba(0,0,0,0.75) 100%),
          radial-gradient(at top center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 120%)
        `,
        lightCustomGradient:
          "linear-gradient(315deg, #2af598 0%, #009efd 100%)",
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
      colors: {
        "custom-gray": "#989898",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
