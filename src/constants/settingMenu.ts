import { Menu } from 'src/types/setting';

export const MYPAGE_SETTING_MENU: Menu[] = [
  {
    title: '계정 정보',
    items: [
      {
        type: 'link',
        text: '기본 정보 수정',
        to: './',
      },
      {
        type: 'link',
        text: '학사 정보 수정',
        to: './',
      },
    ],
  },
  {
    title: '기타',
    items: [
      {
        type: 'link',
        text: '친구 초대',
        to: './',
      },
    ],
  },
];

export const getSettingMenu = (
  value: boolean,
  onToggleClick: () => void
): Menu[] => {
  return [
    {
      title: '앱 설정',
      items: [
        {
          text: '푸시 알람',
          type: 'toggle',
          value,
          onToggleClick,
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
};
