import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';

interface Props {
  index: number;
  word: string;
  remove: (id: number) => void;
}

export default function Word({ index, word, remove }: Props) {
  return (
    <>
      <span className={style.word} onClick={() => remove(index)}>
        <b className={style.text}>#{word}</b>
        <span className={style.close}>
          <IoClose />
        </span>
      </span>
    </>
  );
}
