import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { View } from './View';

/**
 * Helper function to create accordion data structure with sample content
 */
const createAccordionData = (numPanels = 3) => {
  const blocks = {};
  const items = [];

  const sampleContent = [
    {
      title: 'O que é o Volto?',
      content:
        'Volto é o frontend moderno do Plone CMS, construído com React. Ele oferece uma experiência de edição intuitiva e componentes reutilizáveis para criar sites dinâmicos.',
    },
    {
      title: 'Como instalar o Volto?',
      content:
        'Para instalar o Volto, você precisa ter Node.js instalado. Execute "npm install -g @plone/create-volto-app" e depois "create-volto-app my-app" para criar um novo projeto.',
    },
    {
      title: 'Quais são as principais funcionalidades?',
      content:
        'O Volto oferece edição inline, arrastar e soltar blocos, prévia em tempo real, suporte a múltiplos idiomas, e uma arquitetura de blocos extensível para customização.',
    },
    {
      title: 'Como configurar temas personalizados?',
      content:
        'Você pode personalizar o tema do Volto através de arquivos de configuração, sobrescrevendo componentes padrão, e utilizando o sistema de temas do Semantic UI React.',
    },
    {
      title: 'Qual é a arquitetura do Volto?',
      content:
        'O Volto segue uma arquitetura baseada em componentes React, utilizando Redux para gerenciamento de estado, React Router para navegação, e blocos reutilizáveis para construção de conteúdo.',
    },
  ];

  for (let i = 0; i < numPanels; i++) {
    const panelId = uuid();
    const contentBlockId = uuid();
    const content = sampleContent[i % sampleContent.length];

    blocks[panelId] = {
      '@type': 'accordionPanel',
      title: content.title,
      blocks: {
        [contentBlockId]: {
          '@type': 'slate',
          value: [
            {
              type: 'p',
              children: [
                {
                  text: content.content,
                },
              ],
            },
          ],
          plaintext: content.content,
        },
      },
      blocks_layout: {
        items: [contentBlockId],
      },
    };
    items.push(panelId);
  }

  return {
    blocks,
    blocks_layout: {
      items,
    },
  };
};

export default {
  title: 'Blocks/Accordion',
  parameters: { layout: 'padded' },
};

const lintWarnings = [
  "Warning: imports from '@plone/volto/*' barrel files are discouraged",
];

export const AccordionDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 1200 }}>
    <h3 style={{ marginTop: 0 }}>Accordion</h3>

    <section style={{ marginBottom: 24 }}>
      <MemoryRouter>
        <div style={{ maxWidth: '800px' }}>
          <View
            data={{
              headline: 'Perguntas Frequentes',
              title_size: 'h5',
              block_color: 'default',
              right_arrows: true,
              collapsed: false,
              non_exclusive: true,
              filtering: false,
              data: createAccordionData(3),
            }}
            metadata={{}}
            properties={{}}
          />
        </div>
      </MemoryRouter>
    </section>

    <section style={{ marginBottom: 24 }}>
      <p style={{ color: '#444' }}>
        O componente <code>Accordion</code> exibe conteúdo colapsável em
        painéis. Suporta múltiplos modos de exibição, temas de cores,
        busca/filtro e controle de estado dos painéis.
      </p>
    </section>

    <div style={{ marginTop: 16 }}>
      <h5>Lint Warnings</h5>
      <pre style={{ background: '#fff8e1', padding: 12, borderRadius: 4 }}>
        {lintWarnings.join('\n')}
      </pre>
    </div>

    <section style={{ marginBottom: 24 }}>
      <h4 style={{ margin: '6px 0' }}>Propriedades</h4>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>headline</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Título principal exibido acima do accordion. Opcional, pode ser usado
          para dar contexto ao conteúdo dos painéis.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data={{ headline: 'Perguntas Frequentes', ... }}`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>title_size</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Define o nível semântico (tag HTML) dos títulos de cada painel.
          Importante para acessibilidade e SEO. Opções: <code>h2</code>,{' '}
          <code>h3</code>, <code>h4</code>, <code>h5</code>, <code>h6</code>.
          Padrão: <code>h3</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data={{ title_size: 'h3', ... }}`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>block_color</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Tema de cores do accordion. Opções: <code>default</code> (padrão),{' '}
          <code>light</code> (claro), <code>dark</code> (escuro),{' '}
          <code>darker</code> (mais escuro). Padrão: <code>default</code>.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <MemoryRouter>
            <div style={{ flex: 1 }}>
              <h6>Default</h6>
              <View
                data={{
                  title_size: 'h5',
                  block_color: 'default',
                  right_arrows: true,
                  collapsed: false,
                  non_exclusive: true,
                  filtering: false,
                  data: createAccordionData(2),
                }}
                metadata={{}}
                properties={{}}
              />
            </div>
          </MemoryRouter>
          <MemoryRouter>
            <div style={{ flex: 1 }}>
              <h6>Dark</h6>
              <View
                data={{
                  title_size: 'h5',
                  block_color: 'dark',
                  right_arrows: true,
                  collapsed: false,
                  non_exclusive: true,
                  filtering: false,
                  data: createAccordionData(2),
                }}
                metadata={{}}
                properties={{}}
              />
            </div>
          </MemoryRouter>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            marginTop: 12,
          }}
        >
          <code>{`data={{ block_color: 'default', ... }}
data={{ block_color: 'dark', ... }}`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>right_arrows</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Posição do ícone de seta indicadora. Quando <code>true</code>, exibe à
          direita; quando <code>false</code>, exibe à esquerda do título.
          Padrão: <code>true</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data={{ right_arrows: true, ... }}  // setas à direita
data={{ right_arrows: false, ... }} // setas à esquerda`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>collapsed</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Estado inicial dos painéis. Quando <code>true</code>, todos começam
          fechados; quando <code>false</code>, o primeiro painel inicia aberto.
          Padrão: <code>false</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data={{ collapsed: false, ... }} // primeiro aberto
data={{ collapsed: true, ... }}  // todos fechados`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>non_exclusive</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Modo de abertura dos painéis. Quando <code>true</code>, múltiplos
          painéis podem estar abertos; quando <code>false</code>, apenas um por
          vez (exclusivo). Padrão: <code>true</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data={{ non_exclusive: true, ... }}  // múltiplos abertos
data={{ non_exclusive: false, ... }} // apenas um aberto`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h5 style={{ margin: '6px 0' }}>filtering</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Habilita campo de busca/filtro acima do accordion para filtrar painéis
          pelo título ou conteúdo. Padrão: <code>false</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data={{ filtering: true, ... }} // com busca/filtro`}</code>
        </pre>
      </div>
    </section>

    <section style={{ marginBottom: 24 }}>
      <h4 style={{ margin: '6px 0' }}>Comportamentos importantes</h4>
      <ul style={{ color: '#444' }}>
        <li>
          No modo exclusivo (<code>non_exclusive: false</code>), ao abrir um
          novo painel, o anterior é fechado automaticamente.
        </li>
        <li>
          O filtro de busca (quando habilitado) funciona tanto no título quanto
          no conteúdo dos painéis.
        </li>
        <li>
          Use títulos semânticos apropriados (<code>title_size</code>) para
          manter a hierarquia correta do documento.
        </li>
        <li>
          O tema escuro (<code>dark</code>) proporciona maior contraste visual e
          é ideal para seções com fundo claro.
        </li>
      </ul>
    </section>
  </div>
);

AccordionDocumentacao.storyName = 'Documentação';

export const AccordionInterativo = ({
  headline,
  title_size,
  block_color,
  right_arrows,
  collapsed,
  non_exclusive,
  filtering,
  numPanels,
}) => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline,
          title_size,
          block_color,
          right_arrows,
          collapsed,
          non_exclusive,
          filtering,
          data: createAccordionData(numPanels),
        }}
        metadata={{}}
        properties={{}}
      />
    </div>
  </MemoryRouter>
);

AccordionInterativo.storyName = 'Interativo';
AccordionInterativo.argTypes = {
  headline: { control: 'text' },
  title_size: {
    control: { type: 'select' },
    options: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },
  block_color: {
    control: { type: 'select' },
    options: ['default', 'light', 'dark', 'darker'],
  },
  right_arrows: { control: 'boolean' },
  collapsed: { control: 'boolean' },
  non_exclusive: { control: 'boolean' },
  filtering: { control: 'boolean' },
  numPanels: { control: { type: 'number', min: 1, max: 5 } },
};

AccordionInterativo.args = {
  headline: 'Perguntas Frequentes',
  title_size: 'h5',
  block_color: 'default',
  right_arrows: true,
  collapsed: false,
  non_exclusive: true,
  filtering: false,
  numPanels: 3,
};

export const TemaEscuro = () => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline: 'Informações Importantes',
          title_size: 'h5',
          block_color: 'dark',
          right_arrows: true,
          collapsed: false,
          non_exclusive: true,
          filtering: false,
          data: createAccordionData(3),
        }}
        metadata={{}}
        properties={{}}
      />
    </div>
  </MemoryRouter>
);

TemaEscuro.storyName = 'Tema Escuro';

export const TodosFechados = () => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline: 'Documentação Técnica',
          title_size: 'h5',
          block_color: 'default',
          right_arrows: true,
          collapsed: true,
          non_exclusive: true,
          filtering: false,
          data: createAccordionData(4),
        }}
        metadata={{}}
        properties={{}}
      />
      <p style={{ marginTop: 16, fontSize: '14px', color: '#666' }}>
        <strong>Nota:</strong> Todos os painéis iniciam fechados. O usuário
        escolhe o que deseja visualizar.
      </p>
    </div>
  </MemoryRouter>
);

TodosFechados.storyName = 'Todos Fechados';

export const ModoExclusivo = () => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline: 'Processo de Instalação',
          title_size: 'h5',
          block_color: 'default',
          right_arrows: true,
          collapsed: false,
          non_exclusive: false,
          filtering: false,
          data: createAccordionData(3),
        }}
        metadata={{}}
        properties={{}}
      />
      <p style={{ marginTop: 16, fontSize: '14px', color: '#666' }}>
        <strong>Nota:</strong> Apenas um painel pode estar aberto por vez. Ao
        abrir um novo, o anterior fecha automaticamente.
      </p>
    </div>
  </MemoryRouter>
);

ModoExclusivo.storyName = 'Modo Exclusivo';

export const SetasEsquerda = () => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline: 'Configurações Avançadas',
          title_size: 'h5',
          block_color: 'default',
          right_arrows: false,
          collapsed: false,
          non_exclusive: true,
          filtering: false,
          data: createAccordionData(3),
        }}
        metadata={{}}
        properties={{}}
      />
      <p style={{ marginTop: 16, fontSize: '14px', color: '#666' }}>
        <strong>Nota:</strong> Ícones de seta posicionados à esquerda dos
        títulos.
      </p>
    </div>
  </MemoryRouter>
);

SetasEsquerda.storyName = 'Setas à Esquerda';

export const ComFiltro = () => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline: 'Base de Conhecimento',
          title_size: 'h5',
          block_color: 'default',
          right_arrows: true,
          collapsed: false,
          non_exclusive: true,
          filtering: true,
          data: createAccordionData(5),
        }}
        metadata={{}}
        properties={{}}
      />
      <p style={{ marginTop: 16, fontSize: '14px', color: '#666' }}>
        <strong>Dica:</strong> Use o campo de busca para filtrar os painéis por
        título ou conteúdo.
      </p>
    </div>
  </MemoryRouter>
);

ComFiltro.storyName = 'Com Filtro de Busca';

export const ConteudoExtensivo = () => (
  <MemoryRouter>
    <div style={{ padding: 16, maxWidth: '800px' }}>
      <View
        data={{
          headline: 'Manual Completo do Volto',
          title_size: 'h5',
          block_color: 'default',
          right_arrows: true,
          collapsed: true,
          non_exclusive: true,
          filtering: true,
          data: createAccordionData(5),
        }}
        metadata={{}}
        properties={{}}
      />
      <div
        style={{
          marginTop: 16,
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
        }}
      >
        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
          <strong>Funcionalidades demonstradas:</strong>
        </p>
        <ul style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
          <li>5 painéis com conteúdo variado</li>
          <li>Busca/filtro habilitado</li>
          <li>Todos os painéis iniciam fechados</li>
          <li>Múltiplos painéis podem ser abertos</li>
        </ul>
      </div>
    </div>
  </MemoryRouter>
);

ConteudoExtensivo.storyName = 'Conteúdo Extensivo';
