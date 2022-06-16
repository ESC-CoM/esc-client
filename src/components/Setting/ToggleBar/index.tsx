import classNames from 'classnames';
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
      <span>{text}</span>
      <button
        className={classNames($['slider'], value ? $['activate'] : '')}
        type="button"
        onClick={onClick}
      >
        <div
          className={classNames(
            $['left-circle'],
            value ? $['right-circle'] : ''
          )}
        ></div>
      </button>
    </div>
  );
}