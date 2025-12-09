import FooterComponent from './Footer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './Footer.css';
import '../../../../../components/SiteMapFooter/SiteMapFooter.css';
import '../../../../../components/RedesSociais/RedesSociais.css';
import '../../../../../components/LocalData/LocalData.css';

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

// Mock local data for LocalData component
const mockLocalData = {
  '@id': '/local-1',
  title: 'PROCERGS',
  logradouro: 'Praça dos Açorianos - Av. Loureiro da Silva',
  numero: 's/n',
  bairro: 'Centro Histórico',
  municipio: 'Porto Alegre',
  estado: 'RS',
  CEP: '90010-340',
};

const createMockStore = (navigationItems = mockNavigationItems, localData = mockLocalData) => {
  return mockStore({
    navigation: {
      items: navigationItems,
    },
    intl: {
      locale: 'pt-BR',
      messages: {},
    },
    content: {
      subrequests: {
        local: {
          data: localData,
          loading: false,
          error: null,
        },
      },
    },
  });
};

// Mock fetch for Storybook
const mockFetch = () => {
  return Promise.resolve({
    json: () => Promise.resolve({
      items: mockNavigationItems,
    }),
  });
};

const meta = {
  title: 'Theme/Footer',
  component: FooterComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      // Mock fetch for navigation API
      global.fetch = mockFetch;

      return (
        <MemoryRouter>
          <IntlProvider locale="pt-BR" messages={{}}>
            <Story />
          </IntlProvider>
        </MemoryRouter>
      );
    },
  ],
  argTypes: {
    images: {
      control: 'object',
      description: 'Array de URLs de imagens a serem exibidas no footer (máximo de 2 imagens). Se não fornecido, usa imagens padrão.',
    },
  },
};

export default meta;

const CodeSnippet = ({ code }) => (
  <pre
    style={{
      backgroundColor: '#f5f5f5',
      padding: '10px',
      borderRadius: '4px',
      overflowX: 'auto',
      fontSize: '14px',
      color: '#333',
      border: '1px solid #eee',
    }}
  >
    <code>{code}</code>
  </pre>
);

export const FooterDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 900 }}>
    <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      Especificações do Componente Footer
    </h3>

    <p>
      O componente Footer é o rodapé padrão da aplicação, composto por quatro
      elementos principais: mapa do site (SiteMapFooter), dados locais (LocalData),
      redes sociais (RedesSociais) e imagens customizáveis (FooterImages).
    </p>

    <h4 style={{ marginTop: 20 }}>Estrutura do Footer</h4>
    <ul style={{ lineHeight: 1.8 }}>
      <li>
        <strong>Brasão RS:</strong> Imagem do brasão do Rio Grande do Sul
        (fixa)
      </li>
      <li>
        <strong>SiteMapFooter:</strong> Mapa do site com navegação em
        accordion (apenas itens com subitems são exibidos)
      </li>
      <li>
        <strong>LocalData:</strong> Exibe informações de endereço/localização
        buscadas dinamicamente de uma URL (como logradouro, número, título)
      </li>
      <li>
        <strong>RedesSociais:</strong> Links para redes sociais
      </li>
      <li>
        <strong>FooterImages:</strong> Imagens customizáveis (máximo 2)
      </li>
      <li>
        <strong>Licença:</strong> Texto de licença de uso na parte inferior
      </li>
    </ul>

    <h4 style={{ marginTop: 30 }}>Prop: images</h4>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        images{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Array de strings com URLs das imagens a serem exibidas no footer.{' '}
        <strong>Limite máximo: 2 imagens.</strong> Se não fornecido ou vazio,
        nenhuma imagem customizada será exibida.
      </p>
      <CodeSnippet
        code={`<Footer images={['/brasao-RS-contraste.svg', '/facebook.svg']} />`}
      />
      <p style={{ marginTop: 8, fontSize: '14px', color: '#666' }}>
        ⚠️ Se mais de 2 imagens forem fornecidas, apenas as 2 primeiras serão
        exibidas.
      </p>
    </div>

    <h4 style={{ marginTop: 30 }}>Comportamento do SiteMapFooter</h4>
    <p>
      O mapa do site é renderizado dinamicamente com base nos dados de
      navegação do Redux. Características:
    </p>
    <ul style={{ lineHeight: 1.8 }}>
      <li>
        <strong>Filtragem automática:</strong> Apenas itens que possuem
        subitems são exibidos
      </li>
      <li>
        <strong>Accordion mobile:</strong> Em telas menores que 835px, os itens
        são expansíveis
      </li>
      <li>
        <strong>Grid responsivo:</strong> Em desktop, exibe os itens em grid
      </li>
      <li>
        <strong>Limite de 4 itens:</strong> O CSS limita a exibição de até 4
        categorias principais
      </li>
    </ul>

    <h4 style={{ marginTop: 30 }}>Responsividade</h4>
    <div
      style={{
        display: 'grid',
        gap: '15px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        marginTop: 15,
      }}
    >
      <div
        style={{
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      >
        <strong>Mobile (&lt; 835px)</strong>
        <ul style={{ fontSize: '14px', marginTop: 8 }}>
          <li>Accordion expansível para navegação</li>
          <li>Fundo verde escuro</li>
          <li>Ícones de expandir/recolher</li>
        </ul>
      </div>
      <div
        style={{
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      >
        <strong>Desktop (≥ 835px)</strong>
        <ul style={{ fontSize: '14px', marginTop: 8 }}>
          <li>Grid de navegação sempre visível</li>
          <li>Fundo verde padrão</li>
          <li>Sem accordion (tudo expandido)</li>
        </ul>
      </div>
    </div>

    <h4 style={{ marginTop: 30 }}>Exemplos de Uso</h4>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>1. Footer Padrão (sem imagens customizadas)</h5>
      <CodeSnippet code={`<Footer />`} />
      <p style={{ fontSize: '14px', color: '#666', marginTop: 4 }}>
        Renderiza o footer sem imagens customizadas. FooterImages retorna null.
      </p>
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>2. Footer com 1 imagem</h5>
      <CodeSnippet
        code={`<Footer images={['/logo_branca.svg']} />`}
      />
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>3. Footer com 2 imagens (máximo)</h5>
      <CodeSnippet
        code={`<Footer images={['/brasao-RS-contraste.svg', '/facebook.svg']} />`}
      />
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>4. Footer com mais de 2 imagens</h5>
      <CodeSnippet
        code={`<Footer images={['/img1.svg', '/img2.svg', '/img3.svg', '/img4.svg']} />`}
      />
      <p style={{ fontSize: '14px', color: '#666', marginTop: 4 }}>
        ℹ️ Apenas as 2 primeiras imagens (/img1.svg e /img2.svg) serão exibidas.
      </p>
    </div>

    <h4 style={{ marginTop: 30 }}>Componente LocalData</h4>
    <p>
      O componente LocalData busca e exibe informações de endereço/localização
      dinamicamente. Ele faz uma requisição para uma URL específica e renderiza
      os dados recebidos.
    </p>
    <ul style={{ lineHeight: 1.8 }}>
      <li>
        <strong>URL configurável:</strong> Por padrão busca de{' '}
        <code>/local-1</code>, mas pode ser customizada via prop{' '}
        <code>url</code>
      </li>
      <li>
        <strong>Estados de carregamento:</strong> Exibe "Carregando..." durante
        a requisição
      </li>
      <li>
        <strong>Renderização condicional:</strong> Só exibe o separador e dados
        quando há informações disponíveis
      </li>
      <li>
        <strong>Dados exibidos:</strong> <code>title</code> (título/nome do
        local) e <code>logradouro</code> + <code>numero</code> (endereço)
      </li>
      <li>
        <strong>Integração Redux:</strong> Usa subrequest com chave{' '}
        <code>"local"</code> para armazenar dados separadamente
      </li>
    </ul>
    <CodeSnippet
      code={`// Uso no Footer
<LocalData url="/local-1" />

// Estrutura de dados esperada
{
  title: "Sede Central",
  logradouro: "Av. Borges de Medeiros",
  numero: "1501",
  municipio: "Porto Alegre",
  estado: "RS"
}`}
    />

    <h4 style={{ marginTop: 30 }}>Requisitos de Dados</h4>
    <p>
      O Footer depende do Redux store com a seguinte estrutura:
    </p>
    <CodeSnippet
      code={`{
  navigation: {
    items: [
      {
        title: "Categoria",
        url: "/categoria",
        items: [
          { title: "Subitem 1", url: "/categoria/subitem-1" },
          { title: "Subitem 2", url: "/categoria/subitem-2" }
        ]
      }
    ]
  },
  intl: {
    locale: "pt-BR"
  },
  content: {
    subrequests: {
      local: {
        data: {
          title: "Sede Central",
          logradouro: "Av. Borges de Medeiros",
          numero: "1501"
        },
        loading: false,
        error: null
      }
    }
  }
}`}
    />

    <h4 style={{ marginTop: 30 }}>Notas Importantes</h4>
    <ul style={{ lineHeight: 1.8 }}>
      <li>
        O Footer requer <code>Provider</code> do Redux e{' '}
        <code>IntlProvider</code> do react-intl
      </li>
      <li>
        Itens de navegação sem subitems <strong>não são exibidos</strong> no
        mapa do site
      </li>
      <li>
        <strong>LocalData:</strong> Faz uma requisição automática ao montar o
        componente. Se não houver dados, nada é renderizado (incluindo o
        separador)
      </li>
      <li>
        <strong>LocalData URL:</strong> Por padrão busca de <code>/local-1</code>.
        Pode ser customizada passando a prop <code>url</code> para LocalData
      </li>
      <li>
        Imagens quebradas são automaticamente ocultadas (onError handler)
      </li>
      <li>
        O CSS limita a exibição a 4 categorias principais via{' '}
        <code>:nth-child(n + 5)</code>
      </li>
    </ul>
  </div>
);

FooterDocumentacao.story = { name: '1. Documentação e Especificações' };

export const FooterPadrao = () => {
  const store = createMockStore();

  return (
    <Provider store={store}>
      <FooterComponent images={['/logo_branca.svg', '/logo_branca.svg']} />
    </Provider>
  );
};

FooterPadrao.storyName = 'Padrão';

export const FooterComImagensCustomizadas = () => {
  const store = createMockStore();

  return (
    <div style={{ padding: 16 }}>
      <h4 style={{ marginBottom: 16 }}>Footer com 2 imagens customizadas</h4>
      <Provider store={store}>
        <FooterComponent images={['/brasao-RS-contraste.svg', '/facebook.svg']} />
      </Provider>
      <CodeSnippet
        code={`<Footer images={['/brasao-RS-contraste.svg', '/facebook.svg']} />`}
      />
    </div>
  );
};

FooterComImagensCustomizadas.storyName = 'Com Imagens Customizadas';

export const FooterSemImagens = () => {
  const store = createMockStore();

  return (
    <div style={{ padding: 16 }}>
      <h4 style={{ marginBottom: 16 }}>Footer sem imagens (prop images vazia)</h4>
      <Provider store={store}>
        <FooterComponent images={[]} />
      </Provider>
      <CodeSnippet code={`<Footer images={[]} />`} />
    </div>
  );
};

FooterSemImagens.storyName = 'Sem Imagens';

export const FooterMobile = () => {
  const store = createMockStore();

  return (
    <div style={{ maxWidth: '375px', margin: '0 auto' }}>
      <Provider store={store}>
        <FooterComponent images={['/brasao-RS-contraste.svg', '/facebook.svg']} />
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
        <FooterComponent images={['/brasao-RS-contraste.svg', '/logo_branca.svg']} />
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

export const FooterSemLocalData = () => {
  const store = createMockStore(mockNavigationItems, null);

  return (
    <div style={{ padding: 16 }}>
      <h4 style={{ marginBottom: 16 }}>
        Footer sem dados locais (LocalData não aparece)
      </h4>
      <Provider store={store}>
        <FooterComponent images={['/brasao-RS-contraste.svg', '/facebook.svg']} />
      </Provider>
      <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
        ℹ️ Quando não há dados locais disponíveis, o componente LocalData não é
        renderizado (retorna null).
      </p>
    </div>
  );
};

FooterSemLocalData.storyName = 'Sem Dados Locais';