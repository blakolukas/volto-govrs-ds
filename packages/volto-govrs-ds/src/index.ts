import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';
import './theme/_main.scss';

import carouselSvg from '@plone/volto/icons/image.svg';

import CarouselEdit from './components/Carousel/Edit';
import CarouselView from './components/Carousel/View';
import CarouselSchema from './components/Carousel/Schema';

function applyConfig(config: ConfigType) {
  installSettings(config);

  // Use type assertion to avoid TypeScript error
  (config.blocks.blocksConfig as any).govrsCarousel = {
    id: 'govrsCarousel',
    title: 'GovRS Carousel',
    icon: carouselSvg,
    group: 'common',
    view: CarouselView,
    edit: CarouselEdit,
    schema: CarouselSchema,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  return config;
}

export default applyConfig;
