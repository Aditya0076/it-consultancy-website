const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        customGradient: `
          linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%),
          radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%)
        `,
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
