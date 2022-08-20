import { Routes, Route } from 'react-router-dom';
import { DeleteFriends, Friends, FriendsDetail } from 'src/pages/Friends';

function FriendsRouter() {
  return (
    <Routes>
      <Route index element={<Friends />} />
      <Route path="detail" element={<FriendsDetail />} />
      <Route path="delete" element={<DeleteFriends />} />
    </Routes>
  );
}

export default FriendsRouter;
