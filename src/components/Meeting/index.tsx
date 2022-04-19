import { useEffect, useState, useRef } from 'react';
import { useExtractColleges, useWindowResize } from 'src/hooks';
import { MeetingType } from 'src/types/meeting';
import style from './style.module.scss';
import { AiFillCamera } from 'react-icons/ai';

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';
const LEFT_VALUE = 35;
const IMG_SIZE = 60;
const IMGLIST_SIZE = 344;

interface Props {
  meeting: MeetingType;
}

export default function Meeting({
  meeting: { kind, gender, profiles },
}: Props) {
  const imgListRef = useRef<HTMLUListElement | null>(null);
  const [imgListWidth, setImgListWidth] = useState(0);
  const colleges = useExtractColleges(profiles);
  const [width] = useWindowResize();
  let leftValue = -LEFT_VALUE;

  useEffect(() => {
    setImgListWidth(imgListRef.current?.clientWidth ?? IMGLIST_SIZE);
  }, [width]);

  return (
    <li className={style.meeting}>
      <div className={style.meetingInfo}>
        <span className={style.kind}>{kind}</span>
        <span className={style.college}>{colleges.join(', ')}</span>
        <span className={style.num}>
          {gender} {profiles.length}명
        </span>
      </div>
      <ul className={style.imageList} ref={imgListRef}>
        {profiles.map(({ url }, i) => {
          const isOverFlow = leftValue + LEFT_VALUE + IMG_SIZE >= imgListWidth;
          if (isOverFlow) return <></>;
          return (
            <li
              key={i + url}
              style={{
                left: `${(leftValue += LEFT_VALUE)}px`,
                width: IMG_SIZE,
                height: IMG_SIZE,
              }}
              className={style.profileImg}
            >
              <img
                src={url}
                alt="익명"
                width={IMG_SIZE}
                height={IMG_SIZE}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            </li>
          );
        })}
        <li
          style={{
            left: leftValue,
            width: IMG_SIZE,
            height: IMG_SIZE,
            lineHeight: `${IMG_SIZE + 7}px`,
          }}
          className={style.profileBtn}
        >
          <AiFillCamera />
        </li>
      </ul>
    </li>
  );
}
