import { Routes, Route } from 'react-router-dom';
import { MainSettingPage, DetailSettingPage } from 'src/pages/Setting';

export default function SettingRouter() {
  return (
    <Routes>
      <Route index element={<MainSettingPage />} />
      <Route path="detail" element={<DetailSettingPage />} />
    </Routes>
  );
}
