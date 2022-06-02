import {
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoNotificationsOutline,
  IoSearchOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoSettingsOutline,
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
    url: '/home/apply',
  },
  {
    icon: <Logo />,
    text: '',
    url: '/mymeeting',
    isPathBeIncluded: true,
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
];

export default [menusLeft, menusRight];
