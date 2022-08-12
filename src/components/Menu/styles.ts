import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  picture {
    svg {
      height: 6rem;
      width: 6rem;
      margin-right: 1rem;
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${colors.white};
      font-size: 1.3rem;
    }
  }
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.2em;
          color: ${colors.white};
        }
      }
    }
  }
`