import { memo, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';
import { useIntersectObserver } from 'src/hooks';

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
  const {
    boardId,
    title,
    participantStatus,
    updatedAt,
    requestParticipants,
    onDeleteClick,
  } = props;
  const navigate = useNavigate();
  const requestRef = useRef<HTMLLIElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
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

  const lazyLoadCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const targetBox = entries[0];
    if (targetBox.isIntersecting) {
      imgRefs.current.forEach((img) => {
        if (img && img.dataset.src) img.src = img.dataset.src;
      });
      observer.unobserve(targetBox.target);
    }
  };

  useIntersectObserver<HTMLLIElement>(
    { threshold: 0.1 },
    requestRef,
    lazyLoadCallback
  );

  const getRequestedPosting = () => {
    navigate('/home/detail/' + boardId);
  };

  const handleRefuseRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDeleteClick();
  };

  return (
    <li
      className={$['request-meeting-info']}
      ref={requestRef}
      onClick={getRequestedPosting}
    >
      <MutiProfile profileList={profileList} parentRef={requestRef} />

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
