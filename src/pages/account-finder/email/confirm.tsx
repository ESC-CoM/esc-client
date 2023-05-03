import { FindResult } from 'src/components/AccountFinder';
import { PageLayout } from 'src/components/shared/Layout';

export default function EmailConfirmPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <FindResult type="email" />
    </PageLayout>
  );
}
