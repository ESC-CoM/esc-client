import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExtractColleges, useIntersectObserver } from 'src/hooks';
import { MeetingType } from 'src/types/meeting';

import $ from './style.module.scss';

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

interface Props {
  meeting: MeetingType;
}

export default function Meeting({
  meeting: { title, gender, profiles },
}: Props) {
  const meetingRef = useRef<HTMLLIElement | null>(null);
  const imgListRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const colleges = useExtractColleges(profiles);
  const { url } = profiles[0];
  const navigate = useNavigate();

  const lazyLoadCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const targetBox = entries[0];
    if (targetBox.isIntersecting) {
      const ref = imgRef.current;
      if (ref && ref.dataset.src) ref.src = ref.dataset.src;
      observer.unobserve(targetBox.target);
    }
  };

  useIntersectObserver<HTMLLIElement>(
    { threshold: 0.1 },
    meetingRef,
    lazyLoadCallback
  );

  return (
    <li
      className={$.meeting}
      ref={meetingRef}
      onClick={() => navigate('./detail')}
    >
      <div className={$.profileImg} ref={imgListRef}>
        <img
          data-src={url}
          alt="익명"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          ref={imgRef}
        />
      </div>

      <div className={$.meetingInfo}>
        <span className={$.title}>{title}</span>
        <span className={$.college}>{colleges}</span>
        <span className={$.num}>
          {gender} {profiles.length}인
        </span>
      </div>
    </li>
  );
}
