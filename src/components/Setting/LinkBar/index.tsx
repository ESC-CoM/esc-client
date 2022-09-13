import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import $ from './style.module.scss';

type Props = {
  to: string;
  text: string;
};

export default function LinkBar({ to, text }: Props) {
  return (
    <Link to={to} className={$.link}>
      <span>{text}</span>
      <IoChevronForward className={$.icon} />
    </Link>
  );
}
