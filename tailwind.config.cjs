/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, Inter, sans-serif",
        {
          fontFeatureSettings: '"ss01", "ss02"',
        },
      ],
    },
    fontSize: {
      h1: [
        "3rem",
        {
          letterSpacing: "-0.12rem",
          fontWeight: "900",
        },
      ],
      h2: [
        "2.5rem",
        {
          letterSpacing: "-0.075rem",
          fontWeight: "900",
        },
      ],
      h3: [
        "2rem",
        {
          letterSpacing: "-0.06rem",
          fontWeight: "900",
        },
      ],
      h4: [
        "1.75rem",
        {
          letterSpacing: "-0.04375rem",
        },
      ],
      h5: [
        "1.5em",
        {
          letterSpacing: "-0.03rem",
        },
      ],
      body: [
        "1rem",
        {
          letterSpacing: "-0.015rem",
        },
      ],
      caption: [
        "0.875rem",
        {
          letterSpacing: "-0.00875rem",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
