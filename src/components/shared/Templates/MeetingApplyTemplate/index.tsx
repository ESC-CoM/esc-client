import ContentBox from 'src/components/shared/ContentBox';
import FooterButton from 'src/components/shared/FooterButton';
import Friend from 'src/components/shared/Friend';
import FriendWithCheck from 'src/components/shared/FriendWithCheck';
import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';
import { FriendType, MeetingTitle } from 'src/types/meeting';

import $ from './style.module.scss';

type Props = {
  isApply?: boolean;
  title: string;
  friendFetchData: FriendType[];
  addedList: number[];
  setAddedList: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function MeetingApplyTemplate(applyProps: Props) {
  const { isApply, title, friendFetchData, addedList, setAddedList } =
    applyProps;
  const handleFriendClick = (id: number) => {
    if (addedList.find((x) => x === id) === undefined)
      setAddedList([...addedList, id]);
    else setAddedList(addedList.filter((x) => x !== id));
  };

  const handleSearchClick = (text: string) => alert(text);

  const btnText = isApply ? '신청하기' : '등록하기';

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <div className={$['top']}>
        <h2 className={$['sub-title']}>친구 추가하기</h2>
        <Search onSearchClick={handleSearchClick} />
      </div>

      <ul className={$['friends-list']}>
        {friendFetchData.map(({ src, name }, id) => (
          <li key={src + name} className={$['friend']}>
            <FriendWithCheck
              {...{ src, name }}
              isVertical={false}
              isChecked={addedList.find((x) => x === id) !== undefined}
              handleClick={() => handleFriendClick(id)}
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

      <ContentBox {...{ title }} contentTitle={MeetingTitle.apply} />
      <FooterButton text={btnText} type="button" />
    </PageLayout>
  );
}
