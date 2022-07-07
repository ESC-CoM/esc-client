import $ from './style.module.scss';
import cx from 'classnames';

interface Props {
  id: string;
  name: string | undefined;
  content: string;
}

export default function Message({ id, name, content }: Props) {
  const isMe = id === 'loginid';

  return (
    <div className={$['chat-msg']}>
      {!isMe && <span className={$.name}>{name}</span>}
      <div className={cx($['msg'], $[isMe ? 'me' : 'other'])}>
        <span className={$.text}>{content}</span>
      </div>
    </div>
  );
}
