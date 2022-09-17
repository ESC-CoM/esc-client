import Login from '../components/Login/Login';
import { PageLayout } from '../components/shared/Layout';

function LoginPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <Login />
    </PageLayout>
  );
}

export default LoginPage;
