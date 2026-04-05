import styled from 'styled-components'

export const FormProprio = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Campo = styled.input`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--cor-principal);
    outline-color: var(--cor-principal);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 2px solid var(--cor-principal);
  height: 48px;
  padding: 0 32px;
  font-size: 16px;
  font-weight: bold;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0f1f42;
    border-color: #0f1f42;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`
