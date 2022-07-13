import { PageLayout } from 'src/components/Layout';
import $ from './style.module.scss';

export default function Friends() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div>I'm friends page!</div>
    </PageLayout>
  );
}
