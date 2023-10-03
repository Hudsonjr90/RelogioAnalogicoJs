import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-400: #D4FF6F;
        --primary-500: #D0FF61;
        --primary-600: #BDE858;
        --primary-700: #ACD350;

        --white: #FFFFFF;

        --gray-50: #F8F8F8;
        --gray-100: #F7F7F7;
        --gray-200: #E7E7E7;
        --gray-300: #A5A5A5;
        --gray-400: #616161;
        --gray-500: #272727;
        --gray-600: #222222;
        --gray-700: #1E1E1E;
        --gray-800: #161616;
        --gray-900: #131313;
        --gray-950: #111111;
    }

    html, body {
        scroll-behavior: smooth;
    }

    &::-webkit-scrollbar {
        width: 0.75rem;
        padding-right: 0.25rem;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background: var(--primary300);
    }

    .App {
        width: 100%;
        height: 100vh;
        background: var(--gray-900);

        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        color: var(--gray-200);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    footer {
        position: fixed;
        right: 50px;
        bottom: 40px;

        p {
            font-weight: 500;
            color: var(--white);
            text-decoration: none;
            margin-right: 70px;

            &:hover {
                font-weight: 700;
            }
        }
    }
`
