import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import CarouselView from './View';
import { BlockDataForm } from '@plone/volto/components/manage/Form';

function CarouselEdit({ data, onChangeBlock, block, selected }) {
  const schema = {
    title: 'Carousel Settings',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['items', 'autoplay', 'autoplaySpeed'],
      },
    ],
    properties: {
      items: {
        title: 'Carousel Items',
        type: 'array',
        widget: 'object_list',
        schema: {
          title: 'Item',
          fieldsets: [
            {
              id: 'default',
              title: 'Default',
              fields: ['title', 'description', 'image', 'videoUrl'],
            },
          ],
          properties: {
            title: {
              title: 'Title',
              type: 'string',
            },
            description: {
              title: 'Description',
              type: 'string',
              widget: 'textarea',
            },
            image: {
              title: 'Image URL',
              description: 'URL for an image (used if no video URL is provided)',
              type: 'string',
            },
            videoUrl: {
              title: 'Video URL',
              description: 'URL for a video (takes priority over image)',
              type: 'string',
            },
          },
        },
        default: [],
      },
      autoplay: {
        title: 'Autoplay',
        description: 'Enable automatic slide transition',
        type: 'boolean',
        default: true,
      },
      autoplaySpeed: {
        title: 'Autoplay Speed (ms)',
        description: 'Time between slides in milliseconds',
        type: 'number',
        default: 3000,
      },
    },
    required: [],
  };

  return (
    <div className="block-editor-carousel">
      <CarouselView data={data} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title="Carousel Settings"
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </div>
  );
}

export default CarouselEdit;