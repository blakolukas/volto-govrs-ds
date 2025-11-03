import React from 'react';
import Card from '../Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GovRS/Card/News',
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
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card de Notícia',
    description: 'Este card exibe uma notícia com imagem no topo',
    variant: 'news',
    href: 'https://www.rs.gov.br/',
  },
};

export const WithContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Notícia com Conteúdo',
    description: 'Este card exibe uma notícia com imagem no rodapé',
    variant: 'news',
    children: 'Esta é a área de conteúdo principal do card de notícia. Pode incluir texto adicional ou elementos conforme necessário. O conteúdo aqui fornece informações mais detalhadas relacionadas ao título e descrição do card.',
    href: 'https://www.rs.gov.br/',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Notícia sem Imagem',
    description: 'Card de notícia sem imagem',
    variant: 'news',
    href: 'https://www.rs.gov.br/',
  },
};

export const LongContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Notícia com Conteúdo Extenso',
    description: 'Esta notícia possui muito conteúdo para demonstrar a rolagem',
    variant: 'news',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    href: 'https://www.rs.gov.br/',
  },
};

export const Disabled: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Notícia Desabilitada',
    description: 'Esta notícia está em estado desabilitado',
    variant: 'news',
    href: 'https://www.rs.gov.br/',
    disabled: true,
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
        variant="news"
        size="small"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
        title="Notícia Pequena"
        description="Card de notícia compacto"
        href="#"
      />
      <Card
        variant="news"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
        title="Notícia Média"
        description="Card de notícia padrão"
        href="#"
      />
      <Card
        variant="news"
        size="large"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
        title="Notícia Grande"
        description="Card de notícia expandido"
        href="#"
      />
    </div>
  ),
};

