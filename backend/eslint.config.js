import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // ✅ Add Node.js globals like process, __dirname, etc.
        ...globals.jest 
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      js
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
]);
