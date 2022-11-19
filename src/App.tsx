import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Form } from './pages/Form';

function App() {
  return (
    <>
      <Header />
      <Home />
      <span className='anchor pushDown' id='form'></span>
      <Form />
      <span className='anchor'></span>
    </>
  );
}

export default App;
