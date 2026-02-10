import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'chat-bg': '#212121',
        'sidebar-bg': '#0d0d0d',
        'input-bg': '#2f2f2f',
        'input-border': '#424242',
        'text-primary': '#ffffff',
        'text-secondary': '#8e8e8e',
        'hover-bg': '#2f2f2f',
      },
    },
  },
  plugins: [],
};

export default config;
