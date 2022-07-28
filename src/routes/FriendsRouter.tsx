import { Routes, Route } from 'react-router-dom';
import { Friends, FriendsDetail } from 'src/pages/Friends';

function FriendsRouter() {
  return (
    <Routes>
      <Route index element={<Friends />} />
      <Route path="detail" element={<FriendsDetail />} />
    </Routes>
  );
}

export default FriendsRouter;
