/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				animateHeart: 'animateHeart 1.8s ease-in-out infinite',
			},
			keyframes: {
				animateHeart: {
					'0%': {
						transform: 'scale(1.0)',
					},
					'5%': {
						transform: 'scale(1.1)',
					},
					'15%': {
						transform: 'scale(1.0)',
					},
					'21%': {
						transform: 'scale(1.1)',
					},
					'50%': {
						transform: 'scale(1.0)',
					},
					'100%': {
						transform: 'scale(1.0)',
					},
				},
			},
		},
		plugins: [],
	},
}
