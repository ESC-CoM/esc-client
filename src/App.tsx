import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './app/store';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import './styles/reset.scss';
import JoinRoute from './routes/JoinRoute';
import LoginPage from './pages/loginPage';
import AccountFinderRoute from './routes/AccountFinderRoute';
import HomeRoute from './routes/HomeRoute';
import MyMeetingRoute from './routes/MyMeetingRoute';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find/*" element={<AccountFinderRoute />} />
          <Route path="/home/*" element={<HomeRoute />} />
          <Route path="/mymeeting/*" element={<MyMeetingRoute />} />
          <Route path="/chat" element={<h1>hello</h1>} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/join/*" element={<JoinRoute />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(App);
