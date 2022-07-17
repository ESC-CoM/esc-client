import { PageLayout } from 'src/components/Layout';
import { BiSearch } from 'react-icons/bi';
import $ from './style.module.scss';

export default function Friends() {
  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <input className={$.input} type="text" placeholder="검색" />
        <BiSearch className={$.icon} />
      </div>
    </PageLayout>
  );
}
