import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { HiPlus } from 'react-icons/hi';
import Word from './Word';

export type Props = {
  addHobby: (hobby: string) => void;
};

export default function Hobby({ addHobby }: Props) {
  const removeWord = (id: number) => {
    setWords((words) => words.filter((_, index) => index !== id));
  };

  const [words, setWords] = useState<string[]>([]);
  const [newWord, setNewWord] = useState<string>('');

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (newWord !== '') {
        setWords([...words, newWord]);
        setNewWord('');
        addHobby(newWord);
      }
    }
  };

  return (
    <main className={style.hobby}>
      <div className={style.item}>
        <input
          type="text"
          value={newWord}
          className={style.input}
          id="hobby"
          placeholder="취미를 입력해주세요."
          onChange={(e) => setNewWord(e.target.value)}
          onKeyPress={onEnter}
        />
        <span
          className={style.plus}
          onClick={() => {
            if (newWord !== '') {
              setWords([...words, newWord]);
              setNewWord('');
              addHobby(newWord);
            }
          }}
        >
          <HiPlus />
        </span>
      </div>
      <div className={style.word_bx}>
        {words.map((word, index) => (
          <Word
            key={index}
            word={word}
            index={index}
            removeWord={() => removeWord(index)}
          />
        ))}
      </div>
    </main>
  );
}
