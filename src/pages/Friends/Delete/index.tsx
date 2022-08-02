import { useEffect, useState } from 'react';
import FriendWithCheck from 'src/components/FriendWithCheck';
import { PageLayout } from 'src/components/Layout';
import Search from 'src/components/Search';
import { friendMocks } from 'src/__mocks__/friendMocks';
import $ from './style.module.scss';

export default function DeleteFriends() {
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);

  useEffect(() => {
    // API 연동 전 테스트
    console.log(selectedFriends);
  }, [selectedFriends]);

  const addSelectedFriends = (id: number) =>
    setSelectedFriends((pre) => [...pre, id]);

  const removeSelectedFriends = (id: number) =>
    setSelectedFriends((pre) => pre.filter((value) => value !== id));

  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <Search />
      </div>
      <ul>
        {friendMocks.map(({ src, name, id }) => (
          <li key={id} className={$['friend-bar']}>
            <FriendWithCheck
              {...{ id, src, name, addSelectedFriends, removeSelectedFriends }}
              isVertical={false}
              padding={10}
              paddingLeft={10}
            />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
