import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled'; //used { } cz Continer was not exported as default
import GlobalStyles from './components/styles/Global.styled'; //not used { } cz GlobalStyles was exported as default

const theme = {
  colors: {
    header: '#ebfbff',
    body: 'fff',
    footer: "#003333"
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
