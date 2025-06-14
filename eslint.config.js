// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      // Base + TS + React recomendadas
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,

      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "no-shadow": "error",
      "@typescript-eslint/no-shadow": ["error"],
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",
      "no-empty-function": "error",
      "@typescript-eslint/no-empty-function": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "arrow-parens": ["error", "always"],
      "max-len": ["error", { code: 100 }],
      "no-trailing-spaces": "error",
      indent: ["error", 2],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  configPrettier,
]);
