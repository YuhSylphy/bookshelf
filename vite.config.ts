import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const publish_name = 'bookshelf';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [react()],
	base: `${mode === 'production' ? publish_name : ''}/`,
	test: {
		environment: 'jsdom',
		setupFiles: ['vitest.setup.ts'],
	},
}));
