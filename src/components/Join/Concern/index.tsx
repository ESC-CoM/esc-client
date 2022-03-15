import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { HiPlus } from 'react-icons/hi';
import Word from './Word';

interface Words {
  name: string;
  onRemove: (id: number) => void;
}

export default function Concern() {
  const RemoveWord = (id: number) => {
    setWords((words) => words.filter((_, index) => index !== id));
  };

  const [words, setWords] = useState<Array<Words>>([]);
  const [newWord, setNewWord] = useState<Words>({
    name: '',
    onRemove: () => RemoveWord,
  });

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (newWord.name !== '') {
        setWords([...words, newWord]);
        setNewWord({ ...newWord, name: '' });
      }
    }
  };

  return (
    <main className={style.concern}>
      <h1>회원님의 관심사에 대해 알려주세요.</h1>
      <h2>추후 프로필에서 수정할 수 있어요. 자유롭게 적어주세요.</h2>
      <form className={style.form}>
        <div className={style.item}>
          <input
            type="text"
            value={newWord.name}
            className={style.input}
            id="concern"
            placeholder="관심사"
            autoFocus
            onChange={(e) =>
              setNewWord({
                name: e.target.value,
                onRemove: RemoveWord,
              })
            }
            onKeyPress={onEnter}
          />
          <span
            className={style.plus}
            onClick={() => {
              if (newWord.name !== '') {
                setWords([...words, newWord]);
                setNewWord({ ...newWord, name: '' });
              }
            }}
          >
            <HiPlus />
          </span>
        </div>
        <button className={style.next_btn} type="submit" aria-labelledby="next">
          확인
        </button>
      </form>
      <div className={style.word_bx}>
        {words.map((word, index) => (
          <Word
            key={index}
            word={word.name}
            index={index}
            remove={word.onRemove}
          />
        ))}
      </div>
    </main>
  );
}
