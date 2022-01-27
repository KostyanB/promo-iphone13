import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ContextProvider } from './components/Context';
// import useCurrentModel from './hooks/useCurrentModel';

import { getGoodDb, selectError, selectStatus } from './store/goodSlice';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/ErrorLoad';
import Preloader from './components/Styled/Preloader';
import Header from './components/Header';
// import AnimatedRoutes from './components/AnimatedRoutes';
import Main from './components/Main/Main';
import Page404 from './components/Page404';
// import Present from './components/Present';
// const Header = lazy(() => import('./components/Header'));
// const Present = lazy(() => import('./components/Present'));
const DeliveryTerms = lazy(() => import('./components/DeliveryTerms'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
// const Card = lazy(() => import('./components/Card'));

function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus);

  // const currentModel = useCurrentModel();

  useEffect(() => {
    dispatch(getGoodDb());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Router>
          {/* <AnimatedRoutes /> */}
          <Suspense fallback={<Preloader />}>
            {/* {status === 'success' && <AnimatedRoutes />} */}
            {status === 'success' && (
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route index element={<Main />} />
                  <Route path="main" element={<Main />} />
                  <Route path="delivery-terms" element={<DeliveryTerms />} />
                  <Route path="feedback" element={<Feedbacks />} />
                </Route>
                <Route path="*" element={<Page404 />} />
              </Routes>
            )}
          </Suspense>
        </Router>

        {/* {status === 'loading' && <Preloader />} */}
      </ContextProvider>
      {error && <ErrorLoad text={error} />}
    </>
  );
}
export default App;
