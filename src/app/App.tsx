import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from '../layouts/Base';
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import Media from '../pages/Media/Media';
import About from '../pages/About/About';
import Downloads from '../pages/Downloads/Downloads';
import './App.css';

function App() {
  const basename = process.env.PUBLIC_URL || '/';

  const defaultHeaderProps = {
    title: "Warhammer 40.000",
    subtitle: "The Last Marine",
    logoSrc: `${process.env.PUBLIC_URL}/images/logo.png`,
    logoAlt: "Game Logo"
  };

  const routes = [
    { path: '/', element: <Home />, hideHeader: true },
    { path: '/game', element: <Game /> },
    { path: '/media', element: <Media /> },
    { path: '/about', element: <About /> },
    { path: '/downloads', element: <Downloads /> }
  ];

  return (
    <Router basename={basename}>
      <Routes>
        {routes.map(({ path, element, hideHeader }) => (
          <Route
            key={path}
            path={path}
            element={
              <Base headerProps={defaultHeaderProps} hideHeader={hideHeader}>
                {element}
              </Base>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
