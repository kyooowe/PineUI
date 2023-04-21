/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                green: {
                    600: '#10B981',
                    700: '#047857',
                },
                yellow: {
                    600: '#FBBF24',
                    700: '#D97706',
                },
                blue: {
                    600: '#3B82F6',
                    700: '#1D4ED8',
                },
                red: {
                    600: '#EF4444',
                    700: '#B91C1C',
                },
            },
            transitionProperty: {
                width: '72',
                'padding-left': '70',
                height: ['72', 'screen']
            },
        },
    },
    plugins: [],
}
