import { IoChevronForward } from '@react-icons/all-files/io5/IoChevronForward';
import { Link } from 'react-router-dom';

import $ from './style.module.scss';

type Props = {
  to: string;
  text: string;
};

export default function LinkBar({ to, text }: Props) {
  return (
    <Link to={to} className={$.link}>
      <span className={$.text}>{text}</span>
      <IoChevronForward className={$.icon} />
    </Link>
  );
}
