import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const handleFetching = async api => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTljNWY3ZjM0NjhmOGJiMTI0NWU0ODg4NWU2NDFmZCIsIm5iZiI6MTcyMTc2NzY2MC4wNDI3MDIsInN1YiI6IjY1ZjIwZWQ2ZTlkYTY5MDE0OTVlNmFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gI10eNaG4LRColzEs6y0nTpYlw-tYDoMdXSvJ7ab_8Y',
      },
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home handleFetching={handleFetching} />} />
        <Route
          path="/movies"
          element={<Movies handleFetching={handleFetching} />}
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails handleFetching={handleFetching} />}
        >
          <Route
            path="cast"
            element={<Cast handleFetching={handleFetching} />}
          />
          <Route
            path="reviews"
            element={<Reviews handleFetching={handleFetching} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
