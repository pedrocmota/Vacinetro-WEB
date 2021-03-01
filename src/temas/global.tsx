import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 200ms, color 200ms;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100vw;
  }

  #root {
    width: 100vw;
    height:100vh;
  }

  .h1 {
    font-size: 2em;
    font-weight: bold;
    word-wrap: break-word;
    max-width: 100%;
  }

  .h2 {
    font-size: 1.5em;
    font-weight: bold;
    word-wrap: break-word;
    max-width: 100%;
  }

  .h3 {
    font-size: 1.17em;
    font-weight: bold;
    word-wrap: break-word;
    max-width: 100%;
  }

  .cutText {
    display: -webkit-box;
    max-height: 100px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;
  }

  .overflow {
    word-wrap: normal !important;
  }

  .react-toast-notifications__container {
    & > div {
      height: 60px !important;
      margin-bottom: 10px;
      .react-toast-notifications__toast {
        height: 100%;
        margin-bottom: 0px !important;
        .react-toast-notifications__toast__icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .react-toast-notifications__toast__content {
          display: flex;
          align-items: center;
          font-size: 18px;
        }
      }
    }
  }
`

export default GlobalStyle