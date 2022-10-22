import { friendMocks } from 'src/__mocks__/friendMocks';
import { FriendsList } from 'src/components/shared/Templates';
import { useSearch } from 'src/hooks';
import { useFriendsList, useFriendsRequests } from 'src/hooks/api/friend';

export default function FriendsListPage() {
  const path = location.pathname;
  const kind = useSearch('kind');
  const { data: friendsList } = useFriendsList();
  const { data: friendsRequests } = useFriendsRequests();

  return (
    <>
      {path === '/friends/list' && kind === 'myfriends' && (
        <FriendsList
          friends={friendMocks}
          onSearchClick={(text) => {
            console.log(text);
          }}
        />
      )}
      {path === '/friends/list' && kind === 'request' && (
        <FriendsList
          type="request"
          friends={friendMocks}
          onSearchClick={(text) => console.log(text)}
        />
      )}
    </>
  );
}
