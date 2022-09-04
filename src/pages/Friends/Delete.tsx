import { useState } from 'react';
import { FriendsList } from 'src/components/shared/Templates';
import { friendMocks } from 'src/__mocks__/friendMocks';

export default function DeleteFriends() {
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
      friends={friendMocks}
      onSearchClick={handleSearchClick}
      onSelectFriend={handleSelectFriend}
      selectedIDList={selectList}
    />
  );
}
