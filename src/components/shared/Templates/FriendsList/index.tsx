import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';
import Friend from 'src/components/shared/Friend';
import $ from './style.module.scss';
import FriendWithCheck from '../../FriendWithCheck';

type Friend = { id: number; src: string; name: string };

type Props = {
  friends: Friend[];
  onSearchClick: (text: string) => void;
  onSelectFriend?: (id: number) => void;
  selectedIDList?: number[];
};

export default function FriendsList({
  friends,
  onSearchClick,
  onSelectFriend,
  selectedIDList,
}: Props) {
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
            {onSelectFriend ? (
              <FriendWithCheck
                {...{ src, name }}
                isVertical={false}
                isChecked={isSelected(id)}
                handleClick={() => onSelectFriend(id)}
              />
            ) : (
              <Friend
                {...{ src, name }}
                isVertical={false}
                padding={10}
                paddingLeft={10}
              />
            )}
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
