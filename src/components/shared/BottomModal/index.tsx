import $ from './style.module.scss';
import Portal from 'src/components/shared/Portal';
import { useEffect, useState } from 'react';
import CloseButton from '../CloseButton';

interface Props {
  portalId: string;
  title: string;
  children: JSX.Element;
  isOpen: boolean;
  toggleModal: () => void;
}

export default function BottomModal({
  portalId,
  title,
  children,
  isOpen,
  toggleModal,
}: Props) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const onKeyDownESC = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };
    document.addEventListener('keydown', onKeyDownESC);

    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);
    setContainer(newContainer);

    return () => {
      const containerDOM = document.getElementById(portalId);
      containerDOM?.remove();

      document?.removeEventListener('keydown', onKeyDownESC);
    };
  }, [portalId]);

  const handleClick = () => {
    if (isOpen) toggleModal();
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

        <div className={$['out-container']} role="document">
          <div className={$.header} id="modal-heading">
            <span className={$['close-modal']}>
              <CloseButton onClick={handleClick} />
            </span>
            <h2 className={$.title}>{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
}
