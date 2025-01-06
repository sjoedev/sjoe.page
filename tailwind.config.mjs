/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    fontFamily: {
      sans: ["Prompt", "system-ui", "sans-serif"],
      display: ["Jost", "system-ui", "sans-serif"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {},
  },
};
