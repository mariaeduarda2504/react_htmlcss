import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#9E00FF",
  secondary: "#C4C4C4",
  white: "#ffffff",
  black: "#000000",
}
