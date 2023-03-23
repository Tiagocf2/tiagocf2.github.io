import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

const AppRouter = (): JSX.Element => {
  return <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>;
};

export default AppRouter;
