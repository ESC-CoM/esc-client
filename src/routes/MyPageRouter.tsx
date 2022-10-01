import { Route, Routes } from 'react-router-dom';
import { Authentication, ChangePassword, Home, Select } from 'src/pages/MyPage';

function MyPageRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="authentication" element={<Authentication />} />
      <Route path="select" element={<Select />} />
      <Route path="change/password" element={<ChangePassword />} />
    </Routes>
  );
}

export default MyPageRouter;
