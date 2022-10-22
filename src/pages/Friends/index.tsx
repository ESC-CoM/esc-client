import { useSearch } from 'src/hooks';

import Friends from './Main';

export default function FriendsListPage() {
  const path = location.pathname;
  const kind = useSearch('kind');

  return (
    <>
      {path === '/friends/list' && kind === 'myfriends' && <Friends />}
      {path === '/friends/list' && kind === 'request' && <Friends />}
    </>
  );
}
