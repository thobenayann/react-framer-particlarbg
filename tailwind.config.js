/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: '#131424',
                secondary: '#393A47',
                accent: '#F13024',
            },
            backgroundImage: {
                explosion: 'url("/bg-explosion.png")',
                mro: 'url("/MRO_1.jpg")',
                circles: 'url("/bg-circles.png")',
                circleStar: 'url("/circle-star.svg")',
                site: 'url("/site-bg.svg")',
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, 'sans-serif'],
                sora: [`var(--font-sora)`, 'sans-serif'],
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    container: {
        padding: {
            DEFAULT: '15px',
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            );
        }),
    ],
};
