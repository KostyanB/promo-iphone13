import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './components/Context';
import { getGoodDb, selectError, selectStatus } from './store/getGoodDbSlice';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/ErrorLoad';
import Preloader from './components/Styled/Preloader';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getGoodDb());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Router>
          <Suspense fallback={<Preloader top={150} />}>
            {status === 'success' && <AnimatedRoutes />}
          </Suspense>
        </Router>
      </ContextProvider>
      {error && <ErrorLoad text={error} />}
    </>
  );
}
export default App;
