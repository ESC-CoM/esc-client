import { PageLayout } from 'src/components/Layout';
import Search from 'src/components/Search';
import $ from './style.module.scss';

export default function MeetingApplyPage() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <main className={$['wrap']}>
        <h2>친구 추가하기</h2>
        <Search />
      </main>
    </PageLayout>
  );
}
