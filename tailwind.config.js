module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			main: { regular: '#392F5A', dark: '#191923', variation: '#3B413C' },
			accent: { regular: '#92140C', light: '#FFA987', lighter: '#F7EBE8' },
			accent2: { regular: '#677D7B', light: '#C1CFC6' },
			dark: '#111112',
			light: '#EEF1F9',
		},
		fontFamily: {
			title: ['Merriweather', 'sans-serif'],
			subtitle: ['Dosis', 'serif'],
			content: ['Overpass', 'serif'],
			menu: ['Titillium Web', 'serif'],
			logo: ['Major Mono Display', 'sans-serif'],
			cardtitle: ['Dosis', 'serif'],
			cardbody: ['Overpass', 'serif'],
		},
	},
	variants: {
		extend: {
			backgroundColor: ['hover'],
		},
	},
	plugins: [],
}
