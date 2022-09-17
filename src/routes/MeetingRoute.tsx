import { Routes, Route } from 'react-router-dom';
import { MeetingHome, MeetingApply, MeetingDetail } from 'src/pages/Meeting';

function HomeRoute() {
  return (
    <Routes>
      <Route index element={<MeetingHome />} />
      <Route path="detail" element={<MeetingDetail />} />
      <Route path="apply" element={<MeetingApply />} />
    </Routes>
  );
}

export default HomeRoute;
