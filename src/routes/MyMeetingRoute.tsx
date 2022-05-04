import { Routes, Route, Navigate } from 'react-router-dom';
import { MyMeetingPage, RegisterMeetingDetailPage } from 'src/pages/MyMeeting';

function MyMeetingRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to="/mymeeting/basic" />} />
      <Route path="basic" element={<MyMeetingPage />} />
      <Route path="detail" element={<RegisterMeetingDetailPage />} />
    </Routes>
  );
}

export default MyMeetingRoute;
