import $ from './style.module.scss';
import { IoClose } from 'react-icons/io5';

type Props = {
  index: number;
  word: string;
  removeItem: (id: number) => void;
};

export default function Self({ index, word, removeItem }: Props) {
  return (
    <span className={$['word']} onClick={() => removeItem(index)}>
      <b className={$['text']}>#{word}</b>
      <span className={$['close']}>
        <IoClose />
      </span>
    </span>
  );
}
