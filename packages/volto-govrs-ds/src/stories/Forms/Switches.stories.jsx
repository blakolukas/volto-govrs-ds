import React from 'react';
import '../../theme/Formularios/Switches.scss';

export default {
  title: 'Forms/Switches',
  parameters: { layout: 'padded' },
};

const Example = () => (
  <div style={{ padding: 12 }}>
    <input
      type="checkbox"
      role="switch"
      className="govrs-switch"
      defaultChecked
      aria-label="Exemplo de switch"
    />
  </div>
);

export const SwitchDocumentacao = () => (
  <div>
    <div style={{ display: 'block', padding: 12, maxWidth: 1140 }}>
      <h3 style={{ marginTop: 0 }}>Switch</h3>
      <Example />

      <div style={{ paddingTop: 18 }}>
        <p style={{ color: '#444' }}>
          Você pode aplicar a classe tanto diretamente no <em>input</em> quanto
          no wrapper pai. As duas abordagens produzem o mesmo resultado visual —
          escolha aquela que melhor se encaixa na sua marcação.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <h4>Aplicar na tag</h4>
          <div style={{ marginTop: 18 }}>
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                width: '100%',
              }}
            >
              <code>{`<input type="checkbox" role="switch" class="govrs-switch" />`}</code>
            </pre>
            <div style={{ marginTop: 12 }}>
              <input
                type="checkbox"
                role="switch"
                className="govrs-switch"
                defaultChecked
                aria-label="Exemplo - tag"
              />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 280 }}>
          <h4>Aplicar no wrapper (pai)</h4>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              width: '100%',
            }}
          >
            <code>{`<div class="govrs-switch">\n  <input type="checkbox" role="switch" />\n</div>`}</code>
          </pre>
          <div
            style={{ marginTop: 12, border: '1px dashed #ddd', padding: 12 }}
          >
            <div className="govrs-switch">
              <input
                type="checkbox"
                role="switch"
                defaultChecked
                aria-label="Exemplo - wrapper"
              />
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Detalhes de Uso</h3>
      <ul style={{ color: '#444' }}>
        <li>
          Aplicar a classe na tag: preferível quando você controla diretamente o
          input em componentes isolados.
        </li>
        <li>
          Aplicar no wrapper (pai): útil quando você quer aplicar o estilo a
          vários inputs ou encapsular o switch em um componente sem alterar o
          elemento interno.
        </li>
        <li>
          Use <code>disabled</code> no input para o estado desabilitado.
        </li>
      </ul>
    </div>
  </div>
);

SwitchDocumentacao.storyName = 'Switch';

// Interactive story to demonstrate disabled control via Storybook controls
const InteractiveTemplate = ({ disabled }) => (
  <div style={{ padding: 12 }}>
    <input
      type="checkbox"
      role="switch"
      className="govrs-switch"
      defaultChecked
      aria-label="Interativo"
      disabled={disabled}
    />
  </div>
);

export const SwitchInterativo = InteractiveTemplate.bind({});
SwitchInterativo.storyName = 'Switch Interativo';
SwitchInterativo.args = {
  disabled: false,
};
SwitchInterativo.argTypes = {
  disabled: { control: 'boolean' },
};

export const SwitchEmFormulario = () => {
  const [checked, setChecked] = React.useState(false);
  const [submittedValue, setSubmittedValue] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(checked);
  };

  return (
    <div style={{ padding: 12, maxWidth: 700 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <label
            className="label-base"
            style={{ minWidth: 160 }}
            htmlFor="sw-darkmode"
          >
            Ativar modo escuro
          </label>
          <div>
            <input
              id="sw-darkmode"
              type="checkbox"
              role="switch"
              className="govrs-switch"
              aria-label="Ativar modo escuro"
              checked={checked}
              onChange={(ev) => setChecked(ev.target.checked)}
            />
            <div style={{ color: '#666', marginTop: 6, fontSize: 13 }}>
              Altere para escurecer a interface
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>

      <div style={{ marginTop: 16 }}>
        <strong>Valor submetido:</strong>
        <div style={{ marginTop: 8, color: '#222' }}>
          {submittedValue === null ? (
            <em>Nenhum envio ainda</em>
          ) : (
            <span>{submittedValue ? 'Ativado' : 'Desativado'}</span>
          )}
        </div>
      </div>
    </div>
  );
};
SwitchEmFormulario.storyName = 'Switch em Formulário';
