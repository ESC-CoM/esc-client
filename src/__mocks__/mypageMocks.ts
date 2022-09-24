import { IoBeer } from '@react-icons/all-files/io5/IoBeer';
import { IoBody } from '@react-icons/all-files/io5/IoBody';
import { RiCake2Fill } from '@react-icons/all-files/ri/RiCake2Fill';
import { OutlineSchool, WeightScale } from 'src/components/shared/Icon';

export const MOCK_BASIC_INFORMATION = [
  {
    icon: OutlineSchool,
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
    icon: WeightScale,
    text: '59kg',
  },
];

export const MOCK_URL =
  'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556779.jpg?w=2000&t=st=1661578223~exp=1661578823~hmac=fcbafec28b2bc396b64f33424ed8fb434b852ba0e36ecddada0b49950562de78' as const;
