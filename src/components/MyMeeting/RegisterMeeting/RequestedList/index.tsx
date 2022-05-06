import $ from './style.module.scss';
import { useIntersectObserver } from 'src/hooks';
import { useRef } from 'react';

interface Props {
  comment: string;
  profileImg: string[];
  date: string;
}
const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

export default function RequestedList({ comment, profileImg, date }: Props) {
  const requestedMeetingRef = useRef<HTMLLIElement | null>(null);
  const imgListRef = useRef<HTMLUListElement | null>(null);
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
    <li className={$['request-meeting-info']} ref={requestedMeetingRef}>
      <ul className={$['info-list']} ref={imgListRef}>
        {profileImg.map((imgUri, index) => (
          <li key={imgUri} className={$['profile-img']}>
            <img
              data-src={imgUri}
              alt="profile-img"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              ref={(el) => (imgRefs.current[index] = el as HTMLImageElement)}
            />
          </li>
        ))}

        <li className={$['info']}>
          <span className={$['title']}>{comment}</span>
          <span className={$['date']}>{date}</span>
        </li>

        <li className={$['request-btn']}>
          <button className={$['btn']}>수락</button>
          <button className={$['btn']}>거절</button>
        </li>
      </ul>
    </li>
  );
}
