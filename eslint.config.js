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
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,

      "no-console": "error", // Proíbe o uso de console.log e similares
      "no-debugger": "error", // Proíbe o uso de debugger
      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ], // Proíbe variáveis não utilizadas, exceto se começarem com _
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-shadow": "error", // Proíbe variáveis com mesmo nome em escopos diferentes
      "@typescript-eslint/no-shadow": ["error"], // Mesma regra acima, mas para TS
      eqeqeq: ["error", "always"], // Exige uso de === e !==
      "prefer-const": "error", // Prefere const ao invés de let quando possível
      "no-var": "error", // Proíbe o uso de var
      "no-empty-function": "error", // Proíbe funções vazias
      "@typescript-eslint/no-empty-function": "error", // Mesma regra acima, mas para TS
      semi: ["error", "always"], // Exige ponto e vírgula no final das linhas
      quotes: ["error", "single"], // Exige aspas simples
      "comma-dangle": ["error", "always-multiline"], // Exige vírgula no final de listas multilinha
      "object-curly-spacing": ["error", "always"], // Exige espaço dentro de chaves de objetos
      "arrow-parens": ["error", "always"], // Exige parênteses em arrow functions
      "max-len": ["error", { code: 100 }], // Limita linhas a 100 caracteres
      "no-trailing-spaces": "error", // Proíbe espaços em branco no final das linhas
      indent: ["error", 2], // Exige indentação de 2 espaços
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
        },
      ], // Ordena imports por grupos

      "react/react-in-jsx-scope": "off", // Não exige React no escopo em arquivos JSX (React 17+)
      "react/jsx-uses-react": "off", // Não exige uso explícito de React em JSX
      "react/jsx-uses-vars": "error", // Garante que variáveis usadas em JSX sejam marcadas como usadas
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto", // Garante que o final de linha seja consistente
        }
      ], // Integra o Prettier como regra de formatação
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  configPrettier,
]);
