import React from 'react';
import '../../theme/Formularios/Radio.scss';

export default {
  title: 'Forms/Radio',
  parameters: { layout: 'padded' },
};

const Demo = () => (
  <div style={{ padding: 12 }}>
    <input
      type="radio"
      name="demo"
      className="govrs-radio"
      defaultChecked
      aria-label="Demo radio"
    />
  </div>
);

export const RadioDocumentacao = () => (
  <div>
    <div style={{ display: 'block', padding: 12, maxWidth: 1140 }}>
      <h3 style={{ marginTop: 0 }}>Radio</h3>
      <Demo />

      <div style={{ paddingTop: 18 }}>
        <p style={{ color: '#444' }}>
          Você pode aplicar a classe tanto diretamente no <em>input</em> quanto
          no wrapper pai. As duas abordagens produzem o mesmo resultado visual.
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
          <div style={{ marginTop: 12 }}>
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                maxWidth: '100%',
              }}
            >
              <code>{`<input type="radio" class="govrs-radio" name="group" />`}</code>
            </pre>
            <div style={{ marginTop: 12 }}>
              <input
                type="radio"
                name="g1"
                className="govrs-radio"
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
              overflowX: 'auto',
              maxWidth: '100%',
            }}
          >
            <code>{`<div class="govrs-radio">\n  <input type="radio" name="group" />\n</div>`}</code>
          </pre>
          <div
            style={{ marginTop: 12, border: '1px dashed #ddd', padding: 12 }}
          >
            <div className="govrs-radio">
              <input type="radio" name="g2" aria-label="Exemplo - wrapper" />
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Estados</h3>
      <div
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ marginBottom: 6 }}>Normal</div>
          <input
            type="radio"
            name="st"
            className="govrs-radio"
            aria-label="normal"
          />
        </div>

        <div>
          <div style={{ marginBottom: 6 }}>Marcado</div>
          <input
            type="radio"
            name="st"
            className="govrs-radio"
            defaultChecked
            aria-label="checked"
          />
        </div>

        <div>
          <div style={{ marginBottom: 6 }}>Disabled</div>
          <input
            type="radio"
            name="st"
            className="govrs-radio"
            disabled
            aria-label="disabled"
          />
        </div>

        <div>
          <div style={{ marginBottom: 6 }}>Danger</div>
          <input
            type="radio"
            name="st"
            className="govrs-radio govrs-radio--danger"
            aria-label="danger"
          />
        </div>

        <div>
          <div style={{ marginBottom: 6 }}>Success</div>
          <input
            type="radio"
            name="st"
            className="govrs-radio govrs-radio--success"
            defaultChecked
            aria-label="success"
          />
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Detalhes de Uso</h3>
      <ul style={{ color: '#444' }}>
        <li>
          Use a classe <code>govrs-radio</code> no input ou no wrapper pai para
          estilos base.
        </li>
        <li>
          Para agrupar opções, coloque o mesmo atributo <code>name</code> nas
          radios.
        </li>
        <li>
          Prefira aplicar modificadores como <code>govrs-radio--danger</code>{' '}
          diretamente no <code>input</code> quando possível.
        </li>
      </ul>

      <h3 style={{ marginTop: 18 }}>Grupos</h3>
      <p style={{ color: '#444' }}>
        Radios que pertencem ao mesmo grupo devem compartilhar o mesmo atributo{' '}
        <code>name</code>. Abaixo há um exemplo de marcação e uma demonstração
        ao vivo.
      </p>

      <div style={{ marginTop: 8, marginBottom: 12 }}>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<label><input type="radio" name="colors" value="red" class="govrs-radio"> Vermelho</label>
<label><input type="radio" name="colors" value="green" class="govrs-radio"> Verde</label>
<label><input type="radio" name="colors" value="blue" class="govrs-radio"> Azul</label>`}</code>
        </pre>

        <div
          style={{
            marginTop: 12,
            padding: 12,
            border: '1px solid #eee',
            borderRadius: 6,
            display: 'inline-block',
          }}
        >
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="radio"
                name="colors"
                value="red"
                className="govrs-radio"
                aria-label="Vermelho"
              />
              <span>Vermelho</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="radio"
                name="colors"
                value="green"
                className="govrs-radio"
                defaultChecked
                aria-label="Verde"
              />
              <span>Verde</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="radio"
                name="colors"
                value="blue"
                className="govrs-radio"
                aria-label="Azul"
              />
              <span>Azul</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

RadioDocumentacao.storyName = 'Radio Documentacao';

export const RadioInterativo = (args) => {
  const disabled = !!args.disabled;
  return (
    <div style={{ padding: 12 }}>
      <label style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <input
          type="radio"
          name="ri"
          className="govrs-radio"
          disabled={disabled}
          aria-label="Interativo"
        />
        <span className="label-base">Opção A</span>
      </label>
    </div>
  );
};

RadioInterativo.storyName = 'Radio Interativo';
RadioInterativo.args = { disabled: false };
RadioInterativo.argTypes = { disabled: { control: 'boolean' } };

export const RadioEmFormulario = () => {
  const [value, setValue] = React.useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(
      document.querySelector('input[name="formRadio"]:checked')?.value || null,
    );
  };

  return (
    <div style={{ padding: 12, maxWidth: 700 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="radio"
              name="formRadio"
              value="a"
              className="govrs-radio"
              aria-label="A"
            />
            <span>Opção A</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="radio"
              name="formRadio"
              value="b"
              className="govrs-radio"
              aria-label="B"
              defaultChecked
            />
            <span>Opção B</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="radio"
              name="formRadio"
              value="c"
              className="govrs-radio"
              aria-label="C"
            />
            <span>Opção C</span>
          </label>
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>

      <div style={{ marginTop: 12 }}>
        <strong>Valor submetido:</strong>
        <div style={{ marginTop: 8, color: '#222' }}>
          {value === null ? <em>Nenhum envio ainda</em> : <span>{value}</span>}
        </div>
      </div>
    </div>
  );
};

RadioEmFormulario.storyName = 'Radio em Formulário';
