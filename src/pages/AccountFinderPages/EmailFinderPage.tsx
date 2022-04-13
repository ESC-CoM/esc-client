import { EmailFinder } from 'src/components/AccountFinder';
import { PageLayout } from '../../components/Layout';

export default function EmailFinderPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <EmailFinder />
    </PageLayout>
  );
}
