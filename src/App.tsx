import './styles/App.css';
import { Header } from './components/Header';
import { auth } from './config/Firebase';
import { Form } from './pages/Form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Home } from './pages/Home';

function App() {

  const [user] = useAuthState(auth);

  return (
    <>
      <Header />
      {user?.email === 'thisispratikkabade@gmail.com' ?
        <div>
          <Form />
        </div>
        :
        <Home />
      }
      <Form />
    </>
  );
}

export default App;