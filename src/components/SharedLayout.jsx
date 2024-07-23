import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NLink } from './SharedLayout.styled';
import { Loader } from './Loader';
import css from '../components-styles/SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <h1 className={css.firstHeading}>Movies</h1>
          <nav className={css.navigation}>
            <NLink to="/" end>
              Home
            </NLink>
            <NLink to="/movies">Movies</NLink>
          </nav>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
