import { useState, useRef, useEffect } from 'react';
import { useExtractColleges, useIntersectObserver } from 'src/hooks';
import { MeetingType } from 'src/types/meeting';
import style from './style.module.scss';
import cx from 'classnames';

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';
const IMG_SIZE = 60;

interface Props {
  meeting: MeetingType;
}

export default function Meeting({
  meeting: { title, gender, profiles },
}: Props) {
  const meetingRef = useRef<HTMLLIElement | null>(null);
  const imgListRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const [isImgClick, setIsImgClick] = useState(false);
  const colleges = useExtractColleges(profiles);
  let zIndex = profiles.length;

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
    meetingRef,
    lazyLoadCallback
  );

  return (
    <li className={style.meeting} ref={meetingRef}>
      <div className={style.meetingInfo}>
        <span className={style.title}>{title}</span>
        <span className={style.college}>{colleges}</span>
        <span className={style.num}>
          {gender} {profiles.length}인
        </span>
      </div>

      <ul className={style.imageList}>
        <div
          style={profiles.length === 1 ? { height: IMG_SIZE } : {}}
          ref={imgListRef}
        >
          <li
            className={cx(style.profileBtn, {
              [style.isClicked]: isImgClick,
            })}
            onClick={() => {
              if (meetingRef.current && meetingRef.current.clientWidth < 758)
                setIsImgClick(!isImgClick);
            }}
          >
            +
          </li>
          {profiles.map(({ url }, i) => {
            if (i < 4)
              return (
                <li
                  key={url}
                  className={style.profileImg}
                  style={{
                    zIndex: (zIndex -= 1),
                  }}
                >
                  <img
                    data-src={url}
                    alt="익명"
                    className={profiles.length === 1 ? style.alone : ''}
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                    ref={(el) => (imgRefs.current[i] = el as HTMLImageElement)}
                  />
                </li>
              );
          })}
        </div>
      </ul>
    </li>
  );
}
