import type { Config } from 'tailwindcss';

export default {
	content: [],
	theme: {
		extend: {
			spacing: {
				'8xl': '90rem',
				'9xl': '100rem',
				'10xl': '110rem',
			},
		},
	},
	plugins: [],
} satisfies Config;
