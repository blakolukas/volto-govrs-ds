import { v4 as uuid } from 'uuid';
import { map } from 'lodash';

import { Icon as VoltoIcon } from '@plone/volto/components';
import { Icon as SemanticIcon } from 'semantic-ui-react';

import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  blockHasValue,
  emptyBlocksForm,
} from '@plone/volto/helpers';

export const emptyAccordion = (count) => {
  const blocks = {};
  const items = [];
  for (let x = 0; x < count; x++) {
    const id = uuid();
    blocks[id] = {
      ...emptyBlocksForm(),
      '@type': 'accordionPanel',
      title: '',
    };
    items.push(id);
  }

  return {
    blocks,
    blocks_layout: {
      items,
    },
  };
};

export const getPanels = (data) => {
  return (data?.blocks_layout?.items || []).map((id) => [
    id,
    data.blocks?.[id],
  ]);
};

export const accordionBlockHasValue = (content) => {
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const blockValue = map(content[blocksLayoutFieldname].items, (block) => {
    const blockData = content[blocksFieldname]?.[block];
    return blockHasValue(blockData);
  });
  if (content.hasOwnProperty('title') && content?.title.length > 0) return true;
  return blockValue.some((item) => item === true);
};

export const Icon = (props) => {
  const { name, options, ...rest } = props;

  // Fallback to default options if not provided
  const iconOptions = options || {
    iconComponent: 'SemanticIcon',
    size: 'large',
  };

  const componentToRender = iconOptions.iconComponent;

  // Map component names to their actual components
  const componentMap = {
    SemanticIcon,
    VoltoIcon,
  };

  // Get the component from the map based on the configuration
  const IconComponent = componentMap[componentToRender] || SemanticIcon;

  // If no name provided, don't render anything
  if (!name) return null;

  // Semantic UI Icon uses size prop directly (like 'large', 'small', etc.)
  // Volto Icon needs specific size in pixels
  if (componentToRender === 'SemanticIcon') {
    return <IconComponent name={name} size={iconOptions.size} {...rest} />;
  } else {
    return <IconComponent name={name} size={iconOptions.size} {...rest} />;
  }
};
