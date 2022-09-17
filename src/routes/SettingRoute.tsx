import { Route, Routes } from 'react-router-dom';
import { DetailSettingPage, MainSettingPage } from 'src/pages/Setting';

export default function SettingRouter() {
  return (
    <Routes>
      <Route index element={<MainSettingPage />} />
      <Route path="detail" element={<DetailSettingPage />} />
    </Routes>
  );
}
