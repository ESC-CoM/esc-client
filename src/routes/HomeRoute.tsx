import { Routes, Route } from 'react-router-dom';
import MeetingDetail from 'src/pages/Home/MeetingDetail';
import MeetingBoard from 'src/pages/Home';
import MeetingApplyPage from 'src/pages/Home/MeetingApply';

function HomeRoute() {
  return (
    <Routes>
      <Route index element={<MeetingBoard />} />
      <Route path="detail" element={<MeetingDetail />} />
      <Route path="apply" element={<MeetingApplyPage />} />
    </Routes>
  );
}

export default HomeRoute;
