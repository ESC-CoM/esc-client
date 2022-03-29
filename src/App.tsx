import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './styles/reset.scss';
import CounterPage from './pages/counter';
import MeetingBoardPage from './pages/MeetingBoard';
import JoinPage from './routes/Join';
import { BasicInfoPage, MoreInfoPage } from './pages/Join';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MeetingBoardPage />} />
          <Route path="/mymeeting" element={<CounterPage />} />
          <Route path="/chat" element={<CounterPage />} />
          <Route path="/mypage" element={<CounterPage />} />
          <Route path="/basic" element={<BasicInfoPage />} />
          <Route path="/more" element={<MoreInfoPage />} />
          {/* <Route path="/join">
            <JoinPage />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
