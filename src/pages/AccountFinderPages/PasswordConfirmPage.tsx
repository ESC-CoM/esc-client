import { FindResult } from 'src/components/AccountFinder';
import { PageLayout } from '../../components/Layout';

export default function PasswordConfirmPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <FindResult type="password" />
    </PageLayout>
  );
}
