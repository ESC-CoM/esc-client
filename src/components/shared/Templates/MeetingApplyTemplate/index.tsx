import { useState } from 'react';
import { ChangeEventHandler } from 'react';
import ContentBox from 'src/components/shared/ContentBox';
import FooterButton from 'src/components/shared/FooterButton';
import Friend from 'src/components/shared/Friend';
import FriendWithCheck from 'src/components/shared/FriendWithCheck';
import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';
import { FriendType, MeetingTitle } from 'src/types/meeting';

import Input from '../../Input';
import $ from './style.module.scss';

type Props = {
  isApply?: boolean;
  title: string;
  friendFetchData: FriendType[];
  addedFriendList: number[];
  setAddedFriendList: (friendsIDs: number[]) => void;
  handleClickBtn: (data: req.CreateMeeting) => void;
};

export default function MeetingApplyTemplate(applyProps: Props) {
  const {
    isApply,
    title,
    friendFetchData,
    addedFriendList,
    setAddedFriendList,
    handleClickBtn,
  } = applyProps;

  const handleFriendClick = (id: number) => {
    if (addedFriendList.find((x) => x === id) === undefined)
      setAddedFriendList([...addedFriendList, id]);
    else setAddedFriendList(addedFriendList.filter((x) => x !== id));
  };

  const handleSearchClick = (text: string) => alert(text);

  const btnText = isApply ? '신청하기' : '등록하기';
  const contentState = useState('');

  const handleClickRegisterBtn = () => {
    const data = {
      title: titleInput,
      content: contentState[0],
      headCount: addedFriendList.length + 1,
      participants: addedFriendList,
    };

    handleClickBtn(data);
  };

  const [titleInput, setTitleInput] = useState('');
  const handleTitleInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setTitleInput(value);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <div className={$.top}>
        <h2 className={$['sub-title']}>친구 추가하기</h2>
        <Search onSearchClick={handleSearchClick} />
      </div>

      <ul className={$['friends-list']}>
        {friendFetchData.map(({ src, name }, id) => (
          <li key={src + name} className={$.friend}>
            <FriendWithCheck
              {...{ src, name }}
              isVertical={false}
              isChecked={addedFriendList.find((x) => x === id) !== undefined}
              handleClick={() => handleFriendClick(id)}
            />
          </li>
        ))}
      </ul>

      <div className={$.added}>
        <h2 className={$['sub-title']}>추가된 친구</h2>
        <ul className={$['added-friends']}>
          {!addedFriendList.length ? (
            <span className={$['no-added']}> </span>
          ) : (
            addedFriendList.map((addedFriendIdx) => {
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

      <ContentBox
        {...{ title, contentState }}
        contentTitle={MeetingTitle.apply}
      >
        <Input
          className={$['input-title']}
          type="text"
          proptype="controlled"
          value={titleInput}
          onChange={handleTitleInput}
          placeholder="제목 입력"
        />
      </ContentBox>
      <FooterButton
        text={btnText}
        type="button"
        onClick={handleClickRegisterBtn}
      />
    </PageLayout>
  );
}
