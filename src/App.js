import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './App.scss';
import { GlobalStyle } from './components/Styled/GlobalStyle';

import ErrorLoad from './components/Styled/ErrorLoad';
import Preloader from './components/Styled/Preloader';

import { getGoodDb, selectError, selectStatus } from './store/goodSlice';

const Header = lazy(() => import('./components/Header'));
const Present = lazy(() => import('./components/Present'));
const Card = lazy(() => import('./components/Card'));

function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getGoodDb());
  }, [dispatch]);

  // return (
  //   <>
  //     {status === 'success' && (
  //       <>
  //         <GlobalStyle />
  //         <div>jhjkhlkjhlk</div>
  //       </>
  //     )}
  //     {status === 'loading' && <Preloader />}
  //     {error && <ErrorLoad />}
  //   </>
  // );

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Preloader />}>
        <Header />
        <main>
          <Present />
          <Card />
        </main>
      </Suspense>
      {error && <ErrorLoad />}
    </>
  );
}
export default App;
