import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from '../layouts/Base';
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import Media from '../pages/Media/Media';
import About from '../pages/About/About';
import Downloads from '../pages/Downloads/Downloads';
import config from '../../src/config/config';
import './App.css';

function App() {
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
        title: "Downloads",
        subtitle: "Download our game for your platform",
        logoSrc: config.assets.images.gameLogo,
        logoAlt: "Game Logo"
      }
    },
    { path: config.routes.game, element: <Game /> },
    { path: config.routes.media, element: <Media /> },
    { 
      path: config.routes.about, 
      element: <About />,
      headerProps: {
        title: "Burned Games",
        subtitle: "Meet the Team Behind Warhammer 40.000: The Last Marine",
        logoSrc: config.assets.images.gameLogo,
        logoAlt: "Team Logo",
      }
    },
  ];

  return (
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
  );
}

export default App;
