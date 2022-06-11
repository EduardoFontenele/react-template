import { Router } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';
import history from './services/history';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
