import PasswordFinder from 'src/components/AccountFinder/PasswordFinder';
import { PageLayout } from 'src/components/shared/Layout';

export default function PasswordFinderPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <PasswordFinder />
    </PageLayout>
  );
}
