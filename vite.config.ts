import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

const publish_name = 'bookshelf';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [react()],
	base: `${mode === 'production' ? publish_name : ''}/`,
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['vitest.setup.ts'],
		coverage: {
			enabled: true,
			include: ['src/**/*.{ts,tsx}'],
		},
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
}));
