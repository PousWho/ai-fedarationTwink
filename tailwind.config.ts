import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			'aimy-black': '#000000',
  			'aimy-text-black': '#111111',
  			'aimy-text-white': '#F2F3FF',
  			'aimy-gray': '#d9d9d9',
  			'aimy-background': '#22273F',
  			'aimy-header-footer': '#222F5C',
  			'aimy-header-footer-light': '#2A3A6B',
  			'aimy-button-primary': '#332EC3',
  			'aimy-button-primary-hover': '#625CF6',
  			'aimy-button-primary-pressed': '#B7B4FF',
  			'aimy-button-secondary-hover': '#FFFFFF',
  			'aimy-button-secondary-pressed': '#FFFFFF',
  			'aimy-accent': '#61F1F0',
  			'aimy-tertiary': '#3EA5CB',
  			'aimy-quaternary': '#A5B2C3',
  			'aimy-purple': '#A057FF',
  			'aimy-error': '#EE2626',
  			'aimy-dropdown-default': '#ECEEF1',
  			'aimy-dropdown-hover': '#D1D9E5',
  			'aimy-dropdown-pressed': '#9BB1D0',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			bounded: [
  				'Bounded',
  				'sans-serif'
  			],
  			guidy: [
  				'Guidy',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			heading: [
  				'36px',
  				{
  					lineHeight: 'normal',
  					fontWeight: '400'
  				}
  			],
  			subheading: [
  				'32px',
  				{
  					lineHeight: '39.7px',
  					fontWeight: '400'
  				}
  			],
  			body: [
  				'24px',
  				{
  					lineHeight: 'normal',
  					fontWeight: '400'
  				}
  			],
  			text: [
  				'20px',
  				{
  					lineHeight: 'normal',
  					fontWeight: '400'
  				}
  			],
  			small: [
  				'16px',
  				{
  					lineHeight: 'normal',
  					fontWeight: '400'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
