import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                dark: {
                    1: '#17223B',
                    2: '#263859',
                    3: '#6B778D',
                    4: '#3D2C8D',
                },
                pink: {
                    1: '#FF6768',
                },
                sky: {
                    1: '#C9DDFF',
                    2: '#ECF0FF',
                    3: '#F5FCFF',
                },
                orange: {
                    1: '#03C4A1',
                },
                purple: {
                    1: '#830EF9',
                },
                yellow: {
                    1: '#F9A90E',
                },
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            backgroundImage: {
                hero: "url('/images/hero-background.webp')",
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
