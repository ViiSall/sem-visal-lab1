import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module", // Using ES modules
      globals: {
        process: "readonly",
        module: "readonly",
        require: "readonly",
        console: "readonly",
        describe: "readonly",
        it: "readonly",
      },
    },
    files: ["**/*.js"],
    rules: {},
  },
];
