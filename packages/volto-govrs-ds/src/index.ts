import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';
import './theme/_main.scss';

import carouselSvg from '@plone/volto/icons/image.svg';

import CarouselEdit from './components/Carousel/Edit';
import CarouselView from './components/Carousel/View';
import CarouselSchema from './components/Carousel/Schema';
import AccordionView from './components/Accordion/View';
import AccordionEdit from './components/Accordion/Edit';
import {
  AccordionBlockSchema,
  AccordionSchema,
} from './components/Accordion/Schema';
import accordionSVG from '@plone/volto/icons/list-arrows.svg';

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
  // Configure the Accordion block
  (config.blocks.blocksConfig as any).accordion = {
    id: 'accordion',
    title: 'Accordion',
    icon: accordionSVG,
    group: 'common',
    view: AccordionView,
    edit: AccordionEdit,
    blockSchema: AccordionBlockSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: true,
    // Note: Icons are now using FontAwesome in View.jsx
    // To customize, edit the imports in View.jsx:
    // import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
    titleIcons: {
      opened: {
        leftPosition: 'chevron down',
        rightPosition: 'chevron down',
      },
      closed: {
        leftPosition: 'chevron right',
        rightPosition: 'chevron right',
      },
      unfiltered: {
        leftPosition: 'search',
        rightPosition: 'search',
      },
      filtered: {
        leftPosition: 'remove',
        rightPosition: 'remove',
      },
      iconComponent: 'FontAwesome', // Using FontAwesome instead of SemanticIcon
      size: 'large',
    },
    defaults: {
      theme: 'primary',
    },
    options: {},
    extensions: {},
    blocksConfig: config.blocks.blocksConfig,
    allowedBlocks: undefined, // Allow all blocks by default
  };

  // Configure the AccordionPanel block (internal block type used by accordion)
  (config.blocks.blocksConfig as any).accordionPanel = {
    id: 'accordionPanel',
    title: 'Accordion Panel',
    restricted: true, // Not directly addable by users
    blockSchema: ({ intl }: any) => AccordionSchema(intl),
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
}

export default applyConfig;
