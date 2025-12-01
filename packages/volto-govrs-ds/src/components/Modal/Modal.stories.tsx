import React, { useState } from 'react';
import Modal from './Modal';
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
  faMapMarkerAlt,
  faBuilding,
  faIdCard,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

// removed unused icons to satisfy lint rules
const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      options: ['items', 'form'],
      description:
        'Tipo do modal: "items" para lista expansível ou "form" para formulário',
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho do modal',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description:
        'Define se o modal fecha ao clicar fora dele ou pressionar ESC',
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
      marginTop: '10px',
    }}
  >
    <code>{code}</code>
  </pre>
);

export const ModalDocumentacao = () => {
  const [showItemsModal, setShowItemsModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);

  const itemsExample = [
    {
      label: 'Item 1',
      img: 'https://via.placeholder.com/50',
      content: <p>Conteúdo detalhado do item 1 que aparece ao expandir.</p>,
    },
    {
      label: 'Item 2',
      img: 'https://via.placeholder.com/50',
      content: (
        <div>
          <p>Conteúdo do item 2 com mais informações.</p>
          <ul>
            <li>Informação A</li>
            <li>Informação B</li>
          </ul>
        </div>
      ),
    },
    {
      label: 'Item 3',
      img: '',
      content: <p>Item sem imagem - exibe placeholder.</p>,
    },
  ];

  const formInputs = [
    {
      label: 'Nome',
      placeholder: 'Digite seu nome',
      auxiliaryText: 'Campo obrigatório',
      leftIcon: faUser,
    },
    {
      label: 'Email',
      placeholder: 'Digite seu email',
      leftIcon: faEnvelope,
    },
    {
      label: 'Telefone',
      placeholder: '(00) 00000-0000',
      leftIcon: faPhone,
    },
  ];

  return (
    <div style={{ padding: 16, maxWidth: 920 }}>
      <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        Especificações do Componente Modal
      </h3>

      <p>
        O componente Modal oferece duas variantes principais: <code>items</code>{' '}
        (lista expansível) e <code>form</code> (formulário com inputs). Possui
        acessibilidade completa com navegação por teclado e focus trap.
      </p>

      <h4 style={{ marginTop: 20 }}>Atributos Principais</h4>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>title</h5>
        <p>Título exibido no cabeçalho do modal.</p>
        <CodeSnippet code={`<Modal title="Confirmar ação" ... />`} />
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>onClose</h5>
        <p>
          Função chamada ao fechar o modal (clique no X, ESC ou overlay). Use
          para controlar a visibilidade.
        </p>
        <CodeSnippet code={`<Modal onClose={() => setIsOpen(false)} ... />`} />
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>type</h5>
        <p>
          Define o conteúdo do modal: <code>"items"</code> para lista expansível
          ou <code>"form"</code> para formulário.
        </p>
        <CodeSnippet
          code={`<Modal type="items" items={[...]} />\n<Modal type="form" inputs={[...]} />`}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>buttonLeft / buttonRight</h5>
        <p>Configuração dos botões no footer do modal.</p>
        <CodeSnippet
          code={`<Modal
  buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
  buttonRight={{ label: 'Confirmar', onClick: () => handleConfirm() }}
  ...
/>`}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>closeOnOverlayClick</h5>
        <p>
          Define se o modal fecha ao clicar fora dele ou pressionar ESC. Padrão:{' '}
          <code>true</code>.
        </p>
        <CodeSnippet code={`<Modal closeOnOverlayClick={false} ... />`} />
      </div>

      <h4 style={{ marginTop: 30 }}>Modal tipo "items"</h4>
      <p>
        Exibe uma lista de itens expansíveis com imagens opcionais. Cada item
        pode conter conteúdo adicional revelado ao clicar.
      </p>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>items</h5>
        <p>
          Array de objetos com <code>label</code>, <code>img</code> (opcional) e{' '}
          <code>content</code> (conteúdo expansível).
        </p>
        <CodeSnippet
          code={`const items = [
  {
    label: 'Item 1',
    img: 'url-da-imagem',
    content: <p>Detalhes do item</p>
  },
  {
    label: 'Item 2',
    img: '',
    content: <p>Item sem imagem</p>
  }
];

<Modal type="items" items={items} />`}
        />
        <button
          onClick={() => setShowItemsModal(true)}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#0c326f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Ver exemplo Modal Items
        </button>
      </div>

      <h4 style={{ marginTop: 30 }}>Modal tipo "form"</h4>
      <p>Exibe um formulário com inputs do Design System.</p>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>inputs</h5>
        <p>
          Array de configurações de inputs. Cada input pode ter{' '}
          <code>label</code>, <code>placeholder</code>,{' '}
          <code>auxiliaryText</code> e <code>leftIcon</code>.
        </p>
        <CodeSnippet
          code={`const inputs = [
  {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    auxiliaryText: 'Campo obrigatório',
    leftIcon: faUser
  },
  {
    label: 'Email',
    placeholder: 'Digite seu email',
    leftIcon: faEnvelope
  }
];

<Modal type="form" inputs={inputs} />`}
        />
        <button
          onClick={() => setShowFormModal(true)}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#0c326f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Ver exemplo Modal Form
        </button>
      </div>

      <h4 style={{ marginTop: 30 }}>children (conteúdo customizado)</h4>
      <p>
        Você pode passar conteúdo customizado através de <code>children</code>.
        O conteúdo é exibido acima da lista de itens ou inputs.
      </p>
      <CodeSnippet
        code={`<Modal type="form" inputs={inputs}>
  <p>Este é um texto personalizado acima dos inputs.</p>
</Modal>`}
      />
      <button
        onClick={() => setShowCustomModal(true)}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#0c326f',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Ver exemplo com conteúdo customizado
      </button>

      <h4 style={{ marginTop: 30 }}>Recursos de Acessibilidade</h4>
      <ul>
        <li>
          <strong>Focus trap:</strong> O foco permanece dentro do modal enquanto
          está aberto
        </li>
        <li>
          <strong>Navegação por teclado:</strong> ESC para fechar, Tab para
          navegar entre elementos
        </li>
        <li>
          <strong>ARIA:</strong> Atributos role="dialog" e aria-modal="true"
          para leitores de tela
        </li>
        <li>
          <strong>Auto-focus:</strong> Primeiro elemento focável recebe foco ao
          abrir
        </li>
      </ul>

      {/* Modals de exemplo */}
      {showItemsModal && (
        <Modal
          title="Modal com Lista de Itens"
          type="items"
          items={itemsExample}
          onClose={() => setShowItemsModal(false)}
          buttonLeft={{
            label: 'Fechar',
            onClick: () => setShowItemsModal(false),
          }}
          buttonRight={{
            label: 'Confirmar',
            onClick: () => setShowItemsModal(false),
          }}
        >
          <p>Este é um conteúdo adicional acima da lista de itens.</p>
        </Modal>
      )}

      {showFormModal && (
        <Modal
          title="Modal com Formulário"
          type="form"
          inputs={formInputs}
          onClose={() => setShowFormModal(false)}
          buttonLeft={{
            label: 'Cancelar',
            onClick: () => setShowFormModal(false),
          }}
          buttonRight={{
            label: 'Salvar',
            onClick: () => setShowFormModal(false),
          }}
        />
      )}

      {showCustomModal && (
        <Modal
          title="Modal com Conteúdo Customizado"
          type="form"
          inputs={[
            { label: 'Nome', placeholder: 'Digite seu nome', leftIcon: faUser },
          ]}
          onClose={() => setShowCustomModal(false)}
          buttonLeft={{
            label: 'Cancelar',
            onClick: () => setShowCustomModal(false),
          }}
          buttonRight={{
            label: 'Salvar',
            onClick: () => setShowCustomModal(false),
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <h4>Instruções Importantes</h4>
            <p>Por favor, preencha o formulário abaixo com suas informações.</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

ModalDocumentacao.story = { name: '1. Documentação e Exemplos' };

export const ModalInterativo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<'items' | 'form' | 'custom'>(
    'items',
  );
  const [showButtons, setShowButtons] = useState(true);
  const [closeOnOverlay, setCloseOnOverlay] = useState(true);
  const [modalTitle, setModalTitle] = useState('Modal Interativo');
  const [customContent, setCustomContent] = useState(
    `<div style="text-align: center; padding: 20px;">
  <h4>Conteúdo Personalizado</h4>
  <p>Este é um exemplo de modal com conteúdo personalizado.</p>
  <p>Você pode digitar <strong>HTML</strong> aqui e ele será renderizado no modal.</p>
  <button style="padding: 8px 16px; background-color: #0c326f; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">
    Botão de Exemplo
  </button>
</div>`,
  );

  const itemsExample = [
    {
      label: 'Primeiro Item',
      img: 'https://via.placeholder.com/50',
      content: <p>Conteúdo detalhado do primeiro item.</p>,
    },
    {
      label: 'Segundo Item',
      img: 'https://via.placeholder.com/50',
      content: <p>Conteúdo do segundo item com mais informações.</p>,
    },
    {
      label: 'Terceiro Item',
      img: '',
      content: <p>Item sem imagem válida - mostra placeholder.</p>,
    },
  ];

  const formInputs = [
    {
      label: 'Nome Completo',
      placeholder: 'Digite seu nome',
      auxiliaryText: 'Campo obrigatório',
      leftIcon: faUser,
    },
    {
      label: 'E-mail',
      placeholder: 'seu@email.com',
      leftIcon: faEnvelope,
    },
    {
      label: 'Senha',
      placeholder: 'Digite sua senha',
      leftIcon: faLock,
    },
  ];

  return (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <h3>Modal Interativo</h3>
      <p>
        Use os controles abaixo para testar diferentes configurações do modal.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            <strong>Título do Modal:</strong>
          </label>
          <input
            type="text"
            value={modalTitle}
            onChange={(e) => setModalTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            <strong>Tipo do Modal:</strong>
          </label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <label>
              <input
                type="radio"
                value="items"
                checked={modalType === 'items'}
                onChange={(e) =>
                  setModalType(e.target.value as 'items' | 'form' | 'custom')
                }
              />
              Lista de Itens
            </label>
            <label>
              <input
                type="radio"
                value="form"
                checked={modalType === 'form'}
                onChange={(e) =>
                  setModalType(e.target.value as 'items' | 'form' | 'custom')
                }
              />
              Formulário
            </label>
            <label>
              <input
                type="radio"
                value="custom"
                checked={modalType === 'custom'}
                onChange={(e) =>
                  setModalType(e.target.value as 'items' | 'form' | 'custom')
                }
              />
              Conteúdo Customizado
            </label>
          </div>
        </div>

        {modalType === 'custom' && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              <strong>Conteúdo Customizado (children):</strong>
            </label>
            <textarea
              value={customContent}
              onChange={(e) => setCustomContent(e.target.value)}
              placeholder="Digite HTML aqui...&#10;&#10;Exemplo:&#10;<div>&#10;  <h4>Título</h4>&#10;  <p>Texto</p>&#10;  <button>Botão</button>&#10;</div>"
              style={{
                width: '100%',
                minHeight: '150px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontFamily: 'monospace',
                fontSize: '13px',
                resize: 'vertical',
              }}
            />
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              💡 Este conteúdo será renderizado como HTML no modal (children).
              Você pode usar tags HTML e estilos inline.
            </p>
          </div>
        )}

        <div>
          <label>
            <input
              type="checkbox"
              checked={showButtons}
              onChange={(e) => setShowButtons(e.target.checked)}
            />
            <strong> Exibir botões no footer</strong>
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={closeOnOverlay}
              onChange={(e) => setCloseOnOverlay(e.target.checked)}
            />
            <strong> Fechar ao clicar fora (closeOnOverlayClick)</strong>
          </label>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#0c326f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Abrir Modal
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h4>Código Atual:</h4>
        <CodeSnippet
          code={`<Modal
  title="${modalTitle}"
  type="${modalType}"
  ${
    modalType === 'items'
      ? 'items={itemsArray}'
      : modalType === 'form'
        ? 'inputs={inputsArray}'
        : ''
  }
  onClose={() => setIsOpen(false)}
  closeOnOverlayClick={${closeOnOverlay}}${
    showButtons
      ? `
  buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
  buttonRight={{ label: 'Confirmar', onClick: () => handleConfirm() }}`
      : ''
  }
>${
            modalType === 'custom'
              ? `\n  <div dangerouslySetInnerHTML={{ __html: \`${customContent.replace(
                  /`/g,
                  '\\`',
                )}\` }} />\n`
              : ''
          }
</Modal>`}
        />
      </div>

      {isOpen && (
        <Modal
          title={modalTitle}
          type={modalType as any}
          items={modalType === 'items' ? itemsExample : undefined}
          inputs={modalType === 'form' ? formInputs : undefined}
          onClose={() => setIsOpen(false)}
          closeOnOverlayClick={closeOnOverlay}
          buttonLeft={
            showButtons
              ? { label: 'Cancelar', onClick: () => setIsOpen(false) }
              : undefined
          }
          buttonRight={
            showButtons
              ? {
                  label: 'Confirmar',
                  onClick: () => {
                    alert('Confirmado!');
                    setIsOpen(false);
                  },
                }
              : undefined
          }
        >
          {modalType === 'custom' && (
            <div dangerouslySetInnerHTML={{ __html: customContent }} />
          )}
        </Modal>
      )}
    </div>
  );
};

ModalInterativo.story = { name: '2. Modal Interativo (Testador)' };

export const ExemplosDeUso = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [notificationsModal, setNotificationsModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);

  const productItems = [
    {
      label: 'Notebook Dell Inspiron 15',
      img: 'https://via.placeholder.com/50/0066cc/ffffff?text=DELL',
      content: (
        <div>
          <p>
            <strong>Especificações:</strong>
          </p>
          <ul>
            <li>Processador: Intel Core i7</li>
            <li>Memória: 16GB RAM</li>
            <li>Armazenamento: 512GB SSD</li>
            <li>Tela: 15.6" Full HD</li>
          </ul>
          <p style={{ color: '#168821', fontWeight: 'bold' }}>R$ 4.299,00</p>
        </div>
      ),
    },
    {
      label: 'Mouse Logitech MX Master 3',
      img: 'https://via.placeholder.com/50/555555/ffffff?text=MX3',
      content: (
        <div>
          <p>
            <strong>Características:</strong>
          </p>
          <ul>
            <li>Conexão: Bluetooth e USB</li>
            <li>Ergonômico</li>
            <li>7 botões programáveis</li>
            <li>Bateria recarregável</li>
          </ul>
          <p style={{ color: '#168821', fontWeight: 'bold' }}>R$ 599,00</p>
        </div>
      ),
    },
    {
      label: 'Teclado Mecânico Keychron K2',
      img: 'https://via.placeholder.com/50/ff6600/ffffff?text=K2',
      content: (
        <div>
          <p>
            <strong>Detalhes:</strong>
          </p>
          <ul>
            <li>Layout: 75% compacto</li>
            <li>Switches: Gateron Brown</li>
            <li>RGB Backlight</li>
            <li>Compatível Windows/Mac</li>
          </ul>
          <p style={{ color: '#168821', fontWeight: 'bold' }}>R$ 749,00</p>
        </div>
      ),
    },
  ];

  const termsItems = [
    {
      label: '1. Aceitação dos Termos',
      img: '',
      content: (
        <div>
          <p>
            Ao acessar e usar este serviço, você aceita e concorda em estar
            vinculado aos termos e condições descritos neste documento. Se você
            não concordar com alguma parte destes termos, não deverá usar este
            serviço.
          </p>
        </div>
      ),
    },
    {
      label: '2. Uso do Serviço',
      img: '',
      content: (
        <div>
          <p>
            Você concorda em usar o serviço apenas para fins legais e de acordo
            com todas as leis e regulamentos aplicáveis. É proibido usar o
            serviço de forma que possa prejudicar, desabilitar ou comprometer o
            funcionamento do sistema.
          </p>
        </div>
      ),
    },
    {
      label: '3. Privacidade e Dados',
      img: '',
      content: (
        <div>
          <p>
            Respeitamos sua privacidade e nos comprometemos a proteger suas
            informações pessoais. Os dados coletados serão usados apenas
            conforme descrito em nossa Política de Privacidade e não serão
            compartilhados com terceiros sem seu consentimento explícito.
          </p>
        </div>
      ),
    },
    {
      label: '4. Propriedade Intelectual',
      img: '',
      content: (
        <div>
          <p>
            Todo o conteúdo, incluindo textos, gráficos, logotipos e software, é
            propriedade exclusiva da empresa e protegido por leis de direitos
            autorais. É proibida a reprodução, distribuição ou modificação sem
            autorização prévia por escrito.
          </p>
        </div>
      ),
    },
    {
      label: '5. Limitação de Responsabilidade',
      img: '',
      content: (
        <div>
          <p>
            O serviço é fornecido "como está" sem garantias de qualquer tipo.
            Não nos responsabilizamos por danos diretos, indiretos, incidentais
            ou consequenciais resultantes do uso ou impossibilidade de uso do
            serviço.
          </p>
        </div>
      ),
    },
  ];

  const notificationItems = [
    {
      label: 'Novo comentário no seu post',
      img: 'https://via.placeholder.com/50/0066cc/ffffff?text=💬',
      content: (
        <div>
          <p>
            <strong>João Silva</strong> comentou: "Excelente conteúdo!"
          </p>
          <p style={{ fontSize: '12px', color: '#666' }}>Há 5 minutos</p>
        </div>
      ),
    },
    {
      label: 'Atualização do sistema disponível',
      img: 'https://via.placeholder.com/50/ff9900/ffffff?text=⚙️',
      content: (
        <div>
          <p>
            Uma nova versão do sistema está disponível com melhorias de
            segurança.
          </p>
          <p style={{ fontSize: '12px', color: '#666' }}>Há 1 hora</p>
        </div>
      ),
    },
    {
      label: 'Pagamento aprovado',
      img: 'https://via.placeholder.com/50/00cc66/ffffff?text=✓',
      content: (
        <div>
          <p>Seu pagamento no valor de R$ 99,90 foi aprovado com sucesso.</p>
          <p style={{ fontSize: '12px', color: '#666' }}>Há 2 horas</p>
        </div>
      ),
    },
    {
      label: 'Lembrete: Reunião agendada',
      img: 'https://via.placeholder.com/50/cc0066/ffffff?text=📅',
      content: (
        <div>
          <p>Reunião de planejamento agendada para hoje às 15:00.</p>
          <p style={{ fontSize: '12px', color: '#666' }}>Há 3 horas</p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 16, maxWidth: 920 }}>
      <h3>Exemplos de Uso Prático</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {/* Exemplo 1: Modal de Confirmação */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>1. Modal de Confirmação</h4>
          <p style={{ fontSize: '14px' }}>
            Modal simples com mensagem e botões de ação.
          </p>
          <button
            onClick={() => setConfirmModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0c326f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 2: Modal de Exclusão */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>2. Modal de Exclusão</h4>
          <p style={{ fontSize: '14px' }}>
            Modal de aviso para ações destrutivas.
          </p>
          <button
            onClick={() => setDeleteModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#c8161d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 3: Modal de Login */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>3. Modal de Login</h4>
          <p style={{ fontSize: '14px' }}>Formulário de login com inputs.</p>
          <button
            onClick={() => setLoginModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0c326f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 4: Modal de Cadastro */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>4. Modal de Cadastro</h4>
          <p style={{ fontSize: '14px' }}>
            Formulário completo com múltiplos campos.
          </p>
          <button
            onClick={() => setRegisterModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#168821',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 5: Modal de Seleção de Produtos */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>5. Catálogo de Produtos</h4>
          <p style={{ fontSize: '14px' }}>
            Lista expansível com produtos e detalhes.
          </p>
          <button
            onClick={() => setProductModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0c326f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 6: Modal de Termos e Condições */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>6. Termos e Condições</h4>
          <p style={{ fontSize: '14px' }}>
            Conteúdo expansível organizado por seções.
          </p>
          <button
            onClick={() => setTermsModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0c326f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 7: Modal de Sucesso */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>7. Feedback de Sucesso</h4>
          <p style={{ fontSize: '14px' }}>
            Modal de confirmação de ação bem-sucedida.
          </p>
          <button
            onClick={() => setSuccessModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#168821',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 8: Modal de Notificações */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>8. Central de Notificações</h4>
          <p style={{ fontSize: '14px' }}>
            Lista de notificações com detalhes expansíveis.
          </p>
          <button
            onClick={() => setNotificationsModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0c326f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>

        {/* Exemplo 9: Modal de Configurações */}
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>9. Configurações Avançadas</h4>
          <p style={{ fontSize: '14px' }}>
            Formulário com múltiplos campos de configuração.
          </p>
          <button
            onClick={() => setSettingsModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0c326f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Abrir
          </button>
        </div>
      </div>

      {/* Seção de Código */}
      <div style={{ marginTop: '40px' }}>
        <h4>Exemplos de Código</h4>

        <details style={{ marginTop: '16px' }}>
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold', padding: '8px' }}
          >
            Modal de Confirmação
          </summary>
          <CodeSnippet
            code={`<Modal
  title="Confirmar Ação"
  type="items"
  items={[]}
  onClose={() => setConfirmModal(false)}
  buttonLeft={{ label: 'Cancelar', onClick: () => setConfirmModal(false) }}
  buttonRight={{ label: 'Confirmar', onClick: () => handleConfirm() }}
>
  <p>Tem certeza que deseja realizar esta ação?</p>
</Modal>`}
          />
        </details>

        <details style={{ marginTop: '16px' }}>
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold', padding: '8px' }}
          >
            Modal de Exclusão (closeOnOverlayClick=false)
          </summary>
          <CodeSnippet
            code={`<Modal
  title="Confirmar Exclusão"
  type="form"
  inputs={[]}
  onClose={() => setDeleteModal(false)}
  buttonLeft={{ label: 'Cancelar', onClick: () => setDeleteModal(false) }}
  buttonRight={{ label: 'Excluir', onClick: () => handleDelete() }}
  closeOnOverlayClick={false}
>
  <div style={{ color: '#c8161d' }}>
    <strong>⚠️ Atenção!</strong>
    <p>Esta ação não pode ser desfeita. Deseja realmente excluir este item?</p>
  </div>
</Modal>`}
          />
        </details>

        <details style={{ marginTop: '16px' }}>
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold', padding: '8px' }}
          >
            Modal de Cadastro (Form com múltiplos inputs)
          </summary>
          <CodeSnippet
            code={`const inputs = [
  { label: 'Nome Completo', placeholder: 'Digite seu nome', leftIcon: faUser },
  { label: 'CPF', placeholder: '000.000.000-00', leftIcon: faIdCard },
  { label: 'E-mail', placeholder: 'seu@email.com', leftIcon: faEnvelope },
  { label: 'Telefone', placeholder: '(00) 00000-0000', leftIcon: faPhone },
  { label: 'Endereço', placeholder: 'Rua, número', leftIcon: faMapMarkerAlt },
];

<Modal
  title="Cadastro de Usuário"
  type="form"
  inputs={inputs}
  onClose={() => setModal(false)}
  buttonLeft={{ label: 'Cancelar', onClick: () => setModal(false) }}
  buttonRight={{ label: 'Cadastrar', onClick: () => handleRegister() }}
>
  <p>Preencha os campos abaixo para criar sua conta.</p>
</Modal>`}
          />
        </details>

        <details style={{ marginTop: '16px' }}>
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold', padding: '8px' }}
          >
            Modal de Produtos (Items com imagens e conteúdo rico)
          </summary>
          <CodeSnippet
            code={`const products = [
  {
    label: 'Notebook Dell Inspiron 15',
    img: 'url-imagem',
    content: (
      <div>
        <p><strong>Especificações:</strong></p>
        <ul>
          <li>Processador: Intel Core i7</li>
          <li>Memória: 16GB RAM</li>
        </ul>
        <p style={{ color: '#168821' }}>R$ 4.299,00</p>
      </div>
    )
  }
];

<Modal
  title="Catálogo de Produtos"
  type="items"
  items={products}
  onClose={() => setModal(false)}
  buttonRight={{ label: 'Fechar', onClick: () => setModal(false) }}
>
  <p>Clique em um produto para ver mais detalhes.</p>
</Modal>`}
          />
        </details>

        <details style={{ marginTop: '16px' }}>
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold', padding: '8px' }}
          >
            Modal de Termos (Items com seções expansíveis)
          </summary>
          <CodeSnippet
            code={`const terms = [
  {
    label: '1. Aceitação dos Termos',
    img: '',
    content: <p>Texto completo da seção...</p>
  },
  {
    label: '2. Uso do Serviço',
    img: '',
    content: <p>Texto completo da seção...</p>
  }
];

<Modal
  title="Termos e Condições de Uso"
  type="items"
  items={terms}
  onClose={() => setModal(false)}
  buttonRight={{ label: 'Li e Aceito', onClick: () => handleAccept() }}
/>`}
          />
        </details>
      </div>

      {/* Modais de exemplo */}
      {confirmModal && (
        <Modal
          title="Confirmar Ação"
          type="items"
          items={[]}
          onClose={() => setConfirmModal(false)}
          buttonLeft={{
            label: 'Cancelar',
            onClick: () => setConfirmModal(false),
          }}
          buttonRight={{
            label: 'Confirmar',
            onClick: () => {
              alert('Ação confirmada!');
              setConfirmModal(false);
            },
          }}
        >
          <p>Tem certeza que deseja realizar esta ação?</p>
        </Modal>
      )}

      {deleteModal && (
        <Modal
          title="Confirmar Exclusão"
          type="form"
          inputs={[]}
          onClose={() => setDeleteModal(false)}
          buttonLeft={{
            label: 'Cancelar',
            onClick: () => setDeleteModal(false),
          }}
          buttonRight={{
            label: 'Excluir',
            onClick: () => {
              alert('Item excluído!');
              setDeleteModal(false);
            },
          }}
          closeOnOverlayClick={false}
        >
          <div style={{ color: '#c8161d' }}>
            <strong>⚠️ Atenção!</strong>
            <p>
              Esta ação não pode ser desfeita. Deseja realmente excluir este
              item?
            </p>
          </div>
        </Modal>
      )}

      {loginModal && (
        <Modal
          title="Login"
          type="form"
          inputs={[
            {
              label: 'Email',
              placeholder: 'seu@email.com',
              leftIcon: faEnvelope,
            },
            { label: 'Senha', placeholder: '••••••••', leftIcon: faLock },
          ]}
          onClose={() => setLoginModal(false)}
          buttonRight={{
            label: 'Entrar',
            onClick: () => {
              alert('Login realizado!');
              setLoginModal(false);
            },
          }}
        >
          <p>Acesse sua conta para continuar</p>
        </Modal>
      )}

      {registerModal && (
        <Modal
          title="Cadastro de Usuário"
          type="form"
          inputs={[
            {
              label: 'Nome Completo',
              placeholder: 'Digite seu nome',
              leftIcon: faUser,
            },
            { label: 'CPF', placeholder: '000.000.000-00', leftIcon: faIdCard },
            {
              label: 'E-mail',
              placeholder: 'seu@email.com',
              auxiliaryText: 'Usaremos para enviar atualizações',
              leftIcon: faEnvelope,
            },
            {
              label: 'Telefone',
              placeholder: '(00) 00000-0000',
              leftIcon: faPhone,
            },
            {
              label: 'Endereço',
              placeholder: 'Rua, número',
              leftIcon: faMapMarkerAlt,
            },
          ]}
          onClose={() => setRegisterModal(false)}
          buttonLeft={{
            label: 'Cancelar',
            onClick: () => setRegisterModal(false),
          }}
          buttonRight={{
            label: 'Cadastrar',
            onClick: () => {
              alert('Cadastro realizado com sucesso!');
              setRegisterModal(false);
            },
          }}
        >
          <p>Preencha os campos abaixo para criar sua conta.</p>
        </Modal>
      )}

      {productModal && (
        <Modal
          title="Catálogo de Produtos"
          type="items"
          items={productItems}
          onClose={() => setProductModal(false)}
          buttonRight={{
            label: 'Fechar',
            onClick: () => setProductModal(false),
          }}
        >
          <p>Clique em um produto para ver mais detalhes e especificações.</p>
        </Modal>
      )}

      {termsModal && (
        <Modal
          title="Termos e Condições de Uso"
          type="items"
          items={termsItems}
          onClose={() => setTermsModal(false)}
          buttonRight={{
            label: 'Li e Aceito',
            onClick: () => {
              alert('Termos aceitos!');
              setTermsModal(false);
            },
          }}
        >
          <p>
            Leia atentamente os termos e condições abaixo. Clique em cada seção
            para expandir e ver os detalhes.
          </p>
        </Modal>
      )}

      {successModal && (
        <Modal
          title="Operação Concluída com Sucesso!"
          type="form"
          inputs={[]}
          onClose={() => setSuccessModal(false)}
          buttonRight={{
            label: 'Fechar',
            onClick: () => setSuccessModal(false),
          }}
        >
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', color: '#168821' }}>✓</div>
            <h3 style={{ color: '#168821', marginTop: '16px' }}>Tudo certo!</h3>
            <p>Sua solicitação foi processada com sucesso.</p>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Você receberá um e-mail de confirmação em breve.
            </p>
          </div>
        </Modal>
      )}

      {notificationsModal && (
        <Modal
          title="Central de Notificações"
          type="items"
          items={notificationItems}
          onClose={() => setNotificationsModal(false)}
          buttonLeft={{
            label: 'Marcar todas como lidas',
            onClick: () => alert('Notificações marcadas como lidas'),
          }}
          buttonRight={{
            label: 'Fechar',
            onClick: () => setNotificationsModal(false),
          }}
        >
          <p>Você tem {notificationItems.length} notificações não lidas.</p>
        </Modal>
      )}

      {settingsModal && (
        <Modal
          title="Configurações Avançadas"
          type="form"
          inputs={[
            {
              label: 'Nome da Empresa',
              placeholder: 'Digite o nome',
              leftIcon: faBuilding,
            },
            {
              label: 'CNPJ',
              placeholder: '00.000.000/0000-00',
              leftIcon: faIdCard,
            },
            {
              label: 'Website',
              placeholder: 'https://exemplo.com',
              leftIcon: faGlobe,
            },
            {
              label: 'E-mail Corporativo',
              placeholder: 'contato@empresa.com',
              leftIcon: faEnvelope,
            },
            {
              label: 'Telefone Comercial',
              placeholder: '(00) 0000-0000',
              leftIcon: faPhone,
            },
          ]}
          onClose={() => setSettingsModal(false)}
          buttonLeft={{
            label: 'Cancelar',
            onClick: () => setSettingsModal(false),
          }}
          buttonRight={{
            label: 'Salvar Configurações',
            onClick: () => {
              alert('Configurações salvas!');
              setSettingsModal(false);
            },
          }}
        >
          <p>Configure as informações da sua empresa abaixo.</p>
        </Modal>
      )}
    </div>
  );
};

ExemplosDeUso.story = { name: '3. Exemplos de Uso Prático' };
