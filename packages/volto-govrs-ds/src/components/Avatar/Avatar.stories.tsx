import Avatar from './Avatar';

const meta = {
  title: 'Componentes/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'Nome do usuário (obrigatório). A primeira letra é usada como inicial.',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do avatar.',
    },
    letter: {
      control: 'boolean',
      description:
        'Força exibição apenas da letra inicial, mesmo se imageUrl estiver presente.',
    },
    iconic: {
      control: 'boolean',
      description:
        'Exibe ícone de usuário (Font Awesome) ao invés de letra ou imagem.',
    },
    dropdown: {
      control: 'boolean',
      description: 'Habilita funcionalidade de dropdown com menu interativo.',
    },
    imageUrl: {
      control: 'text',
      description:
        'URL da imagem do avatar. Se fornecida, substitui a inicial.',
    },
    menuItems: {
      control: 'object',
      description:
        'Array de itens do menu dropdown. Cada item tem { label: string, onClick: function }.',
    },
  },
};

export default meta;

const CodeSnippet = ({ code }: { code: string }) => (
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

export const AvatarDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 900 }}>
    <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      Especificações do Componente Avatar
    </h3>

    <p>
      O componente Avatar é usado para representar usuários com imagens,
      iniciais ou ícones. Possui suporte a três tamanhos, cores geradas
      automaticamente baseadas no nome, e funcionalidade de dropdown com menu
      customizável.
    </p>

    <h4 style={{ marginTop: 20 }}>Características Principais</h4>
    <ul style={{ lineHeight: 1.8 }}>
      <li>
        <strong>Cores automáticas:</strong> Gera cores consistentes baseadas no
        nome do usuário (15 cores na paleta)
      </li>
      <li>
        <strong>Três tamanhos:</strong> small, medium (padrão), large
      </li>
      <li>
        <strong>Três modos de exibição:</strong> Imagem, inicial, ou ícone
      </li>
      <li>
        <strong>Dropdown interativo:</strong> Menu com itens customizáveis
      </li>
      <li>
        <strong>Fallback inteligente:</strong> Se não houver imagem, mostra a
        inicial do nome
      </li>
    </ul>

    <h4 style={{ marginTop: 30 }}>Props</h4>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        name{' '}
        <small style={{ fontWeight: 400, color: '#d63031' }}>
          (obrigatório)
        </small>
      </h5>
      <p>
        Nome do usuário. A primeira letra é extraída e usada como inicial. A cor
        de fundo é gerada automaticamente baseada no nome.
      </p>
      <CodeSnippet code={`<Avatar name="João Silva" />`} />
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        size{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Define o tamanho do avatar. Opções: <code>'small'</code>,{' '}
        <code>'medium'</code> (padrão), <code>'large'</code>.
      </p>
      <CodeSnippet
        code={`<Avatar name="João Silva" size="small" />
<Avatar name="João Silva" size="medium" />
<Avatar name="João Silva" size="large" />`}
      />
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        imageUrl{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        URL da imagem do avatar. Se fornecida, a imagem substitui a inicial. Se
        a prop <code>letter</code> estiver <code>true</code>, a imagem é
        ignorada.
      </p>
      <CodeSnippet
        code={`<Avatar name="Maria Santos" imageUrl="https://i.pravatar.cc/150?img=1" />`}
      />
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        letter{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Força a exibição da inicial mesmo se <code>imageUrl</code> estiver
        presente. Útil quando você quer garantir que apenas a letra seja
        exibida.
      </p>
      <CodeSnippet code={`<Avatar name="Alice Oliveira" letter={true} />`} />
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        iconic{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Exibe um ícone de usuário (Font Awesome) ao invés de letra ou imagem.
        Sobrescreve <code>imageUrl</code> e <code>letter</code>.
      </p>
      <CodeSnippet code={`<Avatar name="João Silva" iconic={true} />`} />
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        dropdown{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Habilita a funcionalidade de dropdown. Quando <code>true</code>, exibe o
        nome do usuário e um botão para expandir/recolher o menu. Requer{' '}
        <code>menuItems</code> para funcionar completamente.
      </p>
      <CodeSnippet
        code={`<Avatar
  name="Sarah Connor"
  dropdown={true}
  menuItems={[
    { label: 'Perfil', onClick: () => console.log('Perfil') },
    { label: 'Sair', onClick: () => console.log('Sair') }
  ]}
/>`}
      />
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        menuItems{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Array de objetos com a estrutura{' '}
        <code>{`{ label: string, onClick: () => void }`}</code>. Usado apenas
        quando <code>dropdown={true}</code>.
      </p>
      <CodeSnippet
        code={`const menuItems = [
  { label: 'Perfil', onClick: () => alert('Ver Perfil') },
  { label: 'Configurações', onClick: () => alert('Configurações') },
  { label: 'Sair', onClick: () => alert('Sair') }
];

<Avatar name="João Silva" dropdown={true} menuItems={menuItems} />`}
      />
    </div>

    <h4 style={{ marginTop: 30 }}>Paleta de Cores</h4>
    <p>
      O Avatar gera cores automaticamente baseadas no nome do usuário usando um
      algoritmo de hash. A paleta possui 15 cores:
    </p>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
        gap: '8px',
        marginTop: 12,
      }}
    >
      {[
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#FFA07A',
        '#98D8C8',
        '#F7DC6F',
        '#BB8FCE',
        '#85C1E2',
        '#F8B500',
        '#52B788',
        '#E07A5F',
        '#81B29A',
        '#F4A261',
        '#E76F51',
        '#2A9D8F',
      ].map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            height: '60px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >
          {color}
        </div>
      ))}
    </div>

    <h4 style={{ marginTop: 30 }}>Exemplos de Uso</h4>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>1. Avatar Básico (inicial)</h5>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Avatar name="João Silva" />
      </div>
      <CodeSnippet code={`<Avatar name="João Silva" />`} />
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>2. Avatar com Imagem</h5>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Avatar
          name="Maria Santos"
          imageUrl="https://i.pravatar.cc/150?img=1"
        />
      </div>
      <CodeSnippet
        code={`<Avatar name="Maria Santos" imageUrl="https://i.pravatar.cc/150?img=1" />`}
      />
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>3. Diferentes Tamanhos</h5>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Avatar name="João Silva" size="small" />
        <Avatar name="João Silva" size="medium" />
        <Avatar name="João Silva" size="large" />
      </div>
      <CodeSnippet
        code={`<Avatar name="João Silva" size="small" />
<Avatar name="João Silva" size="medium" />
<Avatar name="João Silva" size="large" />`}
      />
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>4. Avatar com Dropdown</h5>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          marginBottom: 8,
        }}
      >
        <Avatar
          name="Sarah Connor"
          dropdown={true}
          menuItems={[
            { label: 'Perfil', onClick: () => alert('Perfil') },
            { label: 'Configurações', onClick: () => alert('Configurações') },
            { label: 'Sair', onClick: () => alert('Sair') },
          ]}
        />
      </div>
      <CodeSnippet
        code={`<Avatar
  name="Sarah Connor"
  dropdown={true}
  menuItems={[
    { label: 'Perfil', onClick: () => alert('Perfil') },
    { label: 'Configurações', onClick: () => alert('Configurações') },
    { label: 'Sair', onClick: () => alert('Sair') }
  ]}
/>`}
      />
    </div>

    <div style={{ marginTop: 20 }}>
      <h5 style={{ margin: '8px 0' }}>5. Avatar Icônico</h5>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Avatar name="Usuário Genérico" iconic={true} />
      </div>
      <CodeSnippet code={`<Avatar name="Usuário Genérico" iconic={true} />`} />
    </div>

    <h4 style={{ marginTop: 30 }}>Notas Importantes</h4>
    <ul style={{ lineHeight: 1.8 }}>
      <li>
        O componente requer <code>name</code> como prop obrigatória
      </li>
      <li>
        Cores são geradas deterministicamente - o mesmo nome sempre terá a mesma
        cor
      </li>
      <li>
        A propriedade <code>iconic</code> tem prioridade sobre{' '}
        <code>imageUrl</code> e <code>letter</code>
      </li>
      <li>
        A propriedade <code>letter</code> tem prioridade sobre{' '}
        <code>imageUrl</code>
      </li>
      <li>
        O dropdown exibe apenas o primeiro nome (antes do primeiro espaço)
      </li>
      <li>
        Font Awesome deve estar instalado para o ícone de usuário funcionar
      </li>
    </ul>
  </div>
);

AvatarDocumentacao.story = { name: '1. Documentação e Especificações' };

const Template = (args: any) => {
  return (
    <div style={{ padding: 16 }}>
      <Avatar {...args} />
      <div style={{ marginTop: 20 }}>
        <CodeSnippet
          code={`<Avatar
  name="${args.name}"${args.size !== 'medium' ? `\n  size="${args.size}"` : ''}${args.imageUrl ? `\n  imageUrl="${args.imageUrl}"` : ''}${args.letter ? '\n  letter={true}' : ''}${args.iconic ? '\n  iconic={true}' : ''}${args.dropdown ? '\n  dropdown={true}' : ''}${
    args.menuItems && args.menuItems.length > 0
      ? `\n  menuItems={[${args.menuItems.map((item: any) => `\n    { label: "${item.label}", onClick: () => {} }`).join(',')}
  ]}`
      : ''
  }
/>`}
        />
      </div>
    </div>
  );
};

export const AvatarInterativo = Template.bind({});
AvatarInterativo.args = {
  name: 'João Silva',
  size: 'medium',
  letter: false,
  iconic: false,
  dropdown: false,
  imageUrl: '',
  menuItems: [],
};

AvatarInterativo.story = { name: '2. Avatar Interativo (Testador)' };

export const TamanhosPadroes = () => (
  <div style={{ padding: 16 }}>
    <h4 style={{ marginBottom: 16 }}>Tamanhos Disponíveis</h4>
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Avatar name="João Silva" size="small" />
        <p style={{ marginTop: 8, fontSize: 12 }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="João Silva" size="medium" />
        <p style={{ marginTop: 8, fontSize: 12 }}>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="João Silva" size="large" />
        <p style={{ marginTop: 8, fontSize: 12 }}>Large</p>
      </div>
    </div>
    <CodeSnippet
      code={`<Avatar name="João Silva" size="small" />
<Avatar name="João Silva" size="medium" />
<Avatar name="João Silva" size="large" />`}
    />
  </div>
);

TamanhosPadroes.story = { name: '3. Tamanhos' };

export const ComImagens = () => (
  <div style={{ padding: 16 }}>
    <h4 style={{ marginBottom: 16 }}>Avatares com Imagens</h4>
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Avatar
        name="Maria Santos"
        size="small"
        imageUrl="https://i.pravatar.cc/150?img=1"
      />
      <Avatar
        name="Maria Santos"
        size="medium"
        imageUrl="https://i.pravatar.cc/150?img=2"
      />
      <Avatar
        name="Maria Santos"
        size="large"
        imageUrl="https://i.pravatar.cc/150?img=3"
      />
    </div>
    <CodeSnippet
      code={`<Avatar name="Maria Santos" size="small" imageUrl="https://i.pravatar.cc/150?img=1" />
<Avatar name="Maria Santos" size="medium" imageUrl="https://i.pravatar.cc/150?img=2" />
<Avatar name="Maria Santos" size="large" imageUrl="https://i.pravatar.cc/150?img=3" />`}
    />
  </div>
);

ComImagens.story = { name: '4. Com Imagens' };

export const ApenaLetras = () => (
  <div style={{ padding: 16 }}>
    <h4 style={{ marginBottom: 16 }}>Modo Letra (letter={'{true}'})</h4>
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        marginBottom: 20,
        flexWrap: 'wrap',
      }}
    >
      <Avatar name="Alice Oliveira" letter={true} />
      <Avatar name="Bruno Costa" letter={true} />
      <Avatar name="Carlos Mendes" letter={true} />
      <Avatar name="Diana Rocha" letter={true} />
      <Avatar name="Eduardo Lima" letter={true} />
      <Avatar name="Fernanda Alves" letter={true} />
    </div>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
      ℹ️ A prop <code>letter</code> força a exibição da inicial mesmo se houver
      imageUrl.
    </p>
    <CodeSnippet
      code={`<Avatar name="Alice Oliveira" letter={true} />
<Avatar name="Bruno Costa" letter={true} />
<Avatar name="Carlos Mendes" letter={true} />`}
    />
  </div>
);

ApenaLetras.story = { name: '5. Apenas Letras' };

export const Iconico = () => (
  <div style={{ padding: 16 }}>
    <h4 style={{ marginBottom: 16 }}>Avatar Icônico</h4>
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Avatar name="Usuário" iconic={true} size="small" />
      <Avatar name="Usuário" iconic={true} size="medium" />
      <Avatar name="Usuário" iconic={true} size="large" />
    </div>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
      ℹ️ Usa Font Awesome para exibir um ícone de usuário genérico.
    </p>
    <CodeSnippet
      code={`<Avatar name="Usuário" iconic={true} size="small" />
<Avatar name="Usuário" iconic={true} size="medium" />
<Avatar name="Usuário" iconic={true} size="large" />`}
    />
  </div>
);

Iconico.story = { name: '6. Icônico' };

export const ComDropdown = () => (
  <div style={{ padding: 16 }}>
    <h4 style={{ marginBottom: 16 }}>Avatar com Dropdown</h4>
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        marginBottom: 20,
        flexWrap: 'wrap',
      }}
    >
      <div>
        <p style={{ fontSize: 12, marginBottom: 8 }}>Com inicial</p>
        <Avatar
          name="Sarah Connor"
          dropdown={true}
          menuItems={[
            { label: 'Perfil', onClick: () => alert('Perfil') },
            { label: 'Configurações', onClick: () => alert('Configurações') },
            { label: 'Sair', onClick: () => alert('Sair') },
          ]}
        />
      </div>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8 }}>Com imagem</p>
        <Avatar
          name="John Connor"
          dropdown={true}
          imageUrl="https://i.pravatar.cc/150?img=5"
          menuItems={[
            { label: 'Minha Conta', onClick: () => alert('Conta') },
            { label: 'Privacidade', onClick: () => alert('Privacidade') },
            { label: 'Ajuda', onClick: () => alert('Ajuda') },
            { label: 'Desconectar', onClick: () => alert('Desconectar') },
          ]}
        />
      </div>
    </div>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
      ℹ️ Clique no avatar para abrir o menu dropdown.
    </p>
    <CodeSnippet
      code={`<Avatar
  name="Sarah Connor"
  dropdown={true}
  menuItems={[
    { label: 'Perfil', onClick: () => alert('Perfil') },
    { label: 'Configurações', onClick: () => alert('Configurações') },
    { label: 'Sair', onClick: () => alert('Sair') }
  ]}
/>`}
    />
  </div>
);

ComDropdown.story = { name: '7. Com Dropdown' };

export const VariedadeCores = () => (
  <div style={{ padding: 16 }}>
    <h4 style={{ marginBottom: 16 }}>Cores Geradas Automaticamente</h4>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '1.5rem',
        marginBottom: 20,
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
          <span style={{ fontSize: '11px', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
      ℹ️ As cores são geradas automaticamente baseadas no nome e sempre serão
      consistentes para o mesmo nome.
    </p>
    <CodeSnippet
      code={`// Mesma pessoa sempre terá a mesma cor
<Avatar name="Alice Andrade" />
<Avatar name="Bruno Barbosa" />
<Avatar name="Carla Cardoso" />`}
    />
  </div>
);

VariedadeCores.story = { name: '8. Variedade de Cores' };

export const TodasVariacoes = () => (
  <div style={{ padding: 16 }}>
    <h3
      style={{
        marginBottom: 24,
        borderBottom: '2px solid #333',
        paddingBottom: 8,
      }}
    >
      Todas as Variações do Avatar
    </h3>

    {/* Seção 1: Apenas Iniciais */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>
        1. Avatar com Iniciais
      </h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar name="João Silva" size="small" />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar name="João Silva" size="medium" />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar name="João Silva" size="large" />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar name="João Silva" size="small" />
<Avatar name="João Silva" size="medium" />
<Avatar name="João Silva" size="large" />`}
      />
    </div>

    {/* Seção 2: Com Imagens */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>2. Avatar com Imagem</h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Maria Santos"
            size="small"
            imageUrl="https://i.pravatar.cc/150?img=1"
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Maria Santos"
            size="medium"
            imageUrl="https://i.pravatar.cc/150?img=2"
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Maria Santos"
            size="large"
            imageUrl="https://i.pravatar.cc/150?img=3"
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar name="Maria Santos" size="small" imageUrl="https://i.pravatar.cc/150?img=1" />
<Avatar name="Maria Santos" size="medium" imageUrl="https://i.pravatar.cc/150?img=2" />
<Avatar name="Maria Santos" size="large" imageUrl="https://i.pravatar.cc/150?img=3" />`}
      />
    </div>

    {/* Seção 3: Modo Letra (forçado) */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>
        3. Modo Letra (letter={'{true}'})
      </h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar name="Alice Oliveira" size="small" letter={true} />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar name="Alice Oliveira" size="medium" letter={true} />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar name="Alice Oliveira" size="large" letter={true} />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar name="Alice Oliveira" size="small" letter={true} />
<Avatar name="Alice Oliveira" size="medium" letter={true} />
<Avatar name="Alice Oliveira" size="large" letter={true} />`}
      />
    </div>

    {/* Seção 4: Icônico */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>
        4. Avatar Icônico (iconic={'{true}'})
      </h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar name="Usuário" size="small" iconic={true} />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar name="Usuário" size="medium" iconic={true} />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar name="Usuário" size="large" iconic={true} />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar name="Usuário" size="small" iconic={true} />
<Avatar name="Usuário" size="medium" iconic={true} />
<Avatar name="Usuário" size="large" iconic={true} />`}
      />
    </div>

    {/* Seção 5: Com Dropdown - Iniciais */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>
        5. Dropdown com Inicial
      </h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Sarah Connor"
            size="small"
            dropdown={true}
            menuItems={[
              { label: 'Perfil', onClick: () => alert('Perfil') },
              { label: 'Sair', onClick: () => alert('Sair') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Sarah Connor"
            size="medium"
            dropdown={true}
            menuItems={[
              { label: 'Perfil', onClick: () => alert('Perfil') },
              { label: 'Configurações', onClick: () => alert('Configurações') },
              { label: 'Sair', onClick: () => alert('Sair') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Sarah Connor"
            size="large"
            dropdown={true}
            menuItems={[
              { label: 'Perfil', onClick: () => alert('Perfil') },
              { label: 'Configurações', onClick: () => alert('Configurações') },
              { label: 'Sair', onClick: () => alert('Sair') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar
  name="Sarah Connor"
  size="medium"
  dropdown={true}
  menuItems={[
    { label: 'Perfil', onClick: () => alert('Perfil') },
    { label: 'Configurações', onClick: () => alert('Configurações') },
    { label: 'Sair', onClick: () => alert('Sair') }
  ]}
/>`}
      />
    </div>

    {/* Seção 6: Com Dropdown - Imagem */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>
        6. Dropdown com Imagem
      </h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="John Connor"
            size="small"
            imageUrl="https://i.pravatar.cc/150?img=5"
            dropdown={true}
            menuItems={[
              { label: 'Minha Conta', onClick: () => alert('Conta') },
              { label: 'Sair', onClick: () => alert('Sair') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="John Connor"
            size="medium"
            imageUrl="https://i.pravatar.cc/150?img=5"
            dropdown={true}
            menuItems={[
              { label: 'Minha Conta', onClick: () => alert('Conta') },
              { label: 'Privacidade', onClick: () => alert('Privacidade') },
              { label: 'Sair', onClick: () => alert('Sair') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="John Connor"
            size="large"
            imageUrl="https://i.pravatar.cc/150?img=5"
            dropdown={true}
            menuItems={[
              { label: 'Minha Conta', onClick: () => alert('Conta') },
              { label: 'Privacidade', onClick: () => alert('Privacidade') },
              { label: 'Ajuda', onClick: () => alert('Ajuda') },
              { label: 'Sair', onClick: () => alert('Sair') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar
  name="John Connor"
  size="medium"
  imageUrl="https://i.pravatar.cc/150?img=5"
  dropdown={true}
  menuItems={[
    { label: 'Minha Conta', onClick: () => alert('Conta') },
    { label: 'Privacidade', onClick: () => alert('Privacidade') },
    { label: 'Sair', onClick: () => alert('Sair') }
  ]}
/>`}
      />
    </div>

    {/* Seção 7: Dropdown com Icônico */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>7. Dropdown Icônico</h4>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Usuário Genérico"
            size="small"
            iconic={true}
            dropdown={true}
            menuItems={[{ label: 'Login', onClick: () => alert('Login') }]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Usuário Genérico"
            size="medium"
            iconic={true}
            dropdown={true}
            menuItems={[
              { label: 'Login', onClick: () => alert('Login') },
              { label: 'Cadastro', onClick: () => alert('Cadastro') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Medium</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar
            name="Usuário Genérico"
            size="large"
            iconic={true}
            dropdown={true}
            menuItems={[
              { label: 'Login', onClick: () => alert('Login') },
              { label: 'Cadastro', onClick: () => alert('Cadastro') },
              { label: 'Ajuda', onClick: () => alert('Ajuda') },
            ]}
          />
          <p style={{ marginTop: 8, fontSize: 11 }}>Large</p>
        </div>
      </div>
      <CodeSnippet
        code={`<Avatar
  name="Usuário Genérico"
  size="medium"
  iconic={true}
  dropdown={true}
  menuItems={[
    { label: 'Login', onClick: () => alert('Login') },
    { label: 'Cadastro', onClick: () => alert('Cadastro') }
  ]}
/>`}
      />
    </div>

    {/* Seção 8: Variedade de Cores */}
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 16, color: '#333' }}>
        8. Cores Automáticas (baseadas no nome)
      </h4>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '1rem',
          marginBottom: 12,
        }}
      >
        {[
          'Alice A.',
          'Bruno B.',
          'Carlos C.',
          'Diana D.',
          'Eduardo E.',
          'Fernanda F.',
          'Gabriel G.',
          'Helena H.',
          'Igor I.',
          'Julia J.',
          'Karla K.',
          'Lucas L.',
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
            <span style={{ fontSize: '10px', textAlign: 'center' }}>
              {name}
            </span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
        ℹ️ Mesma pessoa sempre terá a mesma cor (determinístico)
      </p>
    </div>

    {/* Resumo */}
    <div
      style={{
        marginTop: 40,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        borderLeft: '4px solid #333',
      }}
    >
      <h4 style={{ marginTop: 0, marginBottom: 12 }}>Resumo das Variações</h4>
      <ul style={{ lineHeight: 1.8, marginBottom: 0 }}>
        <li>
          <strong>3 Tamanhos:</strong> small, medium, large
        </li>
        <li>
          <strong>4 Modos:</strong> Inicial (padrão), Imagem (imageUrl), Letra
          (letter), Ícone (iconic)
        </li>
        <li>
          <strong>2 Estados:</strong> Simples, Com Dropdown
        </li>
        <li>
          <strong>15 Cores:</strong> Geradas automaticamente baseadas no nome
        </li>
        <li>
          <strong>Total de Combinações:</strong> 3 × 4 × 2 = 24 variações
          principais
        </li>
      </ul>
    </div>
  </div>
);

TodasVariacoes.story = { name: '10. Todas as Variações' };
