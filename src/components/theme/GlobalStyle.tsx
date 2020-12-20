import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      min-width: 320px;
      height: 100%;
      user-select: none;
    }

    *,
    *:before,
    *:after {
      border: 0;
      outline: 0;
      user-select: inherit;
      box-sizing: inherit;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section,
    summary {
      display: block;
    }

    body,
    dl,
    menu,
    ol,
    ul,
    fieldset,
    figure,
    form,
    button,
    input,
    select,
    textarea,
    dt,
    dd,
    p {
      margin: 0;
      padding: 0;
    }

    ul,
    ol {
      list-style: none;
    }

    fieldset {
      border: 0;
    }

    textarea {
      overflow: auto;
      vertical-align: top;
      resize: vertical;
    }

    audio,
    canvas,
    video {
      display: inline-block;
      width: 100%;
      vertical-align: middle;
    }

    a,
    a:active,
    a:hover,
    a:focus {
      outline: 0;
      -webkit-tap-highlight-color: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    abbr[title] {
      border-bottom: 1px dotted;
    }

    b,
    strong {
      font-family: inherit;
      font-weight: normal;
    }

    blockquote {
      margin: 1em 40px;
    }

    dfn {
      font-style: italic;
    }

    pre {
      margin: 1em 0;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    code,
    kbd,
    pre,
    samp {
      font-family: monospace, serif;
      font-size: 1em;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      position: relative;
      font-size: 100%;
      line-height: 0;
      vertical-align: baseline;
    }

    sup {
      top: 0;
    }

    sub {
      bottom: -0.25em;
    }

    img {
      border: 0;
    }

    svg:not(:root) {
      overflow: hidden;
    }

    button,
    input,
    select,
    textarea {
      border-radius: 0;
      font-family: inherit;
      font-size: 100%;
      vertical-align: middle;
      user-select: text;
      -webkit-tap-highlight-color: transparent;
    }

    button:focus,
    input:focus,
    select:focus,
    textarea:focus {
      outline: 0;
    }

    button,
    input {
      border: 0;
      line-height: normal;
    }

    button,
    select {
      text-transform: none;
    }

    button,
    html input[type='button'],
    input[type='reset'],
    input[type='submit'] {
      border: 0;
      outline: 0;
      background: none;
      cursor: pointer;
      -webkit-appearance: none;
    }

    input[type='date'] {
      background-color: transparent;
    }

    input::-moz-focus-inner,
    button::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

    button[disabled],
    html input[disabled] {
      cursor: default;
    }

    input[type='checkbox'],
    input[type='radio'] {
      padding: 0;
    }

    input[type='search'] {
      -webkit-appearance: textfield;
    }

    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    a {
      outline: 0;
      color: inherit;
      text-decoration: none;
    }

    th {
      font-weight: normal;
    }

    html,
    body {
      width: 100%;
      margin: 0;
      padding: 0;
      background-color: white;
      line-height: 1;
      -webkit-touch-callout: none;
      -webkit-font-smoothing: initial;
      -webkit-user-select: none;
      -webkit-text-size-adjust: none;
      -moz-osx-font-smoothing: auto;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
`;
