import * as React from 'react';

export type StyleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type DefaultProps = {
  children?: React.ReactNode;
} & StyleProps;

export type IconProps = {
  size?: string | number;
  stroke?: string;
  fill?: string;
  style?: React.CSSProperties;
  className?: string;
};

export type DefaultData = {
  name: string;
  code: string;
};
