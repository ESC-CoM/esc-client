import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import cx from 'classnames';
import Friend from 'src/components/shared/Friend';
import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';
import {
  useAcceptFriendsRequest,
  useDeleteFriend,
  useRejectFriendsRequest,
  useSendFriendsRequest,
} from 'src/hooks/api/friend';

import Button from '../../Button';
import FriendWithCheck from '../../FriendWithCheck';
import $ from './style.module.scss';

type Friend = { id: number; src: string; name: string };
type ListType = 'request' | 'myrequest' | 'add' | 'delete';
type MutationFunc = UseMutateFunction<
  res.DeleteFriend,
  AxiosError<unknown, any>,
  number,
  unknown
>;

type Props = {
  friends: Friend[];
  onSearchClick: (text: string) => void;
  type?: ListType;
  onSelectFriend?: (id: number) => void;
  selectedIDList?: number[];
};

export default function FriendsList(listProps: Props) {
  const { friends, onSearchClick, onSelectFriend, selectedIDList, type } =
    listProps;

  const { mutate: acceptRequest } = useAcceptFriendsRequest();
  const { mutate: rejectRequest } = useRejectFriendsRequest();
  const { mutate: addFriend } = useSendFriendsRequest();
  const { mutate: deleteFriend } = useDeleteFriend();

  const btnProps: {
    btnType: ListType;
    text: string;
    onClick?: MutationFunc;
  }[] = [
    { btnType: 'myrequest', text: '요청 취소' },
    { btnType: 'add', text: '친구 추가', onClick: addFriend },
    { btnType: 'delete', text: '친구 삭제', onClick: deleteFriend },
  ];

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
                <Button
                  contentText="수락"
                  className={$.btn}
                  onClick={() => acceptRequest(id)}
                />
                <Button
                  contentText="거절"
                  className={$.btn}
                  onClick={() => rejectRequest(id)}
                />
              </div>
            )}

            {btnProps.map(({ btnType, text, onClick }) => {
              return (
                type === btnType && (
                  <Button
                    key={btnType + text}
                    contentText={text}
                    className={cx($.btn, $['last-btn'])}
                    onClick={() => {
                      if (onClick) onClick(id);
                    }}
                  />
                )
              );
            })}
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
