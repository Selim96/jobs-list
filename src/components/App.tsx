import React, {lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './Loader';
const Jobboard = lazy(() => import("./Jobboard/Jobboard"));
const Details = lazy(() => import("./Details/Details"));


const App: React.FC = () => {
  const jobBoard = {
    path: "/",
    element: <Jobboard/>
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Jobboard />} />
          
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
