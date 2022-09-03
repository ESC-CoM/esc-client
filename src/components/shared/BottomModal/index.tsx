import $ from './style.module.scss';
import Portal from 'src/components/shared/Portal';
import { useEffect, useState } from 'react';
import CloseButton from '../CloseButton';

interface Props {
  portalId: string;
  title: string;
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomModal({
  portalId,
  title,
  children,
  isOpen,
  onClose,
}: Props) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);
    setContainer(newContainer);

    return () => {
      const containerDOM = document.getElementById(portalId);
      containerDOM?.remove();
    };
  }, [portalId]);

  useEffect(() => {
    const onKeyDownESC = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onKeyDownESC);
    return () => {
      document?.removeEventListener('keydown', onKeyDownESC);
    };
  }, [portalId]);

  const handleClick = () => {
    if (isOpen) onClose();
  };

  return (
    <Portal container={container}>
      <div
        className={$['bottom-modal']}
        role="alertdialog"
        aria-modal
        aria-labelledby="modal-heading"
      >
        <div className={$['dimmer']} onClick={handleClick} tabIndex={0} />
        <div className={$['out-container']}>
          <div className={$.header} id="modal-heading">
            <h2 className={$.title}>{title}</h2>
            <span className={$['close-modal']}>
              <CloseButton onClick={handleClick} />
            </span>
          </div>
          <div className={$['inner-container']} role="document">
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
