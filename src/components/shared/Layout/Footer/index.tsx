import { IoChatbubbleEllipses } from '@react-icons/all-files/io5/IoChatbubbleEllipses';
import { IoChatbubbleEllipsesOutline } from '@react-icons/all-files/io5/IoChatbubbleEllipsesOutline';
import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline';
import { IoHeartSharp } from '@react-icons/all-files/io5/IoHeartSharp';
import { IoHome } from '@react-icons/all-files/io5/IoHome';
import { IoHomeOutline } from '@react-icons/all-files/io5/IoHomeOutline';
import { IoPerson } from '@react-icons/all-files/io5/IoPerson';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import cx from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './style.module.scss';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      icon: <IoHomeOutline />,
      active: <IoHome />,
      text: '홈',
      url: '/home',
    },
    {
      icon: <IoHeartOutline />,
      active: <IoHeartSharp />,
      text: 'MY 과팅',
      url: '/mymeeting',
      goto: '/mymeeting/register/basic',
    },
    {
      icon: <IoChatbubbleEllipsesOutline />,
      active: <IoChatbubbleEllipses />,
      text: '과팅챗',
      url: '/chat',
    },
    {
      icon: <IoPersonOutline />,
      active: <IoPerson />,
      text: '내 정보',
      url: '/mypage',
    },
  ];

  const handleClick = (url: string) => navigate(url);

  return (
    <footer className={style.footer}>
      <div className={style.menus}>
        {menus.map(({ icon, active, text, url, goto }) => (
          <div
            className={cx(style.menu, {
              [style.active]: location.pathname.match(url),
            })}
            key={text}
            onClick={() => handleClick(goto ? goto : url)}
          >
            <div className={style.icon}>
              {location.pathname.match(url) ? active : icon}
            </div>
            <span className={style.text}>{text}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
