import $ from './style.module.scss';
import cx from 'classnames';

interface Props {
  sender: string;
  content: string;
  date: string;
}

export default function Message({ sender, content, date }: Props) {
  return (
    <div
      className={cx($['msg-info'], $[sender === 'loginid' ? 'me' : 'other'])}
    >
      <span className={$.text}>{content}</span>
    </div>
  );
}
