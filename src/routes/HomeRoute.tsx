import { Routes, Route } from 'react-router-dom';
import MeetingDetail from 'src/pages/MeetingDetail';
import MeetingHome from 'src/pages/MeetingHome';
import MeetingApplyPage from 'src/pages/MeetingApply';

function HomeRoute() {
  return (
    <Routes>
      <Route index element={<MeetingHome />} />
      <Route path="detail" element={<MeetingDetail />} />
      <Route path="apply" element={<MeetingApplyPage />} />
    </Routes>
  );
}

export default HomeRoute;
