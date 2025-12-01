function CarouselSchema() {
  return {
    title: 'Carousel',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'items',
          'autoplay',
          'autoplaySpeed',
          'circular',
          'width',
          'indicators',
          'enableSwipe',
          'noArrowsMobile',
        ],
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
              description:
                'URL for an image (used if no video URL is provided)',
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
      circular: {
        title: 'Circular Navigation',
        description: 'Enable looping from last slide to first slide',
        type: 'boolean',
        default: true,
      },
      width: {
        title: 'Width',
        description: 'Different width options for the carousel',
        type: 'string',
        choices: [
          ['default', 'Default'],
          ['full', 'Full Width'],
        ],
        default: 'default',
      },
      indicators: {
        title: 'Indicators',
        description: 'Different navigation indicators',
        type: 'string',
        choices: [
          ['default', 'Default'],
          ['inside', 'Inside'],
          ['numbers', 'Numbers'],
        ],
        default: 'default',
      },
      enableSwipe: {
        title: 'Enable Swipe on Mobile',
        description:
          'Allow users to swipe/scroll with finger on mobile devices. When disabled, only arrow navigation is available.',
        type: 'boolean',
        default: true,
      },
      noArrowsMobile: {
        title: 'Hide Arrows on Mobile',
        description: 'Hide navigation arrows on mobile devices.',
        type: 'boolean',
        default: false,
      },
    },
    required: [],
  };
}

export default CarouselSchema;
