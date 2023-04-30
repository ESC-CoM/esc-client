import { NextRouter } from 'next/router';
import { BsPersonDash } from '@react-icons/all-files/bs/BsPersonDash';
import { BsPersonPlus } from '@react-icons/all-files/bs/BsPersonPlus';
import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import { IoChevronBackOutline } from '@react-icons/all-files/io5/IoChevronBackOutline';
import { IoCloseOutline } from '@react-icons/all-files/io5/IoCloseOutline';
import { IoNotificationsOutline } from '@react-icons/all-files/io5/IoNotificationsOutline';
import { IoPeopleOutline } from '@react-icons/all-files/io5/IoPeopleOutline';
import { IoReorderThreeOutline } from '@react-icons/all-files/io5/IoReorderThreeOutline';
import { IoSettingsOutline } from '@react-icons/all-files/io5/IoSettingsOutline';
import { Logo } from 'src/components/shared/Icon';

type MenuType = {
  icon?: JSX.Element;
  text?: string;
  url?: string | string[];
  isPathBeIncluded?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  to?: string;
};

const menusLeft = (router: NextRouter): MenuType[] => {
  return [
    {
      icon: <IoChevronBackOutline />,
      text: '이전',
      url: '',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBackOutline />,
      url: '/home/detail',
      isPathBeIncluded: true,
      onClick: () => router.back(),
    },
    {
      icon: <IoCloseOutline />,
      text: '과팅 신청하기',
      url: ['/home', '/apply'],
      onClick: () => router.back(),
    },
    {
      icon: <IoCloseOutline />,
      text: '과팅 등록하기',
      url: '/home/register',
      onClick: () => router.back(),
    },
    {
      icon: <Logo />,
      url: '/mymeeting',
      isPathBeIncluded: false,
    },
    {
      icon: <Logo />,
      url: '/home',
      isPathBeIncluded: false,
    },
    {
      icon: <IoChevronBackOutline />,
      url: '/mymeeting/detail',
      isPathBeIncluded: true,
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      text: '내 정보',
      url: '/setting',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      text: '친구',
      url: '/friends/list',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      text: '홈',
      url: '/notice',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      text: '친구 삭제',
      url: '/friends/delete',
      onClick: () => router.back(),
    },
    {
      text: '내 정보',
      url: '/mypage',
    },
    { icon: <IoChevronBack />, text: '친구' },
    {
      icon: <IoChevronBack />,
      text: '친구 찾기',
      url: '/friends/add',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      text: '내 정보',
      url: '/mypage/authentication',
      onClick: () => router.back(),
    },
    { icon: <IoChevronBack />, text: '내 정보', url: '/mypage/select' },
    {
      icon: <IoChevronBack />,
      text: '비밀번호 변경',
      url: '/mypage/change/password',
    },
    {
      icon: <IoChevronBack />,
      text: '전화번호 번경',
      url: '/mypage/change/phone',
    },
    {
      icon: <IoChevronBack />,
      text: '이메일 변경',
      url: '/mypage/change/email',
    },
    {
      icon: <IoChevronBack />,
      text: '추가 정보 수정',
      url: '/mypage/change/additional-info',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      text: '학생증 재인증',
      url: '/mypage/change/student-card-upload',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      url: '/join',
      isPathBeIncluded: true,
      onClick: () => router.back(),
    },
    {
      icon: <Logo />,
      url: '/chat',
    },
    {
      icon: <IoChevronBack />,
      url: '/chat/room',
      isPathBeIncluded: true,
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      url: '/login',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      url: '/find/email',
      text: '아이디 찾기',
      onClick: () => router.back(),
    },
    {
      icon: <IoChevronBack />,
      url: '/find/password',
      text: '비밀번호 찾기',
      onClick: () => router.back(),
    },
  ];
};

const menusRight: MenuType[] = [
  {
    icon: <IoNotificationsOutline />,
    url: '/mymeeting',
    to: '/notice',
    isPathBeIncluded: true,
  },
  {
    icon: <IoPeopleOutline />,
    url: '/mypage',
    to: '/friends/list?kind=myfriends',
  },
  {
    icon: <IoPeopleOutline />,
    url: '/home',
    to: '/friends/list?kind=myfriends',
  },
  {
    icon: <IoNotificationsOutline />,
    url: '/chat',
    to: '/notice',
  },
  {
    icon: <IoReorderThreeOutline />,
    url: '/chat/room',
  },
  {
    icon: <IoSettingsOutline />,
    url: '/mypage',
    to: '/setting',
  },
  {
    icon: <BsPersonPlus style={{ marginRight: '20px' }} />,
    url: '/friends/list',
    to: '/friends/add',
  },
  {
    icon: <BsPersonDash />,
    url: '/friends/list',
    to: '/friends/delete',
  },
  { text: '모두 삭제', url: '/notice' },
];

export { menusLeft, menusRight };
