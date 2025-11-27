import next from "eslint-config-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  next(),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Your custom rules here
    },
  },
];
