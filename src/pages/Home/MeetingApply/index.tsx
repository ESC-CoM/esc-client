import { PageLayout } from 'src/components/Layout';
import Search from 'src/components/Search';
import { friendMocks } from 'src/__mocks__/friendMocks';
import $ from './style.module.scss';
import { useState } from 'react';
import SelectFriend from 'src/components/SelectFriend';

export default function MeetingApplyPage() {
  const [addedList, setAddedList] = useState<number[]>([]);
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$['top']}>
        <h2>친구 추가하기</h2>
        <Search />
      </div>
      <ul className={$['friends-list']}>
        {friendMocks.map(({ src, name, isVertical }, id) => (
          <li
            key={src + name}
            className={$['friend']}
            onClick={() => setAddedList([...addedList, id])}
          >
            <SelectFriend {...{ src, name, isVertical }} />
          </li>
        ))}
      </ul>
      <ul className={$['added-friends']}></ul>
    </PageLayout>
  );
}
