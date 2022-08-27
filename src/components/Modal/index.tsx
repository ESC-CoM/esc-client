import $ from './style.module.scss';

interface Props {
  children: JSX.Element;
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function Modal({ children, isModalOpen, toggleModal }: Props) {
  const handleClick = () => {
    if (isModalOpen) toggleModal();
  };

  return (
    <div className={$.modal}>
      <div className={$.children}>{children}</div>
      <div className={$['back']} onClick={handleClick} />
    </div>
  );
}
