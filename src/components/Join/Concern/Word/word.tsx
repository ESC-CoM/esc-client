import style from './style.module.scss';

interface Props {
  index: number;
  word: string;
  remove: (id: number) => void;
}

export default function Word({ index, word, remove }: Props) {
  return (
    <>
      <span className={style.word} onClick={() => remove(index)}>
        {word}
      </span>
    </>
  );
}
