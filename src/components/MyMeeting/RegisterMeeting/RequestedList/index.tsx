import $ from './style.module.scss';
import { useIntersectObserver } from 'src/hooks';
import { useMemo, useRef } from 'react';
import { MyMeetingRequestType } from 'src/types/myMeeting';
import MutiProfile from 'src/components/shared/MultiProfile';
import { useNavigate } from 'react-router-dom';

export default function RequestedList({
  comment,
  requestedInfo,
  date,
}: MyMeetingRequestType) {
  const navigate = useNavigate();
  const requestedMeetingRef = useRef<HTMLLIElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const profileList = useMemo(
    () =>
      requestedInfo
        .map(({ nickName, profileImg }) => ({ alt: nickName, src: profileImg }))
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

  const onClickRequestedPosting = () => {
    navigate('/home/detail');
  };

  const clickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  const clickRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <li
      className={$['requested-info']}
      ref={requestedMeetingRef}
      onClick={onClickRequestedPosting}
    >
      <MutiProfile profileList={profileList} parentRef={requestedMeetingRef} />

      <div className={$['info']}>
        <span className={$['comment']}>{comment}</span>
        <span className={$['date']}>{date}</span>
      </div>

      <div className={$['request-btn']}>
        <button className={$['btn']} onClick={clickAcceptBtn}>
          수락
        </button>
        <button className={$['btn']} onClick={clickRefuseBtn}>
          거절
        </button>
      </div>
    </li>
  );
}
