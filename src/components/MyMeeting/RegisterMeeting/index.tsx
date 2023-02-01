import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';
import { MyMeetingType } from 'src/types/myMeeting';

import Badge from '../Badge';
import $ from './style.module.scss';

function RegisterMeeting({
  kind,
  title,
  content,
  friends,
  date,
}: MyMeetingType) {
  const navigate = useNavigate();
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
    <li className={$['my-meeting']} onClick={getRequestList}>
      <MutiProfile profileList={profileList} />

      <div className={$['my-meeting-info']}>
        <div className={$['info-heading']}>
          <Badge text={kind} />
          <span className={$.date}>{date}</span>
        </div>
        <span className={$.title}>{title}</span>
        <span className={$.content}>{content}</span>
      </div>
    </li>
  );
}

export default memo(RegisterMeeting);
