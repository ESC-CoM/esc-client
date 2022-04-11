import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { HiPlus } from 'react-icons/hi';
import { hobbyData } from 'src/__mocks__/join';
import Self from './Self';
import Example from './Example';
import { ExampleWord } from 'src/types/join';

type Props = {
  setHobby: (hobby: string[]) => void;
};

export default function Hobby({ setHobby }: Props) {
  const [inputedWordList, setInputedWordList] = useState<string[]>([]); // 직접 입력한 word
  const [wordInput, setWordInput] = useState<string>('');

  const [selectedWordList, setSelectedWordList] = useState<ExampleWord[]>([]); // 클릭한 word

  const selectItem = (selectedId: number) => {
    const { id, name } = hobbyData.filter(({ id }) => selectedId === id)[0];
    setSelectedWordList((words) => [...words, { id, name }]);
  };

  const removeItem = (trigger: string, removeId: number) => {
    if (trigger === 'self') {
      setInputedWordList((words) =>
        words.filter((_, index) => index !== removeId)
      );
      return;
    }
    if (trigger === 'example') {
      setSelectedWordList((words) => words.filter(({ id }) => id !== removeId));
      return;
    }
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (wordInput !== '') {
        setInputedWordList([...inputedWordList, wordInput]);
        setWordInput('');
      }
    }
  };

  useEffect(() => {
    const selectedHobby = selectedWordList.map(({ name }) => name);
    setHobby([...selectedHobby, ...inputedWordList]);
  }, [inputedWordList, selectedWordList]);

  return (
    <main className={style.hobby}>
      <div>
        {hobbyData.map(({ id, ...info }) => (
          <Example
            key={id}
            id={id}
            info={info}
            selectItem={selectItem}
            removeItem={() => removeItem('example', id)}
          />
        ))}
      </div>

      <div className={style.self_input}>
        <input
          type="text"
          value={wordInput}
          className={style.input}
          id="hobby"
          placeholder="추가하고 싶은 취미를 입력해주세요."
          onChange={(e) => setWordInput(e.target.value)}
          onKeyPress={onEnter}
        />
        <span
          className={style.plus}
          onClick={() => {
            if (wordInput !== '') {
              setInputedWordList([...inputedWordList, wordInput]);
              setWordInput('');
            }
          }}
        >
          <HiPlus />
        </span>
      </div>

      <div className={style.word_bx}>
        {inputedWordList.map((word, index) => (
          <Self
            key={index}
            word={word}
            index={index}
            removeItem={() => removeItem('self', index)}
          />
        ))}
      </div>
    </main>
  );
}
