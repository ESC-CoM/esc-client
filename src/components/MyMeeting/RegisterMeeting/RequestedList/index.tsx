import $ from './style.module.scss';
import { useIntersectObserver } from 'src/hooks';
import { useRef } from 'react';
import { MyMeetingRequestType } from 'src/types/myMeeting';

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

export default function RequestedList({
  comment,
  profileImg,
  date,
}: MyMeetingRequestType) {
  const requestedMeetingRef = useRef<HTMLLIElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

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

  return (
    <li className={$['requested-info']} ref={requestedMeetingRef}>
      <div className={$['info-list']}>
        {profileImg.map((imgUri, index) => (
          <img
            key={`${imgUri}-${index}`}
            data-src={imgUri}
            alt="profile-img"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            ref={(el) => (imgRefs.current[index] = el as HTMLImageElement)}
          />
        ))}
      </div>

      <div className={$['info']}>
        <span className={$['comment']}>{comment}</span>
        <span className={$['date']}>{date}</span>
      </div>

      <div className={$['request-btn']}>
        <button className={$['btn']}>수락</button>
        <button className={$['btn']}>거절</button>
      </div>
    </li>
  );
}
