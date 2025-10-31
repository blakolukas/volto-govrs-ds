
function CarouselSchema() {
  return {
    title: 'Carousel',
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
}




export default CarouselSchema;