import React from 'react';
import Card from '../Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GovRS/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['post', 'list', 'news', 'icon'],
      description: 'Tipo de variante do card',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Tamanho do card (médio é o padrão quando não especificado)',
    },
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
    disabled: {
      control: 'boolean',
      description: 'Desabilita o card e todas as suas interações',
    },
    acao: {
      control: 'object',
      description: 'Objeto com label e url para o botão de ação',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Post: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card de Post',
    description: 'Variante de card com ações sociais (curtir/compartilhar)',
    variant: 'post',
    href: 'https://www.rs.gov.br/',
    children: 'Esta é a área de conteúdo principal do card.',
    acao: {
      label: 'Ver mais',
      url: 'https://www.rs.gov.br/'
    },
  },
};

export const List: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card de Lista',
    description: 'Variante de card com itens de lista expansíveis',
    variant: 'list',
    href: 'https://www.rs.gov.br/',
    itens: [
      { value: 'Item 1: Primeiro item da lista' },
      { value: 'Item 2: Segundo item da lista' },
      { value: 'Item 3: Terceiro item da lista' },
      { value: 'Item 4: Quarto item da lista' },
    ],
  }
};

export const News: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Card de Notícia',
    description: 'Variante de card para artigos de notícias',
    variant: 'news',
    href: 'https://www.rs.gov.br/',
  },
};

export const Icon: Story = {
  args: {
    image: 'https://api.iconify.design/mdi/lightbulb-on.svg?color=%231A7235&width=200&height=200',
    title: 'Card de Ícone',
    description: 'Variante de card com ícone e texto simples',
    variant: 'icon',
    href: 'https://www.rs.gov.br/',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
      padding: '1rem'
    }}>
      <Card
        variant="post"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
        title="Card de Post"
        description="Card com ações sociais"
        children="Área de conteúdo com texto rolável."
        acao={{
          label: 'Ver mais',
          url: 'https://www.rs.gov.br/'
        }}
        href="#"
      />
      <Card
        variant="list"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="Card de Lista"
        description="Card com lista expansível"
        href="#"
        itens={[
          { value: 'Item 1' },
          { value: 'Item 2' },
          { value: 'Item 3' },
        ]}
      />
      <Card
        variant="news"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
        title="Card de Notícia"
        description="Card para artigos de notícias"
        href="#"
      />
      <Card
        variant="icon"
        image="https://api.iconify.design/mdi/lightbulb-on.svg?color=%231A7235&width=200&height=200"
        title="Card de Ícone"
        description="Card simples com ícone"
        href="#"
      />
    </div>
  ),
};
