import styled from 'styled-components'

export const Container = styled.ul`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  list-style: none;
  padding: 0 16px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 16px;
  }
`
