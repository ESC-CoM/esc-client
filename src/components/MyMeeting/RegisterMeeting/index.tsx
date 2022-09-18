import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';
import { MyMeetingType } from 'src/types/myMeeting';
import $ from './style.module.scss';
import Badge from '../Badge';

export default function RegisterMeeting({
  kind,
  title,
  content,
  friends,
  date,
}: MyMeetingType) {
  const navigate = useNavigate();
  const myMeetingRef = useRef<HTMLLIElement | null>(null);
  const profileList = useMemo(
    () =>
      friends
        .map(({ src, nickName }) => ({
          src,
          alt: nickName,
        }))
        .slice(0, 3),
    []
  );

  const getRequestList = () => {
    // 요청 리스트 fetch
    navigate('/mymeeting/register/detail');
  };

  return (
    <li className={$['my-meeting']} onClick={getRequestList} ref={myMeetingRef}>
      <MutiProfile profileList={profileList} parentRef={myMeetingRef} />

      <div className={$['my-meeting-info']}>
        <Badge text={kind} />
        <div>
          <span className={$.title}>{title}</span>
          <span className={$.date}>•{date}</span>
        </div>
        <span className={$.content}>{content}</span>
      </div>
    </li>
  );
}
