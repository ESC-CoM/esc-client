import { Route, Routes } from 'react-router-dom';
import {
  Authentication,
  ChangeAdditionalInfo,
  ChangeEmail,
  ChangePassword,
  ChangePhone,
  Home,
  Select,
  StudentCardUploadPage,
} from 'src/pages/MyPage';

function MyPageRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="authentication" element={<Authentication />} />
      <Route path="select" element={<Select />} />
      <Route path="change/password" element={<ChangePassword />} />
      <Route path="change/phone" element={<ChangePhone />} />
      <Route path="change/email" element={<ChangeEmail />} />
      <Route path="change/additional-info" element={<ChangeAdditionalInfo />} />
      <Route
        path="change/student-card-upload"
        element={<StudentCardUploadPage />}
      />
    </Routes>
  );
}

export default MyPageRouter;
