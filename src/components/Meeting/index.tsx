import { useState } from 'react';
import { MeetingType } from '../../types/meeting';
import style from './style.module.scss';

interface Props {
  meeting: MeetingType;
}

export default function Meeting({ meeting }: Props) {
  const { kind, college, gender, num } = meeting;
  const [ isClicked, setClicked ] = useState(false);

  return (
    <li className={style.meeting}>
      <div
        className={style.meetingInfo}
        onClick={() => setClicked((state) => !state)}
      >
        <span className={style.kind}>{kind}</span>
        <span className={style.college}>{college.join(', ')}</span>
        <span className={style.num}>
          {gender} {num}명
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
