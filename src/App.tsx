
import { Container } from './App.styled';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import './styles/global.scss';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Contact } from './pages/Contact';

function App() {
  
  return (
    <Container>
      <Header />
      <Home />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
