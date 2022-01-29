import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ContextProvider } from './components/Context';
// import useCurrentModel from './hooks/useCurrentModel';

import { getGoodDb, selectError, selectStatus } from './store/goodSlice';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import AppRoutes from './components/AppRoutes';
import ErrorLoad from './components/Styled/ErrorLoad';
import Preloader from './components/Styled/Preloader';
import Header from './components/Header';
// import AnimatedRoutes from './components/AnimatedRoutes';
import Main from './components/Main';
import Page404 from './components/Page404';
import Present from './components/Present';
// import Card from './components/Card';
import AnimatedRoutes from './components/AnimatedRoutes';

const Card = lazy(() => import('./components/Card'));
const Characteristic = lazy(() => import('./components/Characteristic'));
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
            {status === 'success' && <AnimatedRoutes />}
            {/* {status === 'success' && <AppRoutes />} */}
          </Suspense>
        </Router>

        {/* {status === 'loading' && <Preloader />} */}
      </ContextProvider>
      {error && <ErrorLoad text={error} />}
    </>
  );
}
export default App;
