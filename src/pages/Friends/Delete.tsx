import { FriendsList } from 'src/components/shared/Templates';
import { useFriendsList } from 'src/hooks/api/friend';

export default function DeleteFriends() {
  const { data } = useFriendsList();
  const friendData = data?.data || [];

  const handleSearchClick = (text: string) => alert(text);

  return (
    <FriendsList
      type="delete"
      friends={friendData}
      onSearchClick={handleSearchClick}
    />
  );
}
