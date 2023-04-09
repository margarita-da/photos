import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { appTheme } from 'core/styles/appTheme';
import { routes } from 'routes';
import './core/styles/main.scss';
import { Header } from 'modules/header';

/**
 * Основной компонент приложения
 * @returns компонент
 */
export const App: FC = () => {
  return (
    <BrowserRouter basename='/'>
      <ThemeProvider theme={appTheme}>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              path={`/${route.path}`}
              element={<route.element />}
              key={route.path}
            />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
