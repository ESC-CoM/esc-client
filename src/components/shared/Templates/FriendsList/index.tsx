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

type ListType = 'request' | 'myrequest' | 'add' | 'delete';
type MutationFunc = UseMutateFunction<
  res.DeleteFriend,
  AxiosError<unknown, any>,
  string,
  unknown
>;

type Props = {
  friends: res.Friend[] | res.SearchedFriend['data'];
  onSearchClick: (text: string) => void;
  type?: ListType;
  onSelectFriend?: (id: string) => void;
  selectedIDList?: string[];
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

  const isSelected = (id: string) => {
    if (!selectedIDList?.length) return false;
    return selectedIDList.includes(id);
  };

  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <Search onSearchClick={onSearchClick} />
      </div>
      <ul>
        {friends.map(({ id, profile, nickName, friend }, index) => (
          <li key={`${nickName}${index}`} className={$['friend-bar']}>
            {onSelectFriend && (
              <FriendWithCheck
                {...{ src: profile, name: nickName }}
                isVertical={false}
                isChecked={isSelected(id)}
                handleClick={() => onSelectFriend(id)}
              />
            )}

            {!onSelectFriend && (
              <Friend
                {...{ src: profile, name: nickName }}
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
                type === btnType &&
                !friend && (
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
