import { GiWeightScale } from 'react-icons/gi';
import { IoBeer, IoBody } from 'react-icons/io5';
import { MdOutlineSchool } from 'react-icons/md';
import { RiCake2Fill } from 'react-icons/ri';

export const MOCK_BASIC_INFORMATION = [
  {
    icon: MdOutlineSchool,
    text: '사회과학대학 심리학과 19학번',
  },
  {
    icon: RiCake2Fill,
    text: '2000년 2월 6일',
  },
  {
    icon: IoBeer,
    text: '못 마셔요',
  },
];

export const MOCK_BODY_DATA = [
  {
    icon: IoBody,
    text: '175cm',
  },
  {
    icon: GiWeightScale,
    text: '59kg',
  },
];

export const MOCK_URL =
  'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556779.jpg?w=2000&t=st=1661578223~exp=1661578823~hmac=fcbafec28b2bc396b64f33424ed8fb434b852ba0e36ecddada0b49950562de78' as const;
