import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactElement;
  container: Element | null;
}

export default function Portal({ children, container }: Props) {
  if (!container) return null;
  return ReactDOM.createPortal(children, container);
}
