import { Routes, Route, Navigate } from 'react-router-dom';
import {
  PhoneAuthPage,
  EmailInputPage,
  MoreInfoPage1,
  MoreInfoPage2,
} from '../pages/Join';
import ProgressBar from 'src/components/ProgressBar';
import { getCurrentPath } from 'src/utils/getCurrentPath';

// TODO: 회원가입 환영 라우트 추가
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
];

function JoinRoute() {
  const currStep = getCurrentPath(routes);

  return (
    <>
      <ProgressBar currStep={currStep} allStep={routes.length} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </>
  );
}

export default JoinRoute;
