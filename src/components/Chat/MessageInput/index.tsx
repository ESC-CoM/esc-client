import { memo } from 'react';

import $ from './style.module.scss';

export function MessageInput() {
  return (
    <div className={$['message-input-box']}>
      <button type="button">+</button>
      <div className={$.text}>
        <textarea name="message" id=""></textarea>
      </div>
      <button type="submit">전송</button>
    </div>
  );
}

export default memo(MessageInput);
