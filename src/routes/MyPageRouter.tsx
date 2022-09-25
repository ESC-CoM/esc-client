import { Route, Routes } from 'react-router-dom';
import {
  Authentication,
  ChangeEmail,
  ChangePassword,
  ChangePhone,
  Home,
  Select,
} from 'src/pages/MyPage';

function MyPageRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="authentication" element={<Authentication />} />
      <Route path="select" element={<Select />} />
      <Route path="change/password" element={<ChangePassword />} />
      <Route path="change/phone" element={<ChangePhone />} />
      <Route path="change/email" element={<ChangeEmail />} />
    </Routes>
  );
}

export default MyPageRouter;
