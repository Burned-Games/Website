import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../shared/context/LanguageContext';
import { useTranslation } from '../shared/hooks/useTranslation';
import { ThemeProvider } from '../providers/ThemeProvider';
import { createRoutes } from '../config/routes';
import Base from '../shared/layouts/Base';
import config from '../config/config';
import './App.css';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </LanguageProvider>
  );
};

const AppRoutes: React.FC = () => {
  const { t } = useTranslation();
  const routes = createRoutes(t);

  return (
    <Router basename={config.baseUrl}>
      <Routes>
        {routes.map(({ path, element: Element, hideHeader, headerProps }) => (
          <Route
            key={path}
            path={path}
            element={
              <Base headerProps={headerProps} hideHeader={hideHeader}>
                <Element />
              </Base>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
