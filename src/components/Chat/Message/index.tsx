import { memo } from 'react';
import cx from 'classnames';

import $ from './style.module.scss';

interface Props {
  id: string;
  name: string | undefined;
  content: string;
}

export function Message({ id, name, content }: Props) {
  const isMe = id === 'loginid';

  return (
    <div className={$['chat-msg']}>
      {!isMe && <span className={$.name}>{name}</span>}
      <div className={cx($.msg, $[isMe ? 'me' : 'other'])}>
        <span className={$.text}>{content}</span>
      </div>
    </div>
  );
}

export default memo(Message);
