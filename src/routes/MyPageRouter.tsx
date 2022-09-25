import { Route, Routes } from 'react-router-dom';
import { Authentication, Home, Select } from 'src/pages/MyPage';

function MyPageRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="authentication" element={<Authentication />} />
      <Route path="select" element={<Select />} />
    </Routes>
  );
}

export default MyPageRouter;
