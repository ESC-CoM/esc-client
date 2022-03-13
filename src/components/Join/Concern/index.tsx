import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import Word from './Word/word';

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
      setWords([...words, newWord]);
      setNewWord({ ...newWord, name: '' });
    }
  };

  return (
    <main className={style.concern}>
      <h1>회원님의 관심사에 대해 알려주세요.</h1>
      <form className={style.form}>
        <label htmlFor="concern">관심사</label>
        <input
          type="text"
          value={newWord.name}
          className={style.input}
          id="concern"
          onChange={(e) =>
            setNewWord({
              name: e.target.value,
              onRemove: RemoveWord,
            })
          }
          onKeyPress={onEnter}
        />
        {words.map((word, index) => (
          <Word
            key={index}
            word={word.name}
            index={index}
            remove={word.onRemove}
          />
        ))}
      </form>
    </main>
  );
}
