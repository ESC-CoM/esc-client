import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactElement;
  container: Element | null;
}

export default function Portal({ children, container }: Props) {
  if (!container) return null;
  return createPortal(children, container);
}
