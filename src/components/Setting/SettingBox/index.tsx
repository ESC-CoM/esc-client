import $ from './style.module.scss';
import { useCallback, useState } from 'react';
import { Menu } from 'src/types/setting';
import Container from '../Container';
import getBarClassName from 'src/utils/getBarClassName';

export default function SettingBox() {
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const onNotificationClick = useCallback(
    () => setIsNotificationOn((pre) => !pre),
    [isNotificationOn]
  );

  const SETTING_MENU: Menu[] = [
    {
      title: '앱 설정',
      items: [
        {
          text: '푸시 알람',
          type: 'toggle',
          value: isNotificationOn,
          onClick: onNotificationClick,
        },
      ],
    },
    {
      title: '앱 정보',
      items: [
        {
          text: '서비스 이용 약관',
          type: 'link',
          to: './detail',
        },
        {
          text: '버전 정보 V1.0.1',
          type: 'link',
          to: './detail',
        },
        {
          text: '버그 제보',
          type: 'link',
          to: './detail',
        },
      ],
    },
    {
      title: '기타',
      items: [
        {
          text: '로그아웃',
          type: 'link',
          to: './detail',
        },
        {
          text: '회원탈퇴',
          type: 'link',
          to: './detail',
        },
      ],
    },
  ];

  return (
    <ul className={$.container}>
      {SETTING_MENU.map(({ title, items }) => (
        <li key={title}>
          <h2 className={$.title}>{title}</h2>
          <ul>
            {items.map((item, index) => {
              const barClassName = getBarClassName(index, items.length);
              return <Container key={item.text} {...{ item, barClassName }} />;
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}
