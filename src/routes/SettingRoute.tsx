import { Routes, Route } from 'react-router-dom';
import { BasicSettingPage, DetailSettingPage } from 'src/pages/Setting';

export default function SettingRouter() {
  return (
    <Routes>
      <Route index element={<BasicSettingPage />} />
      <Route path="detail" element={<DetailSettingPage />} />
    </Routes>
  );
}
