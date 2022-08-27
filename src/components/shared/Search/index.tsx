import { HiOutlineSearch } from 'react-icons/hi';
import $ from './style.module.scss';

export default function Search() {
  return (
    <div className={$['search-box']}>
      <input type="search" placeholder="검색" />
      <HiOutlineSearch />
    </div>
  );
}
