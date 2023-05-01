import { noticeList } from '@mocks/data';
import NoticeCard from 'src/components/Notice/NoticeCard';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

export default function NoticePage() {
  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['notice-box']}>
        {noticeList.map(({ title, content, imageURL, date }) => (
          <NoticeCard
            key={`${title}${date}`}
            {...{ title, content, imageURL, date }}
          />
        ))}
      </div>
    </PageLayout>
  );
}
