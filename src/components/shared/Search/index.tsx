import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import $ from './style.module.scss';

type Props = {
  onSearchClick: (text: string) => void;
};

export default function Search({ onSearchClick }: Props) {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setSearchText(value);

  const handleEnterKeyDown: KeyboardEventHandler<HTMLInputElement> = ({
    key,
  }) => {
    if (key === 'Enter') onSearchClick(searchText);
  };

  return (
    <div className={$['search-box']}>
      <input
        type="search"
        onKeyDown={handleEnterKeyDown}
        placeholder="검색"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <button
        type="button"
        aria-label="검색하기"
        onClick={() => onSearchClick(searchText)}
      >
        <HiOutlineSearch />
      </button>
    </div>
  );
}
