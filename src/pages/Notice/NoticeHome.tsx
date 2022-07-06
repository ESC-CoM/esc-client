import { PageLayout } from 'src/components/Layout';
import NoticeCard from 'src/components/Notice/NoticeCard';
import noticeList from 'src/__mocks__/notice';
import $ from './style.module.scss';

export default function NoticeHome() {
  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['notice-box']}>
        {noticeList.map((notice) => (
          <NoticeCard {...notice} />
        ))}
      </div>
    </PageLayout>
  );
}
