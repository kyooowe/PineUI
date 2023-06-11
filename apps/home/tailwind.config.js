/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'node_modules/preline/dist/*.js',
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('preline/plugin')
	],
}

