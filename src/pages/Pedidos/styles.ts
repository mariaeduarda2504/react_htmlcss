import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.black};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 1.7rem;
  }
  form {
    width: 70%;
    background-color: ${colors.primary};
    border: 0.2rem solid ${colors.black};
    border-radius: 1rem;
    padding: 1rem;
    div {
      display: grid;
      grid-template-columns: 6rem auto;
      margin: 0.5rem 0;
      label {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      input {
        font-size: 1rem;
        border: 0;
        border-radius: 0.2rem;
        padding: 0.5rem;
      }
      textarea {
        font-size: 1rem;
        border: 0;
        border-radius: 0.2rem;
        padding: 0.5rem;
        height: 8rem;
      }
    }
    p {
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
      }
    }
  }
`
