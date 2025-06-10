import { FC } from 'react';
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import Media from '../pages/Media/Media';
import About from '../pages/About/About';
import Engine from '../pages/Engine/Engine';
import Downloads from '../pages/Downloads/Downloads';
import Enemies from '../pages/Enemies/Enemies';
import Levels from '../pages/Levels/Levels';
import { TranslationType } from '../shared/types/translations';
import config from './config';

interface RouteConfig {
  path: string;
  element: FC;
  hideHeader?: boolean;
  headerProps?: {
    title: string;
    subtitle: string;
    logoSrc?: string;
    logoAlt?: string;
  };
}

export const createRoutes = (t: TranslationType): RouteConfig[] => [
  {
    path: config.routes.home,
    element: Home,
    hideHeader: true
  },
  {
    path: config.routes.downloads,
    element: Downloads,
    headerProps: {
      title: t.downloads.title,
      subtitle: t.downloads.subtitle,
      // logoSrc: config.assets.images.gameLogo,
      logoAlt: t.general.altTexts.gameLogo
    }
  },
  {
    path: config.routes.game,
    element: Game
  },
    {
    path: config.routes.engine,
    element: Engine
  },
  {
    path: config.routes.media,
    element: Media
  },
  {
    path: config.routes.about,
    element: About,
    headerProps: {
      title: t.about.title,
      subtitle: t.about.subtitle,
      // logoSrc: config.assets.images.gameLogo,
      logoAlt: t.general.altTexts.teamLogo
    }
  },
  {
    path: '/enemies',
    element: Enemies,
    hideHeader: true
  },
  {
    path: '/levels',
    element: Levels,
    hideHeader: true
  }
];