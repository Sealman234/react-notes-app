import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllNotes = React.lazy(() => import('./pages/AllNotes'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route path="/notes" element={<AllNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
