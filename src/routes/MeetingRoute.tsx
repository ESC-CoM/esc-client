import { Route, Routes } from 'react-router-dom';
import { MeetingApply, MeetingDetail, MeetingHome } from 'src/pages/Meeting';

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
