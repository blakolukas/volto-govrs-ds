import React from 'react';
import Card from '../Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GovRS/Card/Icon',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL do ícone/imagem do card',
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
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://api.iconify.design/mdi/beach.svg?color=%231A7235&width=200&height=200',
    title: 'Card de Ícone',
    description: 'Card simples com ícone e texto',
    variant: 'icon',
    href: 'https://www.rs.gov.br/',
  },
};

export const WithLongText: Story = {
  args: {
    image: 'https://api.iconify.design/mdi/file-document.svg?color=%231A7235&width=200&height=200',
    title: 'Card com Título Longo para Testar o Layout',
    description: 'Esta é uma descrição mais longa para demonstrar como o card se comporta com mais conteúdo. O texto deve se ajustar adequadamente ao espaço disponível.',
    variant: 'icon',
    href: 'https://www.rs.gov.br/',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card sem Ícone',
    description: 'Card de ícone sem imagem',
    variant: 'icon',
    href: 'https://www.rs.gov.br/',
  },
};

export const Disabled: Story = {
  args: {
    image: 'https://api.iconify.design/mdi/lock.svg?color=%231A7235&width=200&height=200',
    title: 'Card Desabilitado',
    description: 'Este card está desabilitado',
    variant: 'icon',
    href: 'https://www.rs.gov.br/',
    disabled: true,
  },
};

export const Services: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem',
      padding: '1rem'
    }}>
      <Card
        variant="icon"
        image="https://api.iconify.design/mdi/account-circle.svg?color=%231A7235&width=200&height=200"
        title="Perfil"
        description="Gerencie seu perfil"
        href="#"
      />
      <Card
        variant="icon"
        image="https://api.iconify.design/mdi/cog.svg?color=%231A7235&width=200&height=200"
        title="Configurações"
        description="Ajuste as configurações"
        href="#"
      />
      <Card
        variant="icon"
        image="https://api.iconify.design/mdi/bell.svg?color=%231A7235&width=200&height=200"
        title="Notificações"
        description="Veja suas notificações"
        href="#"
      />
      <Card
        variant="icon"
        image="https://api.iconify.design/mdi/help-circle.svg?color=%231A7235&width=200&height=200"
        title="Ajuda"
        description="Central de ajuda"
        href="#"
      />
    </div>
  ),
};

