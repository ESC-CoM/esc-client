import { memo, useEffect, useState } from 'react';
import cx from 'classnames';

import $ from './style.module.scss';

type Props = {
  className?: string;
};

export function AuthTimer({ className }: Props) {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countDown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [minutes, seconds]);

  return (
    <span className={cx($.timer, className)}>
      {`${minutes}`.padStart(2, '0')}:{`${seconds}`.padStart(2, '0')}
    </span>
  );
}

export default memo(AuthTimer);
