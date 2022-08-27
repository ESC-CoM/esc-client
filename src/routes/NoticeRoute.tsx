import { Routes, Route } from 'react-router-dom';
import { NoticeHome, NoticeDetail } from 'src/pages/Notice';

export default function NoticeRouter() {
  return (
    <Routes>
      <Route index element={<NoticeHome />} />
      <Route path="detail" element={<NoticeDetail />} />
    </Routes>
  );
}
