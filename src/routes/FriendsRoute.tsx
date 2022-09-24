import { Route, Routes } from 'react-router-dom';
import {
  AddFriends,
  DeleteFriends,
  Friends,
  FriendsDetail,
} from 'src/pages/Friends';

function FriendsRouter() {
  return (
    <Routes>
      <Route index element={<Friends />} />
      <Route path="detail" element={<FriendsDetail />} />
      <Route path="delete" element={<DeleteFriends />} />
      <Route path="add" element={<AddFriends />} />
    </Routes>
  );
}

export default FriendsRouter;
