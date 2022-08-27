import { PageLayout } from 'src/components/shared/Layout';
import { Welcome } from 'src/components/Join';

export default function WelcomePage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <Welcome />
    </PageLayout>
  );
}
