import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReactHooks.configs.flat['recommended-latest'],
	pluginReactRefresh.configs.recommended,
	pluginPrettier,

	{
		languageOptions: { globals: globals.browser },
		rules: {
			// import * as React from 'react'; 不要
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
		},
	},
]);
