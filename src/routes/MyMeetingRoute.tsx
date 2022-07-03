import { Routes, Route } from 'react-router-dom';
import {
  RegisterPage,
  RequestPage,
  RegisterDetailPage,
} from 'src/pages/MyMeetingPages';

export default function MyMeetingRouter() {
  return (
    <Routes>
      <Route index element={<RegisterPage />} />
      <Route path="detail" element={<RegisterDetailPage />} />
      <Route path="request" element={<RequestPage />} />
    </Routes>
  );
}
