import GlobalStyle from './styles'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>EBAC Jobs</h1>
      </Header>
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
