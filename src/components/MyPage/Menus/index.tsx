import { AiOutlineUnlock } from 'react-icons/ai';
import { GrNext } from 'react-icons/gr';
import { RiDoorOpenFill } from 'react-icons/ri';
import $ from './style.module.scss';

const MENUS = [
  {
    title: '서비스 이용약관',
    icon: <GrNext />,
  },
  {
    title: '버그 제보하기',
    icon: <GrNext />,
  },
  {
    title: '버전 정보 V1.0.1',
    icon: <GrNext />,
  },
  {
    title: '로그아웃',
    icon: <AiOutlineUnlock />,
  },
  {
    title: '탈퇴하기',
    icon: <RiDoorOpenFill />,
  },
];

export default function Menus() {
  return (
    <ul>
      {MENUS.map(({ title, icon }) => (
        <li className={$.menu} key={title}>
          <span className={$.title}>{title}</span>
          <div className={$['button-container']}>
            <button
              className={$.icon}
              type="button"
              aria-label={`${title} 페이지 상세보기`}
            >
              {icon}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
