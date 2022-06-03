import $ from './style.module.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntersectObserver } from 'src/hooks';
import { MyMeetingType } from 'src/types/myMeeting';

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

export default function RegisterMeeting({
  title,
  content,
  friends,
  date,
}: MyMeetingType) {
  const navigate = useNavigate();
  const myMeetingRef = useRef<HTMLLIElement | null>(null);
  const imgListRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  const getRequestList = () => {
    // 요청 리스트 fetch
    navigate('/mymeeting/register/detail');
  };

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
    myMeetingRef,
    lazyLoadCallback
  );

  return (
    <li className={$['my-meeting']} onClick={getRequestList} ref={myMeetingRef}>
      <div className={$['profile-img-list']} ref={imgListRef}>
        {friends.map((imgUri, index) => (
          <img
            key={`${imgUri}-${index}`}
            data-src={imgUri}
            alt="friends"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            ref={(el) => (imgRefs.current[index] = el as HTMLImageElement)}
          />
        ))}
      </div>

      <div className={$['my-meeting-info']}>
        <div>
          <span className={$['title']}>{title}</span>
          <span className={$['date']}>•{date}</span>
        </div>
        <span className={$['content']}>{content}</span>
      </div>
    </li>
  );
}
