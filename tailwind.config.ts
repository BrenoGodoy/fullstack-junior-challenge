import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
      'montserrat': ['montserrat', 'serif']
    },
    extend: {
      screens: {
        'custom-sm': '640px',
        'custom-md': '768px',
        'custom-lg': '1124px',
        'custom-xl': '1280px',
        'custom-2xl': '1480px',
        'custom-3xl': '1920px',
      },
      colors: {
        custom: {
          primary: {
            "50": "#FFEEE8",
            "100": "#FED1BB",
            "200": "#FDBB95",
            "300": "#FCA26E",
            "400": "#FB8D4D",
            "500": "#F38160",
            "600": "#E36141",
            "700": "#D04427",
            "800": "#A4331A",
            "900": "#7A2514",
          },
          secondary: {
            "50": "#FFFBE5",
            "100": "#FFF0B3",
            "200": "#FFE876",
            "300": "#FFD026",
            "400": "#FFBA08",
            "500": "#F0B70D",
            "600": "#D9A22F",
            "700": "#B97920",
            "800": "#9F5B11",
            "900": "#7D4410",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
