import { useState } from 'react';
import { ChangeEventHandler } from 'react';
import FriendManager from 'src/components/Meeting/FriendManager';
import ContentBox from 'src/components/shared/ContentBox';
import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';
import Search from 'src/components/shared/Search';
import { useFriendStore } from 'src/store/useFriendStore';
import { MeetingTitle } from 'src/types/meeting';

import Input from '../../Input';
import $ from './style.module.scss';

type Props = {
  isApply?: boolean;
  title: string;
  handleClickBtn: (data: req.CreateMeeting) => void;
};

export default function MeetingApplyTemplate(applyProps: Props) {
  const { isApply, title, handleClickBtn } = applyProps;

  const { addedFriends } = useFriendStore((state) => state);
  const contentState = useState('');
  const [titleInput, setTitleInput] = useState('');

  const handleSearchClick = (text: string) => alert(text);

  const handleTitleInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setTitleInput(value);

  const handleClickRegisterBtn = () => {
    const data = {
      title: titleInput,
      content: contentState[0],
      headCount: addedFriends.length + 1,
      participants: addedFriends,
    };
    handleClickBtn(data);
  };

  const btnText = isApply ? '신청하기' : '등록하기';

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <div className={$.top}>
        <h2 className={$['sub-title']}>친구 추가하기</h2>
        <Search onSearchClick={handleSearchClick} />
      </div>

      <FriendManager />

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
