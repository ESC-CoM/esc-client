import { Routes, Route } from 'react-router-dom';
import {
  EmailConfirmPage,
  EmailFinderPage,
  PasswordConfirmPage,
  PasswordFinderPage,
} from 'src/pages/AccountFinderPages';

function AccountFinderRoute() {
  return (
    <Routes>
      <Route path="email" element={<EmailFinderPage />} />
      <Route path="email/confirm" element={<EmailConfirmPage />} />
      <Route path="password" element={<PasswordFinderPage />} />
      <Route path="password/confirm" element={<PasswordConfirmPage />} />
    </Routes>
  );
}

export default AccountFinderRoute;
