import { defineConfig } from 'eslint/config';

export default defineConfig({
	files: ['**/*.{js,mjs,cjs,jsx}'],
	plugins: ['react', 'react-hooks'],
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/react-in-jsx-scope': 'error',
		'react/prop-types': 'warn',
		'react/jsx-uses-react': 'error',
	},
});
