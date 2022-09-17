import cx from 'classnames';
import { MouseEventHandler } from 'react';
import $ from './style.module.scss';

type Props = {
  text: string;
  value: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function ToggleBar({ text, value, onClick }: Props) {
  return (
    <div className={$.container}>
      <span className={$.text}>{text}</span>
      <button
        className={cx($['slider'], value ? $['activate'] : '')}
        type="button"
        onClick={onClick}
      >
        <div
          className={cx($['left-circle'], value ? $['right-circle'] : '')}
        ></div>
      </button>
    </div>
  );
}
