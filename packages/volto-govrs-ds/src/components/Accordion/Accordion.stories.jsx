import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { emptyBlocksForm } from '@plone/volto/helpers';
import { View } from './View';

/**
 * Helper function to create accordion data structure with sample content
 * @param {number} numPanels - Number of accordion panels to create (default: 3)
 * @returns {Object} Accordion data structure with blocks and layout
 */
const createAccordionData = (numPanels = 3) => {
  const blocks = {};
  const items = [];

  const sampleContent = [
    {
      title: 'O que é o Volto?',
      content: 'Volto é o frontend moderno do Plone CMS, construído com React. Ele oferece uma experiência de edição intuitiva e componentes reutilizáveis para criar sites dinâmicos.',
    },
    {
      title: 'Como instalar o Volto?',
      content: 'Para instalar o Volto, você precisa ter Node.js instalado. Execute "npm install -g @plone/create-volto-app" e depois "create-volto-app my-app" para criar um novo projeto.',
    },
    {
      title: 'Quais são as principais funcionalidades?',
      content: 'O Volto oferece edição inline, arrastar e soltar blocos, prévia em tempo real, suporte a múltiplos idiomas, e uma arquitetura de blocos extensível para customização.',
    },
    {
      title: 'Como configurar temas personalizados?',
      content: 'Você pode personalizar o tema do Volto através de arquivos de configuração, sobrescrevendo componentes padrão, e utilizando o sistema de temas do Semantic UI React.',
    },
    {
      title: 'Qual é a arquitetura do Volto?',
      content: 'O Volto segue uma arquitetura baseada em componentes React, utilizando Redux para gerenciamento de estado, React Router para navegação, e blocos reutilizáveis para construção de conteúdo.',
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

// Storybook configuration with autodocs
export default {
  title: 'Blocks/Accordion',
  component: View,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Componente Accordion para exibição de conteúdo colapsável em painéis. Suporta múltiplos modos de exibição, temas de cores, busca/filtro e controle de estado dos painéis.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headline: {
      control: 'text',
      description: 'Título principal exibido acima do accordion. Opcional, pode ser usado para dar contexto ao conteúdo dos painéis.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    title_size: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Define o nível semântico (tag HTML) dos títulos de cada painel. Importante para acessibilidade e SEO.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h3' },
      },
    },
    block_color: {
      control: { type: 'select' },
      options: ['default', 'light', 'dark', 'darker'],
      description: 'Tema de cores do accordion: "default" (padrão), "light" (claro), "dark" (escuro), "darker" (mais escuro)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    right_arrows: {
      control: 'boolean',
      description: 'Posição do ícone de seta indicadora. Quando true, exibe à direita; quando false, exibe à esquerda do título.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    collapsed: {
      control: 'boolean',
      description: 'Estado inicial dos painéis. Quando true, todos começam fechados; quando false, o primeiro painel inicia aberto.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    non_exclusive: {
      control: 'boolean',
      description: 'Modo de abertura dos painéis. Quando true, múltiplos painéis podem estar abertos; quando false, apenas um por vez (exclusivo).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    filtering: {
      control: 'boolean',
      description: 'Habilita campo de busca/filtro acima do accordion para filtrar painéis pelo título ou conteúdo.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

/**
 * Template base para as stories
 */
const Template = (args) => {
  const data = {
    ...args,
    data: createAccordionData(args.numPanels || 3),
  };

  return React.createElement(View, { data, metadata: {}, properties: {} });
};

/**
 * Story interativa com todos os controles disponíveis.
 * Use esta story para testar diferentes combinações de propriedades.
 */
export const Playground = Template.bind({});
Playground.args = {
  headline: 'Perguntas Frequentes',
  title_size: 'h3',
  block_color: 'default',
  right_arrows: true,
  collapsed: false,
  non_exclusive: true,
  filtering: false,
  numPanels: 3,
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Story interativa que permite testar todas as propriedades do accordion. Use os controles para experimentar diferentes configurações.',
    },
  },
};

/**
 * Accordion com tema escuro.
 * Ideal para seções com fundo claro que precisam de contraste.
 */
export const DarkTheme = Template.bind({});
DarkTheme.args = {
  headline: 'Informações Importantes',
  title_size: 'h3',
  block_color: 'dark',
  right_arrows: true,
  collapsed: false,
  non_exclusive: true,
  filtering: false,
  numPanels: 3,
};
DarkTheme.parameters = {
  docs: {
    description: {
      story: 'Exemplo de accordion com tema escuro, proporcionando maior contraste visual.',
    },
  },
};

/**
 * Todos os painéis iniciam fechados.
 * Útil quando o conteúdo é extenso e você quer dar controle total ao usuário.
 */
export const CollapsedByDefault = Template.bind({});
CollapsedByDefault.args = {
  headline: 'Documentação Técnica',
  title_size: 'h3',
  block_color: 'default',
  right_arrows: true,
  collapsed: true,
  non_exclusive: true,
  filtering: false,
  numPanels: 4,
};
CollapsedByDefault.parameters = {
  docs: {
    description: {
      story: 'Accordion com todos os painéis fechados inicialmente, permitindo que o usuário escolha o que deseja visualizar.',
    },
  },
};

/**
 * Modo exclusivo - apenas um painel aberto por vez.
 * Mantém o foco do usuário em um único conteúdo.
 */
export const ExclusiveMode = Template.bind({});
ExclusiveMode.args = {
  headline: 'Processo de Instalação',
  title_size: 'h3',
  block_color: 'default',
  right_arrows: true,
  collapsed: false,
  non_exclusive: false,
  filtering: false,
  numPanels: 3,
};
ExclusiveMode.parameters = {
  docs: {
    description: {
      story: 'No modo exclusivo, apenas um painel pode estar aberto por vez. Ao abrir um novo painel, o anterior é fechado automaticamente.',
    },
  },
};

/**
 * Setas posicionadas à esquerda.
 * Alternativa visual para melhor alinhamento com alguns designs.
 */
export const LeftArrows = Template.bind({});
LeftArrows.args = {
  headline: 'Configurações Avançadas',
  title_size: 'h3',
  block_color: 'default',
  right_arrows: false,
  collapsed: false,
  non_exclusive: true,
  filtering: false,
  numPanels: 3,
};
LeftArrows.parameters = {
  docs: {
    description: {
      story: 'Accordion com ícones de seta posicionados à esquerda dos títulos.',
    },
  },
};

/**
 * Com funcionalidade de busca/filtro.
 * Permite filtrar painéis por título ou conteúdo quando há muitos itens.
 */
export const WithFiltering = () => {
  const data = {
    headline: 'Base de Conhecimento',
    title_size: 'h3',
    block_color: 'default',
    right_arrows: true,
    collapsed: false,
    non_exclusive: true,
    filtering: true,
    data: createAccordionData(5),
  };

  return (
    <div>
      <View data={data} metadata={{}} properties={{}} />
      <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
        <strong>Dica:</strong> Use o campo de busca para filtrar os painéis por título ou conteúdo.
      </p>
    </div>
  );
};
WithFiltering.parameters = {
  docs: {
    description: {
      story: 'Accordion com campo de busca habilitado. Útil para listas grandes onde o usuário precisa encontrar informações específicas rapidamente.',
    },
  },
};

/**
 * Accordion extenso com múltiplos painéis e filtro.
 * Demonstra o comportamento com conteúdo mais extenso.
 */
export const ExtendedContent = () => {
  const data = {
    headline: 'Manual Completo do Volto',
    title_size: 'h2',
    block_color: 'default',
    right_arrows: true,
    collapsed: true,
    non_exclusive: true,
    filtering: true,
    data: createAccordionData(5),
  };

  return (
    <div>
      <View data={data} metadata={{}} properties={{}} />
      <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
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
  );
};
ExtendedContent.parameters = {
  docs: {
    description: {
      story: 'Exemplo completo com múltiplos painéis, filtro de busca e estado inicial fechado. Ideal para manuais e documentações extensas.',
    },
  },
};


