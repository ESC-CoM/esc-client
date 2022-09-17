import $ from './style.module.scss';
import { MyMeetingRequestType } from 'src/types/myMeeting';
import { useIntersectObserver } from 'src/hooks';
import { useMemo, useRef } from 'react';
import MutiProfile from 'src/components/shared/MultiProfile';

export default function RequestMeeting({
  comment,
  requestedInfo,
  date,
  state,
}: MyMeetingRequestType) {
  const requestRef = useRef<HTMLLIElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const profileList = useMemo(
    () =>
      requestedInfo
        .map(({ nickName, profileImg }) => ({
          src: profileImg,
          alt: nickName,
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

  return (
    <li className={$['request-meeting-info']} ref={requestRef}>
      <MutiProfile profileList={profileList} parentRef={requestRef} />

      <div className={$['info']}>
        <span className={$['title']}>{comment}</span>
        {state && <span className={$['state']}>거절됨</span>}
        <div>
          <span className={$['date']}>{date}</span>
        </div>
      </div>

      <div className={$['cancel-btn']}>
        <button className={$['btn']}>신청 취소하기</button>
      </div>
    </li>
  );
}
