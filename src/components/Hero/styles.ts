import styled from 'styled-components'

export const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    z-index: 1;
    color: #eee;
    text-align: left;
    max-width: 1024px;
    width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 16px;
  }
`

export const HeroTitle = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`
