import { Routes, Route, Navigate } from 'react-router-dom';
import { BasicInfoPage, MoreInfoPage } from '../pages/Join';

function JoinRoute() {
  return (
    <Routes>
      <Route index element={<BasicInfoPage />} />
      <Route path="more" element={<MoreInfoPage />} />
    </Routes>
  );
}

export default JoinRoute;
