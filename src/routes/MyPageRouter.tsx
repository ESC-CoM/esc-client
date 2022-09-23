import { Route, Routes } from 'react-router-dom';
import Authentication from 'src/pages/MyPage/Authentication';
import Home from 'src/pages/MyPage/Home';

function MyPageRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="authentication" element={<Authentication />} />
    </Routes>
  );
}

export default MyPageRouter;
