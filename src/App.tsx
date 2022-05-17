import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './styles/reset.scss';
import JoinRoute from './routes/JoinRoute';
import LoginPage from './pages/loginPage';
import AccountFinderRoute from './routes/AccountFinderRoute';
import HomeRoute from './routes/HomeRoute';
import MyMeetingPage from './pages/MyMeetingPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find/*" element={<AccountFinderRoute />} />
        <Route path="/home/*" element={<HomeRoute />} />
        <Route path="/mymeeting/*" element={<MyMeetingPage />} />
        <Route path="/chat" element={<h1>hello</h1>} />
        <Route path="/mypage" element={<h1>hello</h1>} />
        <Route path="/join/*" element={<JoinRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default hot(module)(App);
