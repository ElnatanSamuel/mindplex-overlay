/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        text: {
          primary: "#E3E1E1",
          secondary: "#1F1F1F",
        },
        chat: {
          primary: "#1F1F1F",
          secondary: "#BFC6FA",
        },
      },
    },
  },
  plugins: [],
};
