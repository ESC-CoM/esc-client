import { Routes, Route, Navigate } from 'react-router-dom';
import {
  PhoneAuthPage,
  EmailInputPage,
  MoreInfoPage1,
  MoreInfoPage2,
} from '../pages/Join';

function JoinRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to="/join/basic" />} />
      <Route path="basic/phone" element={<PhoneAuthPage />} />
      <Route path="basic/email" element={<EmailInputPage />} />
      <Route path="more1" element={<MoreInfoPage1 />} />
      <Route path="more2" element={<MoreInfoPage2 />} />
    </Routes>
  );
}

export default JoinRoute;
