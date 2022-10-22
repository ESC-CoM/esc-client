import { useState } from 'react';
import { friendMocks } from 'src/__mocks__/friendMocks';
import { FriendsList } from 'src/components/shared/Templates';

export default function AddFriends() {
  const [selectList, setSelectList] = useState<number[]>([]);

  const handleSelectFriend = (id: number) => {
    const isExists = selectList.includes(id);
    if (isExists) {
      setSelectList((pre) => pre.filter((preID) => preID !== id));
      return;
    }
    setSelectList((pre) => [...pre, id]);
  };

  const handleSearchClick = (text: string) => alert(text);

  return (
    <FriendsList
      type="add"
      friends={friendMocks}
      onSearchClick={handleSearchClick}
    />
  );
}
