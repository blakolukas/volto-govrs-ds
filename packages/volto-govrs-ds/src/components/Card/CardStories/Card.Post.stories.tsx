import React from 'react';
import Card from '../Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GovRS/Card/Post',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL da imagem do card',
    },
    title: {
      control: 'text',
      description: 'Título do card',
    },
    description: {
      control: 'text',
      description: 'Texto de descrição do card',
    },
    href: {
      control: 'text',
      description: 'URL para navegar quando o card for clicado',
    },
    children: {
      control: 'text',
      description: 'Área de conteúdo principal do card',
    },
    acao: {
      control: 'text',
      description: 'Texto para o botão de ação no rodapé',
    },
    bodyImg: {
      control: 'text',
      description: 'URL de uma imagem para exibir no corpo do card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Título do Card',
    description: 'Esta é uma descrição do conteúdo do card. Pode conter múltiplas linhas de texto.',
    variant: 'post',
    href: 'https://www.rs.gov.br/',
    children: 'Esta é a área de conteúdo principal do card. Você pode colocar qualquer nó React aqui, incluindo texto, imagens ou outros componentes.',
    acao: { label: 'Saiba Mais', url: 'https://www.rs.gov.br/'},
  },
};

export const LongContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card com Título e Descrição Longos',
    acao: { label: 'Saiba Mais', url: 'https://www.rs.gov.br/' },
    variant: 'post',
    description: 'Este card demonstra como conteúdo mais longo é tratado. A descrição pode ocupar múltiplas linhas e o card ajustará sua altura adequadamente. Isso é útil para cards que precisam exibir informações mais detalhadas aos usuários.',
    children: "Esta é a área de conteúdo principal do card. Pode incluir texto adicional ou elementos conforme necessário. O conteúdo aqui fornece informações mais detalhadas relacionadas ao título e descrição do card. Pode ser tão longo quanto necessário para transmitir a mensagem pretendida ao usuário. O layout se ajustará adequadamente para acomodar o conteúdo. Sinta-se livre para personalizar esta área com qualquer informação relevante ou elementos interativos que melhorem a experiência do usuário. O componente de card foi projetado para ser flexível e adaptável a vários tipos e tamanhos de conteúdo. Seja um resumo breve ou uma explicação detalhada, esta seção pode lidar com tudo. Certifique-se de manter o conteúdo envolvente e informativo para capturar a atenção do usuário de forma eficaz.",
  },
};

export const WithoutAction: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card sem Ação',
    description: 'Este card não possui botão de ação no rodapé',
    variant: 'post',
    href: 'https://www.rs.gov.br/',
    children: 'Conteúdo sem botão de ação no rodapé.',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card sem Imagem',
    description: 'Este card não possui imagem de perfil',
    variant: 'post',
    href: 'https://www.rs.gov.br/',
    children: 'Área de conteúdo sem imagem de perfil.',
    acao: { label: 'Ver mais', url: 'https://www.rs.gov.br/' },
  },
};

export const Disabled: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card Desabilitado',
    description: 'Este card está em estado desabilitado',
    variant: 'post',
    href: 'https://www.rs.gov.br/',
    children: 'Este card não pode ser interagido.',
    acao: { label: 'Ver mais', url: 'https://www.rs.gov.br/' },
    disabled: true,
  },
};

export const WithBodyImage: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card com Imagem no Corpo',
    description: 'Este card possui uma imagem adicional no corpo do conteúdo',
    variant: 'post',
    href: 'https://www.rs.gov.br/',
    children: 'O bodyImg permite adicionar uma imagem destacada no corpo do card, ideal para posts com foto em destaque.',
    bodyImg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    acao: { label: 'Ver mais', url: 'https://www.rs.gov.br/' },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      padding: '1rem'
    }}>
      <Card
        variant="post"
        size="small"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
        title="Post Pequeno"
        description="Tamanho compacto"
        children="Conteúdo do post pequeno."
        acao={{ label: 'Ver mais', url: '#' }}
        href="#"
      />
      <Card
        variant="post"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
        title="Post Médio"
        description="Tamanho padrão"
        children="Conteúdo do post médio (padrão)."
        acao={{ label: 'Ver mais', url: '#' }}
        href="#"
      />
      <Card
        variant="post"
        size="large"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
        title="Post Grande"
        description="Tamanho expandido"
        children="Conteúdo do post grande."
        acao={{ label: 'Ver mais', url: '#' }}
        href="#"
      />
    </div>
  ),
};

