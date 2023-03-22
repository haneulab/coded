/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './packages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bmain: '#212426',
                gfrom: '#03fef8',
                gvia: '#00f2fe',
                gto: '#339cf8',
                wmain: '#f3f7f9',
            },
            maxWidth: {
                cutoff: '1280px',
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
