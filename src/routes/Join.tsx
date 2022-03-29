import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicInfoPage, MoreInfoPage } from '../pages/Join';

export default function JoinPage() {
  return (
    // <BrowserRouter>
    // <Routes>
    <>
      {/* <Route path="/"> */}
      <Route path="basic" element={<BasicInfoPage />} />
      <Route path="more" element={<MoreInfoPage />} />
      {/* </Route> */}
    </>
    // </Routes>
    // </BrowserRouter>
  );
}
