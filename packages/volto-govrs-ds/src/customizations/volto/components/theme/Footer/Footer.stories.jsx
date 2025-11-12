import FooterComponent from './Footer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './Footer.css';
import '../../../../../components/SiteMapFooter/SiteMapFooter.css';
import '../../../../../components/RedesSociais/RedesSociais.css';

const mockStore = configureStore([]);

// Mock navigation data for SiteMapFooter
const mockNavigationItems = [
  {
    title: 'Serviços',
    url: '/servicos',
    items: [
      { title: 'Consulta de Processos', url: '/servicos/consulta-processos' },
      { title: 'Emissão de Certidões', url: '/servicos/emissao-certidoes' },
      { title: 'Agendamento Online', url: '/servicos/agendamento' },
      { title: 'Protocolo Digital', url: '/servicos/protocolo' },
    ],
  },
  {
    title: 'Institucional',
    url: '/institucional',
    items: [
      { title: 'Sobre Nós', url: '/institucional/sobre' },
      { title: 'Estrutura Organizacional', url: '/institucional/estrutura' },
      { title: 'Legislação', url: '/institucional/legislacao' },
      { title: 'Transparência', url: '/institucional/transparencia' },
    ],
  },
  {
    title: 'Notícias',
    url: '/noticias',
    items: [
      { title: 'Últimas Notícias', url: '/noticias/ultimas' },
      { title: 'Comunicados', url: '/noticias/comunicados' },
      { title: 'Eventos', url: '/noticias/eventos' },
    ],
  },
  {
    title: 'Contato',
    url: '/contato',
    items: [
      { title: 'Fale Conosco', url: '/contato/fale-conosco' },
      { title: 'Ouvidoria', url: '/contato/ouvidoria' },
      { title: 'Localização', url: '/contato/localizacao' },
    ],
  },
];

const createMockStore = (navigationItems = mockNavigationItems) => {
  return mockStore({
    navigation: {
      items: navigationItems,
    },
    intl: {
      locale: 'pt-BR',
      messages: {},
    },
  });
};

export default {
  title: 'Theme/Footer',
  component: FooterComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <IntlProvider locale="pt-BR" messages={{}}>
          <Story />
        </IntlProvider>
      </MemoryRouter>
    ),
  ],
};

export const FooterPadrao = () => {
  const store = createMockStore();

  return (
    <Provider store={store}>
      <FooterComponent />
    </Provider>
  );
};

FooterPadrao.storyName = 'Padrão';

export const FooterComMuitosItens = () => {
  const extendedItems = [
    ...mockNavigationItems,
    {
      title: 'Recursos',
      url: '/recursos',
      items: [
        { title: 'Downloads', url: '/recursos/downloads' },
        { title: 'Documentos', url: '/recursos/documentos' },
        { title: 'Manuais', url: '/recursos/manuais' },
        { title: 'FAQ', url: '/recursos/faq' },
      ],
    },
    {
      title: 'Acessibilidade',
      url: '/acessibilidade',
      items: [
        { title: 'Declaração de Acessibilidade', url: '/acessibilidade/declaracao' },
        { title: 'Recursos de Acessibilidade', url: '/acessibilidade/recursos' },
      ],
    },
  ];

  const store = createMockStore(extendedItems);

  return (
    <Provider store={store}>
      <FooterComponent />
    </Provider>
  );
};

FooterComMuitosItens.storyName = 'Com Muitos Itens';

export const FooterPoucosItens = () => {
  const limitedItems = [
    {
      title: 'Serviços',
      url: '/servicos',
      items: [
        { title: 'Consulta de Processos', url: '/servicos/consulta-processos' },
        { title: 'Emissão de Certidões', url: '/servicos/emissao-certidoes' },
      ],
    },
    {
      title: 'Contato',
      url: '/contato',
      items: [
        { title: 'Fale Conosco', url: '/contato/fale-conosco' },
      ],
    },
  ];

  const store = createMockStore(limitedItems);

  return (
    <Provider store={store}>
      <FooterComponent />
    </Provider>
  );
};

FooterPoucosItens.storyName = 'Poucos Itens';

export const FooterMobile = () => {
  const store = createMockStore();

  return (
    <div style={{ maxWidth: '375px', margin: '0 auto' }}>
      <Provider store={store}>
        <FooterComponent />
      </Provider>
    </div>
  );
};

FooterMobile.storyName = 'Mobile (375px)';
FooterMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const FooterTablet = () => {
  const store = createMockStore();

  return (
    <div>
      <Provider store={store}>
        <FooterComponent />
      </Provider>
    </div>
  );
};

FooterTablet.storyName = 'Tablet (768px)';
FooterTablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const FooterSemItens = () => {
  const store = createMockStore([]);

  return (
    <Provider store={store}>
      <FooterComponent />
    </Provider>
  );
};

FooterSemItens.storyName = 'Sem Itens de Navegação';
