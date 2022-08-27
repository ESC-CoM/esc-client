import { useEffect, useState } from 'react';
import { PageLayout } from 'src/components/Layout';
import Search from 'src/components/Search';
import { friendMocks, meetingApplyContent } from 'src/__mocks__/friendMocks';
import $ from './style.module.scss';
import SelectFriend from 'src/components/SelectFriend';
import { FriendType, MeetingTitle } from 'src/types/meeting';
import Friend from 'src/components/Friend';
import ContentBox from 'src/components/ContentBox';

export default function MeetingApplyPage() {
  const [friendFetchData, setFriendFetchData] = useState<FriendType[]>([]);
  const [addedList, setAddedList] = useState<number[]>([]);
  const { title, content } = meetingApplyContent;

  useEffect(() => {
    // TODO: fetch Data
    setFriendFetchData(
      friendMocks.map(({ src, name }) => {
        return {
          src,
          name,
        };
      })
    );
  }, []);

  const handleFriendClick = (id: number) => {
    if (addedList.find((x) => x === id) === undefined)
      setAddedList([...addedList, id]);
    else setAddedList(addedList.filter((x) => x !== id));
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <div className={$['top']}>
        <h2 className={$['sub-title']}>친구 추가하기</h2>
        <Search />
      </div>
      <ul className={$['friends-list']}>
        {friendFetchData.map(({ src, name }, id) => (
          <li
            key={src + name}
            className={$['friend']}
            onClick={() => handleFriendClick(id)}
          >
            <SelectFriend
              {...{ src, name }}
              isVertical={false}
              isSelected={addedList.find((x) => x === id) !== undefined}
            />
          </li>
        ))}
      </ul>
      <div className={$['added']}>
        <h2 className={$['sub-title']}>추가된 친구</h2>
        <ul className={$['added-friends']}>
          {!addedList.length ? (
            <span className={$['no-added']}> </span>
          ) : (
            addedList.map((addedFriendIdx) => {
              const { src, name } = friendFetchData[addedFriendIdx];
              return (
                <li className={$['added-friends-li']} key={src + name}>
                  <Friend {...{ src, name }} isVertical />
                </li>
              );
            })
          )}
        </ul>
      </div>
      <ContentBox {...{ title, content }} contentTitle={MeetingTitle.apply} />
      <footer className={$['apply-btn']}>
        <button type="button">신청하기</button>
      </footer>
    </PageLayout>
  );
}
