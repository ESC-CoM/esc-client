import {
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoNotificationsOutline,
  IoSearchOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoSettingsOutline,
  IoChevronBack,
} from 'react-icons/io5';
import { Logo } from 'src/components/Icon';

type MenuType = {
  icon?: JSX.Element;
  text?: string;
  url?: string;
  isPathBeIncluded?: boolean;
};

const menusLeft: MenuType[] = [
  {
    icon: <IoChevronBackOutline />,
    text: '이전',
    url: '',
  },
  {
    icon: <IoChevronDownOutline />,
    text: '과팅',
    url: '/home',
  },
  {
    icon: <IoChevronDownOutline />,
    text: '소개팅',
    url: '/home/personal',
  },
  {
    icon: <IoCloseOutline />,
    text: '과팅 신청하기',
    url: '/home/register',
  },
  {
    icon: <Logo />,
    text: '',
    url: '/mymeeting',
    isPathBeIncluded: true,
  },
  {
    icon: <IoChevronBack />,
    text: '내 정보',
    url: '/setting',
  },
  {
    icon: <IoChevronBack />,
    text: '홈',
    url: '/notice',
  },
];

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
  },
  {
    icon: <IoReorderThreeOutline />,
    url: '/chat',
  },
  {
    icon: <IoSettingsOutline />,
    url: '/mypage',
  },
  {
    text: '모두 삭제',
    url: '/notice',
  },
];

export default [menusLeft, menusRight];
