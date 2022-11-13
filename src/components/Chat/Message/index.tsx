import { memo } from 'react';
import cx from 'classnames';

import $ from './style.module.scss';

interface Props {
  name: string | undefined;
  content: string;
  isMe: boolean;
}

export function Message({ name, content, isMe }: Props) {
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
