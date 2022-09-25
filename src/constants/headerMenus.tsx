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
import { Logo } from 'src/components/shared/Icon';

type MenuType = {
  icon?: JSX.Element;
  text?: string;
  url?: string | string[];
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
