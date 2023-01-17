/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Neutral

				Almost_White: "hsl(0, 0%, 98%)",
				Medium_Gray: "hsl(0, 0%, 41%)",
				Almost_Black: "hsl(0, 0%, 8%)",
			},
			fontFamily: {
        sans:['Epilogue', 'sans-serif'],
      },
		},
	},
	plugins: [],
};
