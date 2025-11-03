import React from 'react';
import Card from '../Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GovRS/Card/List',
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
    title: 'Card com Lista',
    description: 'Este card exibe uma lista de informações',
    variant: 'list',
    children: 'Esta é a área de conteúdo principal do card. Você pode colocar qualquer nó React aqui, incluindo texto, imagens ou outros componentes.',
    href: 'https://www.rs.gov.br/',
    itens: [
      { value: 'Item 1: Este é um item de lista com alguma informação' },
      { value: 'Item 2: Outro item de lista com conteúdo diferente' },
      { value: 'Item 3: Terceiro item na lista expansível' },
      { value: 'Item 4: Quarto item com mais detalhes' },
    ],
  }
};

export const ManyItems: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Lista com Muitos Itens',
    description: 'Este card demonstra uma lista com mais itens',
    variant: 'list',
    href: 'https://www.rs.gov.br/',
    itens: [
      { value: 'Item 1: Primeiro item da lista' },
      { value: 'Item 2: Segundo item com mais conteúdo' },
      { value: 'Item 3: Descrição do terceiro item' },
      { value: 'Item 4: Detalhes do quarto item' },
      { value: 'Item 5: Informação do quinto item' },
      { value: 'Item 6: Conteúdo do sexto item' },
      { value: 'Item 7: Dados do sétimo item' },
      { value: 'Item 8: Detalhes do oitavo item' },
    ],
  }
};

export const WithoutImage: Story = {
  args: {
    title: 'Lista sem Imagem',
    description: 'Card de lista sem imagem de perfil',
    variant: 'list',
    href: 'https://www.rs.gov.br/',
    children: 'Área de conteúdo principal do card de lista.',
    itens: [
      { value: 'Recurso 1: Interface fácil de usar' },
      { value: 'Recurso 2: Design responsivo' },
      { value: 'Recurso 3: Componentes acessíveis' },
    ],
  }
};

export const Disabled: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    title: 'Lista Desabilitada',
    description: 'Este card está desabilitado',
    variant: 'list',
    href: 'https://www.rs.gov.br/',
    children: 'Card de lista desabilitado não pode ser expandido.',
    disabled: true,
    itens: [
      { value: 'Item 1: Não acessível' },
      { value: 'Item 2: Não pode expandir' },
      { value: 'Item 3: Estado desabilitado' },
    ],
  }
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
        variant="list"
        size="small"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="Lista Pequena"
        description="Card de lista compacto"
        children="Conteúdo da lista pequena."
        href="#"
        itens={[
          { value: 'Item 1' },
          { value: 'Item 2' },
          { value: 'Item 3' },
        ]}
      />
      <Card
        variant="list"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="Lista Média"
        description="Card de lista padrão"
        children="Conteúdo da lista média."
        href="#"
        itens={[
          { value: 'Item 1' },
          { value: 'Item 2' },
          { value: 'Item 3' },
        ]}
      />
      <Card
        variant="list"
        size="large"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="Lista Grande"
        description="Card de lista expandido"
        children="Conteúdo da lista grande."
        href="#"
        itens={[
          { value: 'Item 1' },
          { value: 'Item 2' },
          { value: 'Item 3' },
        ]}
      />
    </div>
  ),
};

