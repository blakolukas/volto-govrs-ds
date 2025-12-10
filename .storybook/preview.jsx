import '@plone/volto/config'; // This is the bootstrap for the global config - client side
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import enMessages from '@root/../locales/en.json';

import '@root/theme';

// Mock Redux store for Storybook
const mockReducer = (state = {}, action) => state;

const mockStore = createStore(mockReducer, {
  navigation: {
    items: [
      {
        title: 'Home',
        url: '/',
        items: [],
      },
      {
        title: 'Serviços',
        url: '/servicos',
        items: [
          { title: 'Serviço 1', url: '/servicos/1', items: [] },
          { title: 'Serviço 2', url: '/servicos/2', items: [] },
        ],
      },
      {
        title: 'Sobre',
        url: '/sobre',
        items: [],
      },
    ],
  },
  userSession: {
    token: null,
  },
  content: {
    data: {
      '@components': {
        actions: {
          site_actions: [],
        },
      },
    },
  },
  site: {
    data: {
      'plone.site_title': 'Governo do Estado do Rio Grande do Sul',
    },
  },
});

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Typography',
        ['Headers', 'Paragraphs', 'Lists'],
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={mockStore}>
      <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
        <StaticRouter location="/">
          <Story />
        </StaticRouter>
      </IntlProvider>
    </Provider>
  ),
];
