import { Route, Routes } from 'react-router-dom';
import { MeetingDetail, MeetingHome } from 'src/pages/Meeting';
import { MeetingApply, MeetingRegister } from 'src/pages/Meeting';

function HomeRoute() {
  return (
    <Routes>
      <Route index element={<MeetingHome />} />
      <Route path="detail/:boardId" element={<MeetingDetail />} />
      <Route path="apply" element={<MeetingApply />} />
      <Route path="register" element={<MeetingRegister />} />
    </Routes>
  );
}

export default HomeRoute;
