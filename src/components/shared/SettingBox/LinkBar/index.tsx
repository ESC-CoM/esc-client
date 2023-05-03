import Link from 'next/link';
import { IoChevronForward } from '@react-icons/all-files/io5/IoChevronForward';

import $ from './style.module.scss';

type Props = {
  to: string;
  text: string;
};

export default function LinkBar({ to, text }: Props) {
  return (
    <Link href={to} className={$.link}>
      <span className={$.text}>{text}</span>
      <IoChevronForward className={$.icon} />
    </Link>
  );
}
