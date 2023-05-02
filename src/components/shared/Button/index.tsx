import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import { StyleProps } from 'src/types/props';

import $ from './style.module.scss';

type Props = StyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: 'button' | 'submit' | 'reset';
    width?: string;
    fontSize?: number;
    backgroundColor?: string;
    color?: string;
    onClick?: () => void;
  };

export default function Button(buttonProps: Props) {
  const { type = 'button', width, children } = buttonProps;
  const { fontSize, onClick, backgroundColor, color } = buttonProps;
  const { className, style } = buttonProps;
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={cx($.button, className)}
      type={type}
      style={{ ...style, width, fontSize, backgroundColor, color }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
