import cx from 'classnames';
import Friend from 'src/components/shared/Friend';
import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';

import Button from '../../Button';
import FriendWithCheck from '../../FriendWithCheck';
import $ from './style.module.scss';

type Friend = { id: number; src: string; name: string };

type Props = {
  friends: Friend[];
  onSearchClick: (text: string) => void;
  type?: 'request' | 'myrequest';
  onSelectFriend?: (id: number) => void;
  selectedIDList?: number[];
};

export default function FriendsList(listProps: Props) {
  const { friends, onSearchClick, onSelectFriend, selectedIDList, type } =
    listProps;
  const isSelected = (id: number) => {
    if (!selectedIDList?.length) return false;
    return selectedIDList.includes(id);
  };

  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <Search onSearchClick={onSearchClick} />
      </div>
      <ul>
        {friends.map(({ src, name, id }, index) => (
          <li key={`${name}${index}`} className={$['friend-bar']}>
            {onSelectFriend && (
              <FriendWithCheck
                {...{ src, name }}
                isVertical={false}
                isChecked={isSelected(id)}
                handleClick={() => onSelectFriend(id)}
              />
            )}
            {!onSelectFriend && (
              <Friend
                {...{ src, name }}
                isVertical={false}
                padding={10}
                paddingLeft={10}
              />
            )}
            {type === 'request' && (
              <div className={$['btn-box']}>
                <Button contentText="수락" className={$.btn} />
                <Button contentText="거절" className={$.btn} />
              </div>
            )}
            {type === 'myrequest' && (
              <Button
                contentText="요청 취소"
                className={cx($.btn, $['last-btn'])}
              />
            )}
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
