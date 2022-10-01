import { Route, Routes } from 'react-router-dom';
import {
  Authentication,
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
    </Routes>
  );
}

export default MyPageRouter;
