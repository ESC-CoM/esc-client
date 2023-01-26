import Friend from 'src/components/shared/Friend';
import FriendWithCheck from 'src/components/shared/FriendWithCheck';
import { useFriendsList } from 'src/hooks/api/friend';
import { useFriendStore } from 'src/store/useFriendStore';

import $ from './style.module.scss';

export default function FriendManager() {
  const { data, isSuccess } = useFriendsList();
  const { addedFriends, handleAddedFriends } = useFriendStore((state) => state);

  const handleFriendClick = (id: number) => handleAddedFriends(id);

  const friendData = data?.data || [];
  const isNoFriendData = isSuccess && friendData.length === 0;
  const isChecked = (id: number) =>
    addedFriends.find((x) => x === id) !== undefined;

  return (
    <>
      <ul className={$['friends-list']}>
        {isNoFriendData ? (
          <span>친구 데이터가 존재하지 않습니다.</span>
        ) : (
          friendData.map(({ id, profile, nickName }) => (
            <li key={profile + nickName} className={$.friend}>
              <FriendWithCheck
                {...{ src: profile, name: nickName }}
                isVertical={false}
                isChecked={isChecked(+id)}
                handleClick={() => handleFriendClick(+id)}
              />
            </li>
          ))
        )}
      </ul>

      <div className={$.added}>
        <h2 className={$['sub-title']}>추가된 친구</h2>
        <ul className={$['added-friends']}>
          {!addedFriends.length ? (
            <span className={$['no-added']}>추가된 친구가 없습니다.</span>
          ) : (
            addedFriends.map((_, idx) => {
              const { profile, nickName } = friendData[idx];
              return (
                <li className={$['added-friends-li']} key={profile + nickName}>
                  <Friend {...{ src: profile, name: nickName }} isVertical />
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
}
