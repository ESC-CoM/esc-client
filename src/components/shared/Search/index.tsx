import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import { HiOutlineSearch } from '@react-icons/all-files/hi/HiOutlineSearch';
import useDebounceInput from 'src/hooks/useDebounceInput';

import $ from './style.module.scss';

type Props = {
  onSearchClick: (text: string) => void;
};

export default function Search({ onSearchClick }: Props) {
  const [searchText, setSearchText] = useState('');
  const debouncedSetSearchText = useDebounceInput(setSearchText);

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => debouncedSetSearchText(value);

  const handleEnterKeyDown: KeyboardEventHandler<HTMLInputElement> = ({
    key,
  }) => {
    if (key === 'Enter') onSearchClick(searchText); // TODO: 2번 실행됨.
  };

  const handleSearchClickWithText = () => onSearchClick(searchText);

  return (
    <div className={$['search-box']}>
      <input
        type="search"
        onKeyDown={handleEnterKeyDown}
        placeholder="검색"
        defaultValue={searchText}
        onChange={handleSearchTextChange}
      />
      <button
        type="button"
        aria-label="검색하기"
        onClick={handleSearchClickWithText}
      >
        <HiOutlineSearch />
      </button>
    </div>
  );
}
