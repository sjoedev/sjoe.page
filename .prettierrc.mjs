/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
