import { Route, Routes } from 'react-router-dom';
import { NoticeDetail, NoticeHome } from 'src/pages/Notice';

export default function NoticeRouter() {
  return (
    <Routes>
      <Route index element={<NoticeHome />} />
      <Route path="detail" element={<NoticeDetail />} />
    </Routes>
  );
}
