import { useEffect, useState } from 'react';
import { useExtractColleges } from '../../hooks';
import { MeetingType } from '../../types/meeting';
import style from './style.module.scss';

interface Props {
  meeting: MeetingType;
}

export default function Meeting({ meeting }: Props) {
  const { kind, gender, profiles } = meeting;
  const [isClicked, setClicked] = useState(false);
  const colleges = useExtractColleges(profiles, meeting);

  return (
    <li className={style.meeting}>
      <ul>
        {profiles.map(({ url }, i) => (
          <li key={i + url}>
            <img src={url} alt="익명 이미지" width="50px" height="50px" />
          </li>
        ))}
      </ul>
      <div
        className={style.meetingInfo}
        onClick={() => setClicked((state) => !state)}
      >
        <span className={style.kind}>{kind}</span>
        <span className={style.college}>{colleges.join(', ')}</span>
        <span className={style.num}>
          {gender} {profiles.length}명
        </span>
      </div>
      {isClicked && (
        <div className={style.btnBox}>
          <button
            className={style.btn}
            type="button"
            aria-label="프로필 보기 버튼입니다."
          >
            프로필 보기
          </button>
          <button
            className={style.btn}
            type="button"
            aria-label="미팅 신청하기 버튼입니다."
          >
            신청하기
          </button>
        </div>
      )}
    </li>
  );
}
