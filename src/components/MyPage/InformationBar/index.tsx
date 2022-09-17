import cx from 'classnames';
import { IconType } from 'react-icons';

import $ from './style.module.scss';

type Props = {
  className?: string;
  text: string;
  icon: IconType;
};

export default function InformationBar({ className, text, icon: Icon }: Props) {
  return (
    <li className={cx($.container, className)}>
      <Icon className={$.icon} />
      <span className={$.text}>{text}</span>
    </li>
  );
}
