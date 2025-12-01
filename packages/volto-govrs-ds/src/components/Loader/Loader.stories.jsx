import React from 'react';
import Loader from './index';

export default {
  title: 'Components/Loader',
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const LoaderDocs = () => (
  <div style={{ padding: 16, maxWidth: 720 }}>
    <h1>Loader — Documentação</h1>

    <section style={{ marginTop: 8 }}>
      <h2>Variante Padrão</h2>
      <div
        style={{
          width: '100%',
          margin: '40px 8px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Loader
          variant="default"
          label="Carregando..."
          labelPosition="bottom"
        />
      </div>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Loader variant="default" label="Carregando..." labelPosition="bottom" />`}</code>
      </pre>
      <p>
        A variante padrão exibe um spinner simples. Use a prop{' '}
        <code>label</code> para adicionar um rótulo e <code>labelPosition</code>{' '}
        para posicioná-lo (top, bottom, left, right).
      </p>
      <div style={{ marginTop: 12 }}>
        <h3>Posições de rótulo</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            marginTop: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
              border: '1px solid #eee',
            }}
          >
            <Loader variant="default" label="Top" labelPosition="top" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
              border: '1px solid #eee',
            }}
          >
            <Loader variant="default" label="Bottom" labelPosition="bottom" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
              border: '1px solid #eee',
            }}
          >
            <Loader variant="default" label="Left" labelPosition="left" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
              border: '1px solid #eee',
            }}
          >
            <Loader variant="default" label="Right" labelPosition="right" />
          </div>
        </div>
      </div>
    </section>

    <section style={{ marginTop: 16 }}>
      <h2>Props</h2>
      <ul>
        <li>
          <code>variant</code>: 'default' | 'percentage' (Caso não seja passada
          variante, 'Default' será assumida como valor da variante).
        </li>
        <li>
          <code>label</code>: Texto a ser passado que aparecerá na posição
          escolhida em <code>labelPosition</code> para a variante 'default'.
        </li>
        <li>
          <code>labelPosition</code>: posição do texto colocado em{' '}
          <code>label</code>.
        </li>
      </ul>
    </section>

    <section style={{ marginTop: 16 }}>
      <h2>Variante Porcentagem</h2>
      <div
        style={{
          width: '100%',
          margin: '40px 8px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Loader variant="percentage" value={65} color="#1A7235" />
      </div>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Loader variant="percentage" value={65} color="#1A7235" />`}</code>
      </pre>
      <p>
        A variante de porcentagem renderiza um anel com a porcentagem
        centralizada. A prop
        <code> value</code> controla o preenchimento (0: Nada Preenchido -
        100-Totalmente Preenchido).
      </p>
    </section>

    <section style={{ marginTop: 16 }}>
      <h2>Props</h2>
      <ul>
        <li>
          <code>variant</code>: 'default' | 'percentage' (Caso não seja passada
          variante, 'Default' será assumida como valor da variante).
        </li>
        <li>
          <code>value</code>: número 0-100 para a variante 'percentage' que
          preenche o anel.
        </li>
        <li>
          <code>color</code>: Valor em hexadecimal (ex.: <code>#1b5e20</code>)
          ou uma variável CSS (ex.: <code>var(--green-rs-60)</code>) para a cor
          que preenche o anel da variante 'percentage'.
        </li>
      </ul>
    </section>
  </div>
);

LoaderDocs.parameters = {
  controls: {
    disable: true,
    exclude: ['variant', 'value', 'color', 'label', 'labelPosition'],
  },
  previewTabs: {
    'storybook/controls/panel': { hidden: true },
  },
  options: { showPanel: false },
};

LoaderDocs.argTypes = {};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  label: '',
  labelPosition: 'bottom',
};
Default.parameters = {
  layout: 'centered',
};
Default.argTypes = {
  label: { control: { type: 'text' } },
  labelPosition: {
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'],
  },
};

export const Percentage = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
    }}
  >
    <Loader {...args} />
    <button
      type="button"
      style={{
        background: 'transparent',
        border: 'none',
        padding: '4px 0',
        cursor: 'pointer',
        color: '#1b5e20',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1,
      }}
    >
      Cancelar
    </button>
  </div>
);
Percentage.args = {
  variant: 'percentage',
  value: 65,
  color: '#1A7235',
};
Percentage.parameters = {
  layout: 'centered',
};
Percentage.argTypes = {
  value: { control: { type: 'number', min: 0, max: 100 } },
  color: { control: { type: 'color' } },
};
