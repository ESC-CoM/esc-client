import { FriendsList } from 'src/components/shared/Templates';
import { friendMocks } from 'src/__mocks__/friendMocks';

export default function Friends() {
  return (
    <FriendsList
      friends={friendMocks}
      selectedIDList={[1]}
      onSearchClick={(text) => console.log(text)}
    />
  );
}
