import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { HiPlus } from 'react-icons/hi';
import { hobbyData } from 'src/__mocks__/join';
import Self from './Self';
import Mock from './Mock';

type Props = {
  setHobby: (hobby: string[]) => void;
};

type MockWord = {
  id: number;
  name: string;
};

export default function Hobby({ setHobby }: Props) {
  const [enteredWordList, setEnteredWordList] = useState<string[]>([]); // 직접 입력한 word
  const [wordInput, setWordInput] = useState<string>('');

  const [selectedMockWordList, setSelectedMockWordList] = useState<MockWord[]>(
    []
  ); // 클릭한 word

  const selectItem = (selectedId: number) => {
    const { id, name } = hobbyData.filter(({ id }) => selectedId === id)[0];
    const selectedHobby = { id, name };
    setSelectedMockWordList((words) => [...words, selectedHobby]);
  };

  const removeItem = (trigger: string, removeId: number) => {
    if (trigger === 'self') {
      setEnteredWordList((words) =>
        words.filter((_, index) => index !== removeId)
      );
      return;
    }
    if (trigger === 'mock') {
      setSelectedMockWordList((words) =>
        words.filter(({ id }) => id !== removeId)
      );
      return;
    }
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (wordInput !== '') {
        setEnteredWordList([...enteredWordList, wordInput]);
        setWordInput('');
      }
    }
  };

  useEffect(() => {
    const selectedHobby = selectedMockWordList.map(({ name }) => name);
    setHobby([...selectedHobby, ...enteredWordList]);
  }, [enteredWordList, selectedMockWordList]);

  return (
    <main className={style.hobby}>
      <div>
        {hobbyData.map(({ id, ...info }) => (
          <Mock
            key={id}
            id={id}
            info={info}
            selectItem={selectItem}
            removeItem={() => removeItem('mock', id)}
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
              setEnteredWordList([...enteredWordList, wordInput]);
              setWordInput('');
            }
          }}
        >
          <HiPlus />
        </span>
      </div>
      <div className={style.word_bx}>
        {enteredWordList.map((word, index) => (
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
