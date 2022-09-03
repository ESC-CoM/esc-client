import { useState } from 'react';
import { PageLayout } from 'src/components/shared/Layout';
import SettingBox from 'src/components/shared/SettingBox';
import { Menu } from 'src/types/setting';
import $ from './main.module.scss';

export default function MainSettingPage() {
  const [isNotificationOn, setIsNotificationOff] = useState(true);

  const SETTING_MENU: Menu[] = [
    {
      title: '앱 설정',
      items: [
        {
          text: '푸시 알람',
          type: 'toggle',
          value: isNotificationOn,
          onClick: () => setIsNotificationOff((pre) => !pre),
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
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <SettingBox className={''} menu={SETTING_MENU} />
      </div>
    </PageLayout>
  );
}
