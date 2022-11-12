import { useEffect, useState } from 'react';
import { friendMocks } from 'src/__mocks__/friendMocks';
import { MeetingApplyTemplate } from 'src/components/shared/Templates';
import { FriendType } from 'src/types/meeting';

export default function MeetingRegisterPage() {
  const [friendFetchData, setFriendFetchData] = useState<FriendType[]>([]);
  const [addedFriendList, setAddedFriendList] = useState<number[]>([]);
  const title = '함께하고 싶다는 의사를 어필해주세요!';

  useEffect(() => {
    // TODO: fetch Data
    setFriendFetchData(
      friendMocks.map(({ profile, nickName }) => {
        return {
          src: profile,
          name: nickName,
        };
      })
    );
  }, []);

  return (
    <MeetingApplyTemplate
      setAddedFriendList={(friendsIDs) => setAddedFriendList(friendsIDs)}
      {...{ title, friendFetchData, addedFriendList }}
    />
  );
}
