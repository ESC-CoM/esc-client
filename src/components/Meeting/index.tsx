import { useEffect, useState, useRef } from 'react';
import { useExtractColleges, useWindowResize } from 'src/hooks';
import { MeetingType } from 'src/types/meeting';
import style from './style.module.scss';

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';
const MARGIN_VALUE = 20;
const IMG_SIZE = 60;
const IMGLIST_SIZE = 344;

interface Props {
  meeting: MeetingType;
}

export default function Meeting({
  meeting: { title, gender, profiles },
}: Props) {
  const meetingRef = useRef<HTMLLIElement | null>(null);
  const imgListRef = useRef<HTMLUListElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const [imgListWidth, setImgListWidth] = useState(IMGLIST_SIZE);
  const [imgSize, setImgSize] = useState(IMG_SIZE);
  const [imgNum, setImgNum] = useState(0);
  const colleges = useExtractColleges(profiles);
  const [width] = useWindowResize();
  let zIndex = profiles.length;

  useEffect(() => {
    // setImgNum(imgRefs.current.filter((x) => x !== null).length);
    setImgListWidth(imgListRef.current?.clientWidth ?? IMGLIST_SIZE);
    setImgSize(imgListRef.current?.clientHeight ?? IMG_SIZE);
  }, [width]);

  useEffect(() => {
    const option = {};
    const trigger = (
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

    const observer = new IntersectionObserver(trigger, option);
    if (meetingRef.current) observer.observe(meetingRef.current);
  }, []);

  return (
    <li className={style.meeting} ref={meetingRef}>
      <div className={style.meetingInfo}>
        <span className={style.title}>{title}</span>
        <span className={style.college}>{colleges}</span>
        <span className={style.num}>
          {gender} {profiles.length}인
        </span>
      </div>

      <ul className={style.imageList} ref={imgListRef}>
        <div style={profiles.length === 1 ? { height: IMG_SIZE } : {}}>
          {profiles.map(({ url }, i) => {
            const isOverFlow =
              imgSize + i * (imgSize - MARGIN_VALUE) >= imgListWidth;
            if (!isOverFlow)
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
