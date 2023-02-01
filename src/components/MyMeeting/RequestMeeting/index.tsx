import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';

import StateBadge from '../StateBadge';
import $ from './style.module.scss';

type Props = Pick<
  res.RequestMeetingListByMeContent,
  | 'boardId'
  | 'title'
  | 'requestParticipants'
  | 'updatedAt'
  | 'participantStatus'
> & {
  onDeleteClick: () => void;
};

function RequestMeeting(props: Props) {
  const { boardId, title, participantStatus, updatedAt } = props;
  const { requestParticipants, onDeleteClick } = props;
  const navigate = useNavigate();
  const profileList = useMemo(
    () =>
      requestParticipants
        .map(({ nickname, profileImage }) => ({
          src: profileImage,
          alt: nickname,
        }))
        .slice(0, 3),
    []
  );

  const getRequestedPosting = () => {
    navigate('/home/detail/' + boardId);
  };

  const handleRefuseRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDeleteClick();
  };

  return (
    <li className={$['request-meeting-info']} onClick={getRequestedPosting}>
      <MutiProfile profileList={profileList} />

      <div className={$.info}>
        <StateBadge state={participantStatus} />
        <strong className={$.comment}>{title}</strong>
        <span className={$.date}>{updatedAt}</span>
      </div>

      <div className={$['cancel-btn']}>
        <button className={$.btn} onClick={handleRefuseRequest}>
          신청 취소하기
        </button>
      </div>
    </li>
  );
}

export default memo(RequestMeeting);
