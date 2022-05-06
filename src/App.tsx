import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './styles/reset.scss';
import MeetingBoardPage from './pages/MeetingBoard';
import JoinRoute from './routes/JoinRoute';
import LoginPage from './pages/loginPage';
import AccountFinderRauter from './routes/AccountFinderRoute';
import MyMeetingRoute from './routes/MyMeetingRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find/*" element={<AccountFinderRauter />} />
        <Route path="/home" element={<MeetingBoardPage />} />
        <Route path="/mymeeting/*" element={<MyMeetingRoute />} />
        <Route path="/chat" element={<h1>hello</h1>} />
        <Route path="/mypage" element={<h1>hello</h1>} />
        <Route path="/join/*" element={<JoinRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default hot(module)(App);
