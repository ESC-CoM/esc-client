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
  meeting: { id, title, gender, headCount, college, profiles },
}: Props) {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);

  const url = profiles[0];
  const collegesText = useExtractColleges(college);

  const lazyLoadCallback = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      const ref = imgRef.current;
      if (ref && ref.dataset.src) ref.src = ref.dataset.src;
      observer.unobserve(entry.target);
    }
  };

  const imgListRef = useIntersectObserver<HTMLDivElement>(lazyLoadCallback, {
    threshold: 0.1,
  });

  return (
    <li className={$.meeting} onClick={() => navigate(`./detail/${id}`)}>
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
        <span className={$.college}>{collegesText}</span>
        <span className={$.num}>
          {gender === 'women' ? '여자' : '남자'} {headCount}인
        </span>
      </div>
    </li>
  );
}
