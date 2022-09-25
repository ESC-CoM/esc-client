import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import { HiOutlineSearch } from '@react-icons/all-files/hi/HiOutlineSearch';
import cx from 'classnames';
import useDebounceInput from 'src/hooks/useDebounceInput';
import { StyleProps } from 'src/types/props';

import $ from './style.module.scss';

type Props = {
  onSearchClick: (text: string) => void;
} & StyleProps;

export default function Search({ onSearchClick, className }: Props) {
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
    <div className={cx($['search-box'], className)}>
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
