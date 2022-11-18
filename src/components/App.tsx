import React, {lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './Loader';
const Jobboard = lazy(() => import("./Jobboard/Jobboard"));
const Details = lazy(() => import("./Details/Details"));


const App: React.FC = () => {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Jobboard itemsPerPage={10} />} />
          <Route path='/:id' element={<Details/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
