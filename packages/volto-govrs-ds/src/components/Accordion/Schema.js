import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Accordion: {
    id: 'Accordion',
    defaultMessage: 'Accordion',
  },
  Options: {
    id: 'Options',
    defaultMessage: 'Options',
  },
  Default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  AccordionTitle: {
    id: 'Accordion title',
    defaultMessage: 'Accordion title',
  },
  AccordionBlock: {
    id: 'Accordion block',
    defaultMessage: 'Accordion block',
  },
  Heading2: {
    id: 'Heading 2',
    defaultMessage: 'Heading 2',
  },
  Heading3: {
    id: 'Heading 3',
    defaultMessage: 'Heading 3',
  },
  Heading4: {
    id: 'Heading 4',
    defaultMessage: 'Heading 4',
  },
  Heading5: {
    id: 'Heading 5',
    defaultMessage: 'Heading 5',
  },
  Heading6: {
    id: 'Heading 6',
    defaultMessage: 'Heading 6',
  },
  Title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  friendly_name: {
    id: 'Friendly name',
    defaultMessage: 'Friendly name',
  },
  title_size: {
    id: 'Title size',
    defaultMessage: 'Title size',
  },
  title_size_description: {
    id: 'Accordion Title size',
    defaultMessage: 'Accordion Title size',
  },
  right_arrows: {
    id: 'Title Icon on the right',
    defaultMessage: 'Title Icon on the right',
  },
  collapsed: {
    id: 'Collapsed by default',
    defaultMessage: 'Collapsed by default',
  },
  non_exclusive: {
    id: 'Non exclusive',
    defaultMessage: 'Non exclusive',
  },
  non_exclusive_description: {
    id: 'Allow multiple panels open at a time',
    defaultMessage: 'Allow multiple panels open at a time',
  },
  filtering: {
    id: 'Enable filtering',
    defaultMessage: 'Enable filtering',
  },
  initialPanels: {
    id: 'Initial number of panels',
    defaultMessage: 'Initial number of panels',
  },
  initialPanels_description: {
    id: 'Number of panels to create when the accordion is empty',
    defaultMessage: 'Number of panels to create when the accordion is empty',
  },
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  ThemeHelp: {
    id: 'Accordion theme',
    defaultMessage: 'Accordion theme',
  },
  ThemePrimary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  ThemeSecondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  ThemeTertiary: {
    id: 'Tertiary',
    defaultMessage: 'Tertiary',
  },
  headline: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },
});

export const AccordionSchema = (intl) => {
  return {
    title: intl.formatMessage(messages.Accordion),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
        fields: ['panel_title'],
      },
    ],
    properties: {
      panel_title: {
        title: intl.formatMessage(messages.AccordionTitle),
      },
    },
    required: [],
  };
};

export const AccordionBlockSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.AccordionBlock),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.Default),
    },
    {
      id: 'options',
      title: intl.formatMessage(messages.Options),
      fields: [
        'headline',
        'title',
        'title_size',
        'block_color',
        'right_arrows',
        'collapsed',
        'non_exclusive',
        'filtering',
        'initialPanels',
      ],
    },
  ],
  properties: {
    headline: {
      title: intl.formatMessage(messages.headline),
    },
    title: {
      title: intl.formatMessage(messages.Title),
      description: intl.formatMessage(messages.friendly_name),
      type: 'string',
    },
    data: {
      title: intl.formatMessage(messages.Accordion),
      type: 'panels',
      schema: AccordionSchema(intl),
    },
    title_size: {
      title: intl.formatMessage(messages.title_size),
      description: intl.formatMessage(messages.title_size_description),
      type: 'string',
      factory: 'Choice',
      choices: [
        ['h2', intl.formatMessage(messages.Heading2)],
        ['h3', intl.formatMessage(messages.Heading3)],
        ['h4', intl.formatMessage(messages.Heading4)],
        ['h5', intl.formatMessage(messages.Heading5)],
        ['h6', intl.formatMessage(messages.Heading6)],
      ],
    },
    block_color: {
      title: intl.formatMessage(messages.Theme),
      description: intl.formatMessage(messages.ThemeHelp),
      type: 'string',
      factory: 'Choice',
      choices: [
        ['default', 'Default'],
        ['dark', 'Dark'],
      ],
      default: 'default',
    },
    right_arrows: {
      title: intl.formatMessage(messages.right_arrows),
      type: 'boolean',
      default: true,
    },
    collapsed: {
      title: intl.formatMessage(messages.collapsed),
      type: 'boolean',
      default: true,
    },
    non_exclusive: {
      title: intl.formatMessage(messages.non_exclusive),
      description: intl.formatMessage(messages.non_exclusive_description),
      type: 'boolean',
      default: true,
    },
    filtering: {
      title: intl.formatMessage(messages.filtering),
      type: 'boolean',
      default: false,
    },
    initialPanels: {
      title: intl.formatMessage(messages.initialPanels),
      description: intl.formatMessage(messages.initialPanels_description),
      type: 'number',
      minimum: 1,
      maximum: 10,
      default: 1,
    },
  },
  required: [],
});
