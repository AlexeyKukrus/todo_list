import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier'; // Плагин Prettier
import prettierConfig from 'eslint-config-prettier'; // Конфигурация для Prettier

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier, // Подключаем плагин как объект
    },
  },
  pluginJs.configs.recommended, // Базовые правила JavaScript
  ...tseslint.configs.recommended, // Поддержка TypeScript
  pluginReact.configs.flat.recommended, // Поддержка React
  prettierConfig, // Отключение конфликтующих правил Prettier и ESLint
];
