import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './app/store';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import './styles/reset.scss';
import CounterPage from './pages/counter';
import MeetingBoardPage from './pages/MeetingBoard';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MeetingBoardPage />} />
          <Route path="/mymeeting" element={<CounterPage />} />
          <Route path="/chat" element={<CounterPage />} />
          <Route path="/mypage" element={<CounterPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(App);
