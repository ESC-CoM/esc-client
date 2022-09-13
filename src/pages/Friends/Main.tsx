import { friendMocks } from 'src/__mocks__/friendMocks';
import { FriendsList } from 'src/components/shared/Templates';

export default function Friends() {
  return (
    <FriendsList
      friends={friendMocks}
      selectedIDList={[1]}
      onSearchClick={(text) => console.log(text)}
    />
  );
}
