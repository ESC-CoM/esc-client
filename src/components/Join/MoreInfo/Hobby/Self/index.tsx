import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';

type Props = {
  index: number;
  word: string;
  removeItem: (id: number) => void;
};

export default function Self({ index, word, removeItem }: Props) {
  return (
    <span className={style.word} onClick={() => removeItem(index)}>
      <b className={style.text}>#{word}</b>
      <span className={style.close}>
        <IoClose />
      </span>
    </span>
  );
}
