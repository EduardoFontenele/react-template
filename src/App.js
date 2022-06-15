import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';
import history from './services/history';
import Nav from './components/Nav';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Nav />
        <Routes />
        <GlobalStyle />
        <ToastContainer
          autoClose={1000}
          position="top-right"
          className="toast-container"
        />
      </Router>
    </Provider>
  );
}
