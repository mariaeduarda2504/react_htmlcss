import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Card = styled.div`
  div {
    background-color: ${colors.primary};
    border: 0.2rem solid ${colors.black};
    border-radius: 0.5rem;
    padding: 0.4rem;
    margin: 0.5rem;
    h3, h4 {
      margin-bottom: 0.5rem;
    }
    div {
      display: flex;
      span {
        background-color: ${colors.third};
        border-radius: 0.5rem;
        padding: 0.4rem;
        margin: 0 0.4rem 0 0;
      }
    }
  }
`