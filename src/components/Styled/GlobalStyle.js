import { createGlobalStyle } from 'styled-components';
import env from '../../env.json';

const {
  transitionDuration,
  colors: { hoverColor, backgroundColor },
} = env;

export const GlobalStyle = createGlobalStyle`
    /* fonts */
    @font-face {
        font-family: 'San Francisco';
        src: url('../fonts/SFProDisplay-Regular.woff2') format('woff2'),
            url('../fonts/SFProDisplay-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'San Francisco';
        src: url('../fonts/SFProDisplay-Thin.woff2') format('woff2'),
            url('../fonts/SFProDisplay-Thin.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'San Francisco';
        src: url('../fonts/SFProDisplay-Semibold.woff2') format('woff2'),
            url('../fonts/SFProDisplay-Semibold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'San Francisco';
        src: url('../fonts/SFProDisplay-Bold.woff2') format('woff2'),
            url('../fonts/SFProDisplay-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    /* reset styles */
    :root {
        -webkit-box-sizing: border-box;
            box-sizing: border-box;
        /* fix place for scroll */
        /* scrollbar-gutter: stable; */
    }

        /* Document */
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    *,
    *::before,
    *::after {
        -webkit-box-sizing: inherit;
            box-sizing: inherit;
        border-style: solid;
        border-width: 0;
    }

     /* Sections */
    body {
        min-width: 320px;
        min-height: 100vh;
        margin: 0;
        background-color: #fff;
        font-family: 'San Francisco', Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        color: black;
        overflow-x: hidden;

    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${backgroundColor};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${hoverColor};
        border-radius: 100px;
    }

    main {
        display: block;
    }

    /* Vertical rhythm */
    p,
    table,
    blockquote,
    address,
    pre,
    iframe,
    form,
    figure,
    dl {
        margin: 0;
    }

    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
        margin: 0;
    }

    /* Lists (enumeration) */
    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Lists (definition) */
    dt {
        font-weight: bold;
    }

    dd {
        margin-left: 0;
    }

    /* Grouping content */
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        border-top-width: 1px;
        margin: 0;
        clear: both;
        color: inherit;
    }

    pre {
        font-family: monospace, monospace;
        font-size: inherit;
    }

    address {
        font-style: inherit;
    }

    /* Text-level semantics */
    a {
        background-color: transparent;
        text-decoration: none;
        color: inherit;
    }

    abbr[title] {
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: inherit;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    /* Replaced content */

    embed,
    object,
    iframe {
        vertical-align: bottom;
    }

    /* Forms */
    button,
    input,
    optgroup,
    select,
    textarea {
        -webkit-appearance: none;
            appearance: none;
        color: inherit;
        font: inherit;
        background: transparent;
        padding: 0;
        margin: 0;
        border-radius: 0;
        text-align: inherit;
        text-transform: inherit;
    }

    [type="checkbox"] {
        -webkit-appearance: checkbox;
            appearance: checkbox;
    }

    [type="radio"] {
        -webkit-appearance: radio;
            appearance: radio;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        cursor: pointer;
    }

    button:disabled,
    [type="button"]:disabled,
    [type="reset"]:disabled,
    [type="submit"]:disabled {
        cursor: default;
    }

    :-moz-focusring {
        outline: auto;
    }

    select:disabled {
        opacity: inherit;
    }

    option {
        padding: 0;
    }

    fieldset {
        margin: 0;
        padding: 0;
        min-width: 0;
    }

    legend {
        padding: 0;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    label[for] {
        cursor: pointer;
    }

    /* Interactive */
    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    [contenteditable]:focus {
        outline: auto;
    }

    /* Tables */
    table {
        border-color: inherit;
    }

    caption {
        text-align: left;
    }

    td,
    th {
        vertical-align: top;
        padding: 0;
    }

    th {
        text-align: left;
        font-weight: bold;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        /* aspect-ratio: attr(width) / attr(height); */
    }

    .visually-hidden {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0 !important;
        border: 0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
    }

    button,
    a {
        transition: color ${transitionDuration},
            background-color ${transitionDuration},
            border-color ${transitionDuration};
    }

    :active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
    }
    /*
    * компенсация смещения блоков при анимированном роутинге
    * из-за одновременного рендеринга 2-х DOM-элементов
    * в AnimatedRoutes в transition animated.div добавлен
    * стиль 'grid-area: 1/-1'
    */
    #root {
        display: grid;
    }
`;
