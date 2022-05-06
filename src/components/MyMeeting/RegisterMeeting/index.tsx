import $ from './style.module.scss';
import { useRef, useState } from 'react';
import { requestList } from 'src/__mocks__/myMeeting';
import { useNavigate } from 'react-router-dom';
import { useIntersectObserver } from 'src/hooks';

interface Props {
  title: string;
  content: string;
  friends: string[];
  date: string;
}

type meetingInfo = {
  comment: string;
  profileImg: string[];
  date: string;
};

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

export default function RegisterMeeting({
  title,
  content,
  friends,
  date,
}: Props) {
  const navigate = useNavigate();
  const [requestedList, setRequestedList] = useState<meetingInfo[]>([]);
  const myMeetingRef = useRef<HTMLLIElement | null>(null);
  const imgListRef = useRef<HTMLUListElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  const getRequestList = () => {
    // 요청 리스트 fetch
    setRequestedList(requestList);
    navigate('/mymeeting/detail');
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
    // <>
    <li className={$['my-meeting']} onClick={getRequestList} ref={myMeetingRef}>
      <ul className={$['profile-img-list']} ref={imgListRef}>
        {friends.map((imgUri, index) => (
          <li className={$['profile-img']} key={`profile-img-${index}`}>
            <img
              data-src={imgUri}
              alt="friends"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              ref={(el) => (imgRefs.current[index] = el as HTMLImageElement)}
            />
          </li>
        ))}
      </ul>

      <div className={$['my-meeting-info']}>
        <span className={$['title']}>{title}</span>
        <span className={$['date']}>•{date}</span>
        <span className={$['content']}>{content}</span>
      </div>
    </li>
    // </>
  );
}
