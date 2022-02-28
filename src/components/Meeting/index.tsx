import { useEffect } from 'react';
import { MeetingType } from '../../types/meeting';
import style from './style.module.scss';

interface Props {
  meeting: MeetingType;
}

export default function Meeting({ meeting }: Props) {
  const { kind, college, gender, num } = meeting;

  return (
    <li className={style.meeting}>
      <table className={style.meetingInfo}>
        <tr>
          <span className={style.kind}>{kind}</span>
          <td className={style.text}>{college}</td>
          <td className={style.num}>
            {gender} {num}명
          </td>
        </tr>
      </table>
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
    </li>
  );
}
