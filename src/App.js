import { Provider } from 'react-redux';
import './App.css';
import MainRouter from './routes/mainRouter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
