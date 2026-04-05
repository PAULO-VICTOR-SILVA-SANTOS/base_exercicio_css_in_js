import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  text-align: center;
  padding: 24px 0;

  h1 {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`
