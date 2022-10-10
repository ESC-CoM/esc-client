import { Navigate, Route, Routes } from 'react-router-dom';
import { ProgressBar } from 'src/components/Join';
import StdCardUploadPage from 'src/pages/Join/StdCardUpload';
import { getCurrentPath } from 'src/utils/getCurrentPath';

import {
  EmailInputPage,
  MoreInfoPage1,
  MoreInfoPage2,
  PhoneAuthPage,
  ProfileImageUploadPage,
  WelcomePage,
} from '../pages/Join';

const routes = [
  {
    index: true,
    element: <Navigate to="/join/phone" />,
  },
  {
    path: 'phone',
    element: <PhoneAuthPage />,
  },
  {
    path: 'email',
    element: <EmailInputPage />,
  },
  {
    path: 'more1',
    element: <MoreInfoPage1 />,
  },
  {
    path: 'more2',
    element: <MoreInfoPage2 />,
  },
  {
    path: 'profile-image',
    element: <ProfileImageUploadPage />,
  },
  {
    path: 'student-card',
    element: <StdCardUploadPage />,
  },
  {
    path: 'welcome',
    element: <WelcomePage />,
  },
];

function JoinRoute() {
  const currStep = getCurrentPath(routes);

  return (
    <>
      <ProgressBar currStep={currStep} allStep={routes.length - 1} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </>
  );
}

export default JoinRoute;
