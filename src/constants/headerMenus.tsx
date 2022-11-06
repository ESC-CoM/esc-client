import { BsPersonDash } from '@react-icons/all-files/bs/BsPersonDash';
import { BsPersonPlus } from '@react-icons/all-files/bs/BsPersonPlus';
import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import { IoChevronBackOutline } from '@react-icons/all-files/io5/IoChevronBackOutline';
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline';
import { IoCloseOutline } from '@react-icons/all-files/io5/IoCloseOutline';
import { IoNotificationsOutline } from '@react-icons/all-files/io5/IoNotificationsOutline';
import { IoPeopleOutline } from '@react-icons/all-files/io5/IoPeopleOutline';
import { IoReorderThreeOutline } from '@react-icons/all-files/io5/IoReorderThreeOutline';
import { IoSearchOutline } from '@react-icons/all-files/io5/IoSearchOutline';
import { IoSettingsOutline } from '@react-icons/all-files/io5/IoSettingsOutline';
import { NavigateFunction } from 'react-router-dom';
import { Logo } from 'src/components/shared/Icon';

type MenuType = {
  icon?: JSX.Element;
  text?: string;
  url?: string | string[];
  isPathBeIncluded?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  to?: string;
};

const menusLeft = (navigate: NavigateFunction): MenuType[] => {
  return [
    {
      icon: <IoChevronBackOutline />,
      text: '이전',
      url: '',
      onClick: () => navigate(-1),
    },
    {
      icon: <IoChevronDownOutline />,
      text: '과팅',
      url: '/home',
    },
    {
      icon: <IoCloseOutline />,
      text: '과팅 신청하기',
      url: ['/home', '/apply'],
    },
    {
      icon: <IoCloseOutline />,
      text: '과팅 등록하기',
      url: '/home/register',
    },
    {
      icon: <Logo />,
      url: '/mymeeting',
      isPathBeIncluded: false,
    },
    {
      icon: <IoChevronBackOutline />,
      url: '/mymeeting/detail',
      isPathBeIncluded: true,
    },
    {
      icon: <IoChevronBack />,
      text: '내 정보',
      url: '/setting',
    },
    {
      icon: <IoChevronBack />,
      text: '친구',
      url: '/friends/list',
      onClick: () => navigate(-1),
    },
    {
      icon: <IoChevronBack />,
      text: '홈',
      url: '/notice',
    },
    {
      icon: <IoChevronBack />,
      text: '친구 삭제',
      url: '/friends/delete',
      onClick: () => navigate(-1),
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
      onClick: () => navigate(-1),
    },
    { icon: <IoChevronBack />, text: '내 정보', url: '/mypage/authentication' },
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
    },
    {
      icon: <IoChevronBack />,
      text: '학생증 재인증',
      url: '/mypage/change/student-card-upload',
    },
    {
      icon: <IoChevronBack />,
      url: '/join',
      isPathBeIncluded: true,
    },
    {
      icon: <Logo />,
      url: '/chat',
    },
    {
      icon: <IoChevronBack />,
      url: '/chat/room',
      isPathBeIncluded: true,
    },
  ];
};

const menusRight: MenuType[] = [
  {
    icon: <IoNotificationsOutline />,
    url: '/mymeeting',
    isPathBeIncluded: true,
  },
  {
    icon: <IoSearchOutline />,
    url: '/home',
  },
  {
    icon: <IoPeopleOutline />,
    url: '/mypage',
    to: '/friends/list?kind=myfriends',
  },
  {
    icon: <IoNotificationsOutline />,
    url: '/chat',
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
