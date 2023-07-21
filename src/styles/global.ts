import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
}


:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}

body, textarea, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`
