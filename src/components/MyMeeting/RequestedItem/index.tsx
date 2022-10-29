import { memo, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';
import { useIntersectObserver } from 'src/hooks';
import { useCreateChatRoom } from 'src/hooks/api/chat';
import { MyMeetingRequestType } from 'src/types/myMeeting';

import $ from './style.module.scss';

function RequestedItem({
  boardId,
  title,
  requestedInfo,
  date,
}: MyMeetingRequestType) {
  const navigate = useNavigate();
  const requestedMeetingRef = useRef<HTMLLIElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const profileList = useMemo(
    () =>
      requestedInfo
        .map(({ nickName, src }) => ({ alt: nickName, src: src }))
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
    requestedMeetingRef,
    lazyLoadCallback
  );

  const getProfileInfo = () => {
    navigate('/home/detail');
  };

  const { mutate } = useCreateChatRoom();

  const handleAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const boardInfo = {
      name: title,
      participants: requestedInfo.map(({ id }) => id),
    };
    console.log(boardInfo);
    mutate({ boardId, body: boardInfo });
  };
  const handleRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <li
      className={$['requested-info']}
      ref={requestedMeetingRef}
      onClick={getProfileInfo}
    >
      <MutiProfile profileList={profileList} parentRef={requestedMeetingRef} />

      <div className={$.info}>
        <span className={$.title}>{title}</span>
        <span className={$.date}>{date}</span>
      </div>

      <div className={$['request-btn-wrapper']}>
        <button className={$['accept-btn']} onClick={handleAcceptBtn}>
          수락
        </button>
        <button className={$['refuse-btn']} onClick={handleRefuseBtn}>
          거절
        </button>
      </div>
    </li>
  );
}

export default memo(RequestedItem);
