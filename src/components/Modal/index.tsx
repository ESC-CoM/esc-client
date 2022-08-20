import $ from './style.module.scss';

interface Props {
  children: JSX.Element;
  onState: boolean;
  toggleModal: () => void;
}

export default function Modal({ children, onState, toggleModal }: Props) {
  return (
    <div className={$.modal}>
      <div className={$.children}>{children}</div>
      <div
        className={$['back']}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onState) toggleModal();
        }}
      />
    </div>
  );
}
