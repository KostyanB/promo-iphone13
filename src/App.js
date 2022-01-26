import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CurrentModelContext } from './components/Context';
import useCurrentModel from './hooks/useCurrentModel';

import { getGoodDb, selectError, selectStatus } from './store/goodSlice';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/ErrorLoad';
import Preloader from './components/Styled/Preloader';
import Header from './components/Header';
import Present from './components/Present';
// const Header = lazy(() => import('./components/Header'));
// const Present = lazy(() => import('./components/Present'));
const Card = lazy(() => import('./components/Card'));

function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus);

  const currentModel = useCurrentModel();

  useEffect(() => {
    dispatch(getGoodDb());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Preloader />}>
        {status === 'success' && (
          <main>
            <CurrentModelContext.Provider value={{ currentModel }}>
              <Present />
              <Card />
            </CurrentModelContext.Provider>
          </main>
        )}
      </Suspense>
      {error && <ErrorLoad text={error} />}
    </>
  );
}
export default App;
