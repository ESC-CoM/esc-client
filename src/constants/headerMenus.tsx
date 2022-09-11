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
import { BsPersonPlus, BsPersonDash } from 'react-icons/bs';
import { Logo } from 'src/components/shared/Icon';

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
    url: '/mymeeting/register/basic',
    isPathBeIncluded: true,
  },
  {
    icon: <IoChevronBackOutline />,
    url: '/mymeeting/register/detail',
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
    url: '/friends',
  },
  {
    icon: <IoChevronBack />,
    text: '홈',
    url: '/notice',
  },
  {
    icon: <IoChevronBack />,
    text: '친구',
    url: '/friends/delete',
  },
  {
    text: '내 정보',
    url: '/mypage',
  },
  { icon: <IoChevronBack />, text: '친구' },
  { icon: <IoChevronBack />, text: '친구 찾기', url: '/friends/add' },
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
    icon: <BsPersonPlus style={{ marginRight: '20px' }} />,
    url: '/friends',
  },
  {
    icon: <BsPersonDash />,
    url: '/friends',
  },
  {
    text: '삭제',
    url: '/friends/delete',
  },
  { text: '모두 삭제', url: '/notice' },
  {
    text: '추가',
    url: '/friends/add',
  },
];

export default [menusLeft, menusRight];
