import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FriendsList } from 'src/components/shared/Templates';
import { useSearch } from 'src/hooks';
import { useFriendsList, useFriendsRequests } from 'src/hooks/api/friend';

export type Kind = 'myfriends' | 'request' | 'myrequest';
function useFriendData(kind: string | null) {
  if (kind === 'myfriends') return useFriendsList();
  return useFriendsRequests();
}

export default function FriendsListPage() {
  const kind = useSearch('kind');
  const router = useRouter();
  const path = router.pathname;
  const { data } = useFriendData(kind);
  const friendData = data?.data || [];

  useEffect(() => {
    if (!kind) {
      router.push('/friends?kind=myfriends');
    }
  }, []);

  if (path === '/friends' && kind === 'myfriends')
    return (
      <FriendsList
        friends={friendData}
        onSearchClick={(text) => {
          console.log(text);
        }}
      />
    );
  if (path === '/friends' && kind === 'request')
    return (
      <FriendsList
        type="request"
        friends={friendData}
        onSearchClick={(text) => console.log(text)}
      />
    );
  return null;
}
