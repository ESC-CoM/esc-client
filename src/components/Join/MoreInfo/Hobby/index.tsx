import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { HiPlus } from 'react-icons/hi';
import Word from './Word';

interface Words {
  name: string;
  onRemove: (id: number) => void;
}

export type Props = {
  onSetHobby: (hobby: string) => void;
};

export default function Hobby({ onSetHobby }: Props) {
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
        onSetHobby(newWord.name);
      }
    }
  };

  return (
    <main className={style.hobby}>
      <div className={style.item}>
        <input
          type="text"
          value={newWord.name}
          className={style.input}
          id="hobby"
          placeholder="취미를 입력해주세요."
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
