/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: [
		{
			mytheme: {
				"primary": "#a991f7",
				"secondary": "#f6d860",
				"accent": "#37cdbe",
				"neutral": "#3d4451",
				"base-100": "#ffffff",
			},
		},
	],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
