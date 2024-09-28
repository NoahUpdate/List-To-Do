/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				custom: " hsla(143, 44%, 55%, 0.6)",
				"custom-white": "rgba(255, 255, 255, 0.2)",
			},
		},
	},
	plugins: [],
};
