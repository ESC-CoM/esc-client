import { hot } from 'react-hot-loader';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/Login';
import MyMeetingPage from './pages/MyMeetingPages';
import AccountFinderRoute from './routes/AccountFinderRoute';
import ChatRoute from './routes/ChatRoute';
import FriendsRoute from './routes/FriendsRoute';
import JoinRoute from './routes/JoinRoute';
import HomeRoute from './routes/MeetingRoute';
import MyPageRouter from './routes/MyPageRouter';
import NoticeRoute from './routes/NoticeRoute';
import SettingRoute from './routes/SettingRoute';

import '@styles/reset.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find/*" element={<AccountFinderRoute />} />
        <Route path="/home/*" element={<HomeRoute />} />
        <Route path="/mymeeting/*" element={<MyMeetingPage />} />
        <Route path="/chat/*" element={<ChatRoute />} />
        <Route path="/mypage/*" element={<MyPageRouter />} />
        <Route path="/join/*" element={<JoinRoute />} />
        <Route path="/setting/*" element={<SettingRoute />} />
        <Route path="/friends/*" element={<FriendsRoute />} />
        <Route path="/notice/*" element={<NoticeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default hot(module)(App);
