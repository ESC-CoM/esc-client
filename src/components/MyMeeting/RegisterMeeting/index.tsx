import $ from './style.module.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyMeetingType } from 'src/types/myMeeting';
import MutiProfile from 'src/components/shared/MultiProfile';

export default function RegisterMeeting({
  title,
  content,
  friends,
  date,
}: MyMeetingType) {
  const navigate = useNavigate();
  const myMeetingRef = useRef<HTMLLIElement | null>(null);

  const getRequestList = () => {
    // 요청 리스트 fetch
    navigate('/mymeeting/register/detail');
  };

  return (
    <li className={$['my-meeting']} onClick={getRequestList} ref={myMeetingRef}>
      <MutiProfile
        profileList={friends.map(({ src, nickName }) => ({
          src,
          alt: nickName,
        }))}
        parentRef={myMeetingRef}
      />

      <div className={$['my-meeting-info']}>
        <div>
          <span className={$['title']}>{title}</span>
          <span className={$['date']}>•{date}</span>
        </div>
        <span className={$['content']}>{content}</span>
      </div>
    </li>
  );
}
