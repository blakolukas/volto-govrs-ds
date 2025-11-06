import React from 'react';
import Avatar from './Avatar';

const meta = {
  title: 'Componentes/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do usuário',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do avatar',
    },
    letter: {
      control: 'boolean',
      description: 'Mostrar apenas letra ao invés do nome completo',
    },
    dropdown: {
      control: 'boolean',
      description: 'Habilitar funcionalidade de dropdown',
    },
    imageUrl: {
      control: 'text',
      description: 'URL da imagem do avatar',
    },
    menuItems: {
      control: 'object',
      description: 'Array de itens do menu dropdown (apenas quando dropdown está habilitado)',
    },
  },
};

export default meta;

// Avatares básicos com iniciais
export const Padrao = {
  args: {
    name: 'João Silva',
  },
};

export const Pequeno = {
  args: {
    name: 'João Silva',
    size: 'small',
  },
};

export const Medio = {
  args: {
    name: 'João Silva',
    size: 'medium',
  },
};

export const Grande = {
  args: {
    name: 'João Silva',
    size: 'large',
  },
};

// Avatar com imagem
export const ComImagem = {
  args: {
    name: 'Maria Santos',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
};

export const ComImagemPequena = {
  args: {
    name: 'Maria Santos',
    size: 'small',
    imageUrl: 'https://i.pravatar.cc/150?img=2',
  },
};

export const ComImagemGrande = {
  args: {
    name: 'Maria Santos',
    size: 'large',
    imageUrl: 'https://i.pravatar.cc/150?img=3',
  },
};

// Avatar com opção de letra
export const ComLetra = {
  args: {
    name: 'Alice Oliveira',
    letter: true,
  },
};

export const ComLetraPequena = {
  args: {
    name: 'Bruno Costa',
    size: 'small',
    letter: true,
  },
};

// Avatar com dropdown
export const ComDropdown = {
  args: {
    name: 'Sarah Connor',
    dropdown: true,
    menuItems: [
      { label: 'Perfil', onClick: () => console.log('Perfil clicado') },
      { label: 'Configurações', onClick: () => console.log('Configurações clicadas') },
      { label: 'Sair', onClick: () => console.log('Sair clicado') },
    ],
  },
};

export const ComDropdownEImagem = {
  args: {
    name: 'Sarah Connor',
    dropdown: true,
    imageUrl: 'https://i.pravatar.cc/150?img=5',
    menuItems: [
      { label: 'Perfil', onClick: () => console.log('Perfil clicado') },
      { label: 'Configurações', onClick: () => console.log('Configurações clicadas') },
      { label: 'Ajuda', onClick: () => console.log('Ajuda clicada') },
      { label: 'Sair', onClick: () => console.log('Sair clicado') },
    ],
  },
};

// Dropdown com diferentes opções de menu
export const DropdownMenuPersonalizado = {
  args: {
    name: 'John Smith',
    dropdown: true,
    size: 'small',
    imageUrl: 'https://i.pravatar.cc/150?img=7',
    menuItems: [
      { label: 'Ver Perfil', onClick: () => alert('Ver Perfil') },
      { label: 'Editar Conta', onClick: () => alert('Editar Conta') },
      { label: 'Configurações de Privacidade', onClick: () => alert('Configurações de Privacidade') },
      { label: 'Desconectar', onClick: () => alert('Desconectar') },
    ],
  },
};

// Demonstração de todas as variantes
export const TodasVariantes = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '600px',
      }}
    >
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 'bold' }}>
          Tamanhos (Iniciais)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Avatar name="João Silva" size="small" />
          <Avatar name="João Silva" size="medium" />
          <Avatar name="João Silva" size="large" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 'bold' }}>
          Tamanhos (Com Imagens)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Avatar name="Maria Santos" size="small" imageUrl="https://i.pravatar.cc/150?img=1" />
          <Avatar name="Maria Santos" size="medium" imageUrl="https://i.pravatar.cc/150?img=2" />
          <Avatar name="Maria Santos" size="large" imageUrl="https://i.pravatar.cc/150?img=3" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 'bold' }}>
          Cores Aleatórias (baseadas no nome)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar name="Alice Oliveira" />
          <Avatar name="Bruno Costa" />
          <Avatar name="Carlos Mendes" />
          <Avatar name="Diana Rocha" />
          <Avatar name="Eduardo Lima" />
          <Avatar name="Fernanda Alves" />
          <Avatar name="Gabriel Martins" />
          <Avatar name="Helena Souza" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 'bold' }}>
          Com Opção de Letra
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Avatar name="Francisco Pereira" letter={true} size="small" />
          <Avatar name="Gabriela Ferreira" letter={true} size="medium" />
          <Avatar name="Henrique Gomes" letter={true} size="large" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 'bold' }}>
          Com Menu Dropdown
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Avatar
            name="Sarah Connor"
            dropdown={true}
            menuItems={[
              { label: 'Perfil', onClick: () => console.log('Perfil') },
              { label: 'Configurações', onClick: () => console.log('Configurações') },
              { label: 'Sair', onClick: () => console.log('Sair') },
            ]}
          />
          <Avatar
            name="John Connor"
            dropdown={true}
            size='small'
            imageUrl="https://i.pravatar.cc/150?img=8"
            menuItems={[
              { label: 'Minha Conta', onClick: () => console.log('Conta') },
              { label: 'Privacidade', onClick: () => console.log('Privacidade') },
              { label: 'Ajuda', onClick: () => console.log('Ajuda') },
              { label: 'Desconectar', onClick: () => console.log('Desconectar') },
            ]}
          />
        </div>
      </div>
    </div>
  ),
};

// Galeria com múltiplos usuários
export const GaleriaUsuarios = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        maxWidth: '600px',
      }}
    >
      <Avatar name="Usuário Um" imageUrl="https://i.pravatar.cc/150?img=10" />
      <Avatar name="Usuário Dois" imageUrl="https://i.pravatar.cc/150?img=11" />
      <Avatar name="Usuário Três" imageUrl="https://i.pravatar.cc/150?img=12" />
      <Avatar name="Usuário Quatro" imageUrl="https://i.pravatar.cc/150?img=13" />
      <Avatar name="Usuário Cinco" />
      <Avatar name="Usuário Seis" />
      <Avatar name="Usuário Sete" />
      <Avatar name="Usuário Oito" />
    </div>
  ),
};

// Demonstração de variedade de cores
export const VariedadeCores = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 'bold' }}>
          Diferentes cores
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1.5rem',
            maxWidth: '800px',
          }}
        >
          {[
            'Alice Andrade',
            'Bruno Barbosa',
            'Carla Cardoso',
            'Daniel Dias',
            'Elisa Esteves',
            'Felipe Fernandes',
            'Gabriela Gomes',
            'Hugo Henrique',
            'Isabela Inácio',
            'João José',
            'Karla Katia',
            'Lucas Lima',
            'Mariana Martins',
            'Nicolas Nunes',
            'Olívia Oliveira',
          ].map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Avatar name={name} size="medium" />
              <span style={{ fontSize: '12px', textAlign: 'center' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
