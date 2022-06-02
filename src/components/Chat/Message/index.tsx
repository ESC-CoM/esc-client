import $ from './style.module.scss';
import cx from 'classnames';

interface Props {
  id: string;
  name: string | undefined;
  content: string;
}

export default function Message({ id, name, content }: Props) {
  return (
    <div>
      <span className={$.name}>{name}</span>
      <div className={cx($['msg'], $[id === 'loginid' ? 'me' : 'other'])}>
        <span className={$.text}>{content}</span>
      </div>
    </div>
  );
}
