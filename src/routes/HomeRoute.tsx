import { Routes, Route, Navigate } from 'react-router-dom';
import MeetingDetail from 'src/pages/Home/MeetingDetail';
import MeetingBoard from '../pages/Home/MeetingBoard';

function HomeRoute() {
  return (
    <Routes>
      <Route index element={<MeetingBoard />} />
      <Route path="detail" element={<MeetingDetail />} />
    </Routes>
  );
}

export default HomeRoute;
