import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  ul {
    margin: 16px 0;
    padding-left: 20px;

    li {
      margin-bottom: 8px;
      color: #555;
      line-height: 1.6;
    }
  }
`

export const Titulo = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: var(--cor-principal);
  margin-bottom: 16px;
  border-bottom: 2px solid var(--cor-principal);
  padding-bottom: 12px;
`

export const Link = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  color: #fff;
  background-color: var(--cor-principal);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #0f1f42;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.98);
  }
`
