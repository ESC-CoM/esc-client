import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './styles/reset.scss';
import CounterPage from './pages/counter';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<CounterPage />} />
          <Route path="/mymeeting" element={<CounterPage />} />
          <Route path="/chat" element={<CounterPage />} />
          <Route path="/mypage" element={<CounterPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
