/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./components/**/*.{ts,tsx}",
    "./contexts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1216px',
      },
      spacing: {
        'page': '1.5rem',      // 24px - mobile (px-6)
        'page-md': '3rem',     // 48px - tablet/desktop (px-12)
      },
    },
  },
  plugins: [],
};
