import { FriendsList } from 'src/components/shared/Templates';
import { useQueryRouter, useSearch } from 'src/hooks';
import { useSearchFriend } from 'src/hooks/api/friend';

export default function AddFriends() {
  const router = useQueryRouter('value');
  const value = useSearch('value') || '';
  const { data } = useSearchFriend(value);
  const friendsData = data?.data || [];

  const handleSearchClick = (text: string) => router(text);

  return (
    <FriendsList
      type="add"
      friends={friendsData}
      onSearchClick={handleSearchClick}
    />
  );
}
