import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles/GlobalStyles'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
`

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
