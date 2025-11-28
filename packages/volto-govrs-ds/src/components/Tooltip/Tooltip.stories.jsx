import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'padded' },
};

const IconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <circle cx="14" cy="14" r="14" fill="#E52207" />
    <path
      d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84377 19.625 9.46877 19.2188L8.78127 18.5312C8.37502 18.1562 8.37502 17.5312 8.78127 17.1562L11.9063 14L8.78127 10.875C8.37502 10.5 8.37502 9.875 8.78127 9.5L9.46877 8.8125C9.84377 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
      fill="white"
    />
  </svg>
);

export const TooltipDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 1045 }}>
    <h3 style={{ marginTop: 0 }}>Tooltip</h3>

    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}
    >
      <Tooltip content="Posicionado abaixo" position="bottom">
        <button style={{ padding: 8 }}>Mostrar abaixo</button>
      </Tooltip>
    </div>

    <section style={{ marginBottom: 12 }}>
      <p style={{ color: '#444' }}>
        O componente <code>Tooltip</code> exibe conteúdo contextual quando o
        usuário passa o mouse ou foca um elemento (o "trigger"). Nesta
        implementação o padrão é: se você passar a prop <code>content</code>, o{' '}
        <strong>children</strong>
        será usado como o trigger (por exemplo um botão, label ou outro elemento
        interativo); caso contrário, o Tooltip renderiza um gatilho padrão e
        trata <strong>children</strong> como o conteúdo do balão.
      </p>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Children vs content — padrões de uso</h4>
      <p style={{ color: '#444', marginTop: 6 }}>
        Existem dois padrões de uso suportados pelo componente:
      </p>

      <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
        <div style={{ flex: 1 }}>
          <h5 style={{ margin: '6px 0' }}>children = trigger (recomendado)</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Passe o conteúdo do balão via <code>content</code>. O{' '}
            <code>children</code>
            será usado como o elemento visível que dispara o tooltip (trigger).
            Útil quando você quer anexar um tooltip a um botão, label ou dot.
          </p>
          <div style={{ padding: 12 }}>
            <Tooltip content="Rótulo do passo" position="top">
              <button style={{ padding: 8 }}>Trigger (children)</button>
            </Tooltip>
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`<Tooltip content="Rótulo do passo" position="top">
  <button>Trigger</button>
</Tooltip>`}</code>
          </pre>
        </div>

        <div style={{ flex: 1 }}>
          <h5 style={{ margin: '6px 0' }}>children = body (compatibilidade)</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Se <code>content</code> não for fornecido, o componente mantém o
            comportamento legado: ele considera <code>children</code> como o
            corpo do tooltip e renderiza um trigger padrão para ativá-lo. Use
            quando quiser declarar diretamente o conteúdo do balão como JSX.
          </p>
          <div style={{ padding: 12 }}>
            <Tooltip position="top">
              <div>Conteúdo complexo do tooltip (children = body)</div>
            </Tooltip>
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`<Tooltip position="top">
  <div>Conteúdo do tooltip (JSX)</div>
</Tooltip>`}</code>
          </pre>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <strong>Nota de acessibilidade:</strong>
        <p style={{ color: '#444' }}>
          Quando o <code>children</code> for um elemento não interativo (por
          exemplo <code>span</code> ou <code>div</code>), adicione{' '}
          <code>tabIndex="0"</code> e <code>role="button"</code> para que
          usuários de teclado possam focá-lo e acionar o tooltip.
          Alternativamente, use um elemento nativo interativo como{' '}
          <code>button</code>.
        </p>
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Atributos</h4>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>content</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Texto (string ou node) que será exibido dentro do balão. Quando
          presente, o<code>children</code> atua como o trigger que ativa o
          tooltip.
        </p>
        <div style={{ padding: 12 }}>
          <Tooltip content="Rótulo do elemento" position="top">
            <button style={{ padding: 8 }}>Exemplo: hover aqui</button>
          </Tooltip>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// children = trigger, content = tooltip body
<Tooltip content="Rótulo do elemento" position="top"> 
  <button>Trigger</button>
</Tooltip>`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>title</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          A prop <code>title</code> (string) adiciona um cabeçalho em negrito no
          início do balão, útil para sumarizar o tipo de informação exibida.
          Quando usada sem <code>icon</code>, o título aparece acima do conteúdo
          e o restante do texto mantém alinhamento padrão.
        </p>
        <div style={{ padding: 12 }}>
          <Tooltip
            content={<span>Este é um aviso importante</span>}
            title="Atenção"
            position="right"
          >
            <button style={{ padding: 8 }}>Exemplo: com título</button>
          </Tooltip>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Tooltip content="Aviso detalhado" title="Atenção"><button>Trigger</button></Tooltip>`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>icon</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          A prop <code>icon</code> (node) permite adicionar um ícone à esquerda
          do cabeçalho, reforçando visualmente o significado do título ou do
          conteúdo. Se apenas <code>icon</code> for passado (sem{' '}
          <code>title</code>), o conteúdo continuará sendo exibido normalmente e
          o texto será centralizado quando apropriado.
        </p>
        <div style={{ padding: 12 }}>
          <Tooltip
            content={<span>Este é um aviso importante</span>}
            icon={IconSvg}
            position="right"
          >
            <button style={{ padding: 8 }}>Exemplo: com ícone</button>
          </Tooltip>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Tooltip icon={<MyIcon/>} content="Conteúdo"><button>Trigger</button></Tooltip>`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>position</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Controla onde o balão aparece relativo ao trigger: <code>top</code>,{' '}
          <code>right</code>,<code>bottom</code>, <code>left</code>.
        </p>
        <div style={{ padding: 12 }}>
          <Tooltip content="Label à direita" position="right">
            <button style={{ padding: 8 }}>Exemplo: posição direita</button>
          </Tooltip>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Tooltip content="Label" position="right"><button>Trigger</button></Tooltip>`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>state</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Opcional: <code>success</code> | <code>warning</code> |{' '}
          <code>error</code> | <code>info</code>. Quando fornecido, o background
          do balão usa as cores dos Badges para indicar o estado.
        </p>
        <div style={{ padding: 12, display: 'flex', gap: 8 }}>
          <Tooltip content="Sucesso" state="success">
            <button style={{ padding: 8 }}>S</button>
          </Tooltip>
          <Tooltip content="Atenção" state="warning">
            <button style={{ padding: 8 }}>W</button>
          </Tooltip>
          <Tooltip content="Erro" state="error">
            <button style={{ padding: 8 }}>E</button>
          </Tooltip>
          <Tooltip content="Info" state="info">
            <button style={{ padding: 8 }}>I</button>
          </Tooltip>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Tooltip content="Operação OK" state="success"><button>Trigger</button></Tooltip>`}</code>
        </pre>
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Exemplos</h4>

      <div style={{ marginBottom: 12 }}>
        <h5 style={{ margin: '6px 0' }}>Básico</h5>
        <div style={{ padding: 20 }}>
          <Tooltip content="Texto do tooltip" position="top">
            <button style={{ padding: 8 }}>Hover aqui</button>
          </Tooltip>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <h5 style={{ margin: '6px 0' }}>Com ícone e título</h5>
        <div style={{ padding: 20 }}>
          <Tooltip
            content={<span>Este é um aviso importante</span>}
            title="Atenção"
            icon={IconSvg}
            position="right"
          >
            <button style={{ padding: 8 }}>Hover</button>
          </Tooltip>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <h5 style={{ margin: '6px 0' }}>Estados</h5>
        <div style={{ padding: 20, display: 'flex', gap: 12 }}>
          <Tooltip content="Sucesso" state="success">
            <button style={{ padding: 8 }}>S</button>
          </Tooltip>
          <Tooltip content="Atenção" state="warning">
            <button style={{ padding: 8 }}>W</button>
          </Tooltip>
          <Tooltip content="Erro" state="error">
            <button style={{ padding: 8 }}>E</button>
          </Tooltip>
          <Tooltip content="Info" state="info">
            <button style={{ padding: 8 }}>I</button>
          </Tooltip>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <h5 style={{ margin: '6px 0' }}>Posições</h5>
        <div
          style={{
            padding: 20,
            display: 'flex',
            gap: 40,
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
          }}
        >
          <Tooltip content="Topo" position="top">
            <button>Top</button>
          </Tooltip>
          <Tooltip content="Direita" position="right">
            <button>Right</button>
          </Tooltip>
          <Tooltip content="Baixo" position="bottom">
            <button>Bottom</button>
          </Tooltip>
          <Tooltip content="Esquerda" position="left">
            <button>Left</button>
          </Tooltip>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>
        Uso com outros componentes (ex.: radio)
      </h4>
      <p style={{ color: '#444' }}>
        Você pode envolver labels, botões ou wrappers de inputs para
        disponibilizar informação contextual.
      </p>
      <div style={{ padding: 20 }}>
        <Tooltip content="Opção A: descrição" position="right">
          <label style={{ cursor: 'pointer' }}>
            <input type="radio" name="r" /> Opção A
          </label>
        </Tooltip>
      </div>
    </section>
  </div>
);

export const TooltipInterativo = ({
  content,
  title,
  state,
  position,
  withIcon,
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
    }}
  >
    <Tooltip
      content={content}
      title={title}
      state={state}
      position={position}
      icon={withIcon ? IconSvg : null}
    >
      <button style={{ padding: 8 }}>Trigger</button>
    </Tooltip>
  </div>
);

TooltipInterativo.argTypes = {
  content: { control: 'text' },
  title: { control: 'text' },
  state: {
    control: { type: 'select' },
    options: ['success', 'warning', 'error', 'info', 'none'],
    description: 'state of the tooltip',
  },
  position: {
    control: { type: 'select' },
    options: ['top', 'right', 'bottom', 'left'],
    description: 'Position of the tooltip',
  },
  withIcon: { control: 'boolean' },
};

TooltipInterativo.args = {
  content: 'Texto do tooltip de exemplo',
  title: '',
  state: '',
  position: 'top',
  withIcon: false,
};
