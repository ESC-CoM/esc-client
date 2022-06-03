import { Routes, Route } from 'react-router-dom';
import MeetingDetail from 'src/pages/Home/MeetingDetail';
// import RegisterPage from 'src/pages/Home/RegisterPage';
import MeetingBoard from 'src/pages/Home/MeetingBoard';

function HomeRoute() {
  return (
    <Routes>
      <Route index element={<MeetingBoard />} />
      <Route path="detail" element={<MeetingDetail />} />
      {/* <Route path="register" element={<RegisterPage />} /> */}
    </Routes>
  );
}

export default HomeRoute;
