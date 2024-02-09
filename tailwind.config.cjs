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
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      grey: {
        10: "#272727",
        20: "#3b3b3b",
        30: "#5d5d5d",
        40: "#818181",
        50: "#9d9d9d",
        60: "#b4b4b4",
        70: "#c3c3c3",
        80: "#cfcfcf",
        90: "#dbdbdb",
      },
      crystal: {
        10: "#002c2d",
        20: "#004344",
        30: "#00686a",
        40: "#009093",
        50: "#25aeb1",
        60: "#59c4c8",
        70: "#7cd1d4",
        80: "#9fdadc",
        90: "#bfe1e2",
      },
    },
    extend: {},
  },
  plugins: [],
};
