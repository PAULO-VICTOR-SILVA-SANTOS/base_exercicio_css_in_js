import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px;
  }
`

export default EstiloGlobal
