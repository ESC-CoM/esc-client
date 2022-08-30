import { useEffect, useState } from 'react';

import FriendWithCheck from 'src/components/shared/FriendWithCheck';
import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';
import { friendMocks } from 'src/__mocks__/friendMocks';
import $ from './style.module.scss';

export default function DeleteFriends() {
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);

  useEffect(() => {
    // API 연동 전 테스트
    console.log(selectedFriends);
  }, [selectedFriends]);

  const handleClick = (targetId: number) => {
    const isExists = selectedFriends.includes(targetId);
    if (isExists) {
      setSelectedFriends((pre) => pre.filter((id) => id !== targetId));
      return;
    }
    setSelectedFriends((pre) => [...pre, targetId]);
  };

  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <Search />
      </div>
      <ul>
        {friendMocks.map(({ src, name, id }) => (
          <li key={id} className={$['friend-bar']}>
            <FriendWithCheck
              {...{ src, name }}
              isVertical={false}
              isChecked={selectedFriends.includes(id)}
              handleClick={() => handleClick(id)}
            />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
