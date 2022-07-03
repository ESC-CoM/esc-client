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
    url: '/mymeeting',
  },
  {
    icon: <IoChevronBackOutline />,
    url: '/mymeeting/detail',
  },
  {
    icon: <Logo />,
    url: '/mymeeting/request',
  },
  {
    text: '채팅',
    url: '/chat',
  },
  {
    icon: <IoChevronBack />,
    url: '/chat/room',
  },
  {
    icon: <Logo />,
    url: '/mypage',
  },
  {
    icon: <IoChevronBack />,
    text: '내 정보',
    url: '/setting',
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
    icon: <IoNotificationsOutline />,
    url: '/home',
  },
  {
    icon: <IoPeopleOutline />,
    url: '/mypage',
  },
  {
    icon: <IoSettingsOutline />,
    url: '/mypage',
  },
  {
    icon: <IoNotificationsOutline />,
    url: '/chat',
  },
  {
    icon: <IoReorderThreeOutline />,
    url: '/chat/room',
  },
];

export default [menusLeft, menusRight];
