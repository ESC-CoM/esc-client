import { Navigate, Route, Routes } from 'react-router-dom';
import FriendsListPage from 'src/pages/Friends';
import AddFriends from 'src/pages/Friends/Add';
import DeleteFriends from 'src/pages/Friends/Delete';
import FriendsDetail from 'src/pages/Friends/detail';

function FriendsRouter() {
  return (
    <Routes>
      <Route index element={<Navigate to="./list?kind=myfriends" replace />} />
      <Route path="list" element={<FriendsListPage />} />
      <Route path="detail" element={<FriendsDetail />} />
      <Route path="delete" element={<DeleteFriends />} />
      <Route path="add" element={<AddFriends />} />
    </Routes>
  );
}

export default FriendsRouter;
