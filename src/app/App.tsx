import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../shared/context/LanguageContext';
import { useTranslation } from '../shared/hooks/useTranslation';
import Base from '../layouts/Base';
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import Media from '../pages/Media/Media';
import About from '../pages/About/About';
import Downloads from '../pages/Downloads/Downloads';
import config from '../config/config';
import { ThemeProvider } from '../providers/ThemeProvider';
import './App.css';

const App: React.FC = () => {
  const { t } = useTranslation();
  
  const routes = [
    { 
      path: config.routes.home, 
      element: <Home />, 
      hideHeader: true 
    },
    { 
      path: config.routes.downloads, 
      element: <Downloads />, 
      headerProps: {
        title: t.downloads.title,
        subtitle: t.downloads.subtitle,
        logoSrc: config.assets.images.gameLogo,
        logoAlt: t.general.altTexts.gameLogo
      }
    },
    { path: config.routes.game, element: <Game /> },
    { path: config.routes.media, element: <Media /> },
    { 
      path: config.routes.about, 
      element: <About />,
      headerProps: {
        title: t.about.title,
        subtitle: t.about.subtitle,
        logoSrc: config.assets.images.gameLogo,
        logoAlt: t.general.altTexts.teamLogo
      }
    }
  ];

  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router basename={config.baseUrl}>
          <Routes>
            {routes.map(({ path, element, hideHeader, headerProps }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Base headerProps={headerProps} hideHeader={hideHeader}>
                    {element}
                  </Base>
                }
              />
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
