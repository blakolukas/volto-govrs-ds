import React from 'react';
import '../../theme/Formularios/Checkbox.scss';

export default {
  title: 'Forms/Checkbox',
  parameters: { layout: 'padded' },
};

const Demo = () => (
  <div style={{ padding: 12 }}>
    <input
      type="checkbox"
      className="govrs-checkbox"
      defaultChecked
      aria-label="Demo checkbox"
    />
  </div>
);

const useMasterSync = (masterRef, checkedSet, itemsLength) => {
  React.useEffect(() => {
    const total = itemsLength;
    const selected = checkedSet.size;
    if (!masterRef || !masterRef.current) return;
    masterRef.current.checked = selected === total;
    masterRef.current.indeterminate = selected > 0 && selected < total;
  }, [checkedSet, itemsLength, masterRef]);
};

export const CheckboxDocumentacao = () => {
  const items = ['A', 'B', 'C'];
  const [checkedSet, setCheckedSet] = React.useState(new Set());
  const masterRef = React.useRef(null);
  useMasterSync(masterRef, checkedSet, items.length);

  const toggleOne = (id) => {
    setCheckedSet((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const toggleAll = () => {
    setCheckedSet((prev) => {
      if (prev.size === items.length) return new Set();
      return new Set(items);
    });
  };

  const intermediateRef = React.useRef(null);
  React.useEffect(() => {
    if (intermediateRef.current) {
      intermediateRef.current.indeterminate = true;
    }
  }, []);

  return (
    <div>
      <div style={{ display: 'block', padding: 12, maxWidth: 1200 }}>
        <h3 style={{ marginTop: 0 }}>Checkbox</h3>
        <Demo />

        <div style={{ paddingTop: 12 }}>
          <p style={{ color: '#444' }}>
            O checkbox aceita a classe no <code>input</code> (
            <code>govrs-checkbox</code>), aplicada no <code>input</code> ou no
            wrapper pai.
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
                <code>{`<input type="checkbox" class="govrs-checkbox" />`}</code>
              </pre>
              <div style={{ marginTop: 12 }}>
                <input
                  type="checkbox"
                  className="govrs-checkbox"
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
                overflowX: 'auto',
                maxWidth: '100%',
              }}
            >
              <code>{`<div class="govrs-checkbox">\n  <input type="checkbox" />\n</div>`}</code>
            </pre>
            <div
              style={{ marginTop: 12, border: '1px dashed #ddd', padding: 12 }}
            >
              <div className="govrs-checkbox">
                <input
                  type="checkbox"
                  defaultChecked
                  aria-label="Exemplo - wrapper"
                />
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
              type="checkbox"
              className="govrs-checkbox"
              aria-label="normal"
            />
          </div>

          <div>
            <div style={{ marginBottom: 6 }}>Marcado</div>
            <input
              type="checkbox"
              className="govrs-checkbox"
              defaultChecked
              aria-label="checked"
            />
          </div>

          <div>
            <div style={{ marginBottom: 6 }}>Disabled</div>
            <input
              type="checkbox"
              className="govrs-checkbox"
              disabled
              aria-label="disabled"
            />
          </div>

          <div>
            <div style={{ marginBottom: 6 }}>Danger</div>
            <input
              type="checkbox"
              className="govrs-checkbox govrs-checkbox--danger"
              aria-label="danger"
            />
          </div>

          <div>
            <div style={{ marginBottom: 6 }}>Success</div>
            <input
              type="checkbox"
              className="govrs-checkbox govrs-checkbox--success"
              aria-label="success"
            />
          </div>

          <div>
            <div style={{ marginBottom: 6 }}>Intermediário</div>
            <input
              ref={intermediateRef}
              type="checkbox"
              className="govrs-checkbox--group"
              aria-label="intermediate"
            />
          </div>
        </div>

        <h3 style={{ marginTop: 18 }}>Exemplos de uso: Danger / Success</h3>
        <div
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: 300 }}>
            <h4>Aplicar na tag (input)</h4>
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                maxWidth: '100%',
              }}
            >
              <code>{`<input type="checkbox" class="govrs-checkbox--danger" />\n<input type="checkbox" class="govrs-checkbox--success" />`}</code>
            </pre>
            <div
              style={{
                marginTop: 12,
                display: 'flex',
                gap: 12,
                alignItems: 'center',
              }}
            >
              <input
                type="checkbox"
                className="govrs-checkbox--danger"
                aria-label="danger - tag"
              />
              <input
                type="checkbox"
                className="govrs-checkbox--success"
                aria-label="success - tag"
                defaultChecked
              />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 300 }}>
            <h4>Aplicar no wrapper (pai)</h4>
            <p style={{ color: '#444', marginTop: 6 }}>
              Você também pode aplicar as classes modificadoras no wrapper pai;
              o estilo do checkbox será aplicado ao input interno.
            </p>
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                maxWidth: '100%',
                marginTop: 8,
              }}
            >
              <code>{`<div class="govrs-checkbox--danger">\n  <input type="checkbox" />\n</div>\n\n<div class="govrs-checkbox--success">\n  <input type="checkbox" />\n</div>`}</code>
            </pre>
            <div
              style={{
                marginTop: 12,
                display: 'flex',
                gap: 12,
                alignItems: 'center',
              }}
            >
              <div className="govrs-checkbox--danger">
                <input type="checkbox" aria-label="danger - wrapper" />
              </div>
              <div className="govrs-checkbox--success">
                <input
                  type="checkbox"
                  aria-label="success - wrapper"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: 18 }}>Detalhes de Uso</h3>
        <ul style={{ color: '#444' }}>
          <li>
            Use a classe <code>govrs-checkbox</code> no input ou no wrapper pai
            para estilos base (opcional).
          </li>
          <li>
            As classes modificadoras <code>govrs-checkbox--danger</code> e{' '}
            <code>govrs-checkbox--success</code> funcionam sozinhas aplicadas no{' '}
            <code>input</code> ou no wrapper — não é necessário repetir{' '}
            <code>govrs-checkbox</code>.
          </li>
          <li>
            É recomendado quando tiver a presença de mais de um checkbox na div,
            usar as classes <code>govrs-checkbox--danger</code> e{' '}
            <code>govrs-checkbox--success</code> diretamente na tag, visto que
            pode causar problemas relativos a dois checkbox assumindo sempre os
            mesmos valores.
          </li>
        </ul>
        <h3 style={{ marginTop: 18 }}>
          Checkbox de grupo (estado intermediário)
        </h3>
        <p style={{ color: '#444' }}>
          Quando um controle mestre (master) representa a seleção de um conjunto
          de checkboxes, recomendamos usar um checkbox com o estilo de "grupo"
          para indicar seleção parcial (estado <em>indeterminate</em>). A seguir
          há um exemplo de marcação e um pequeno trecho de JavaScript para gerir
          o estado <em>indeterminate</em> do mestre — o padrão usado no site do
          Governo (gov.br).
        </p>

        <div style={{ marginTop: 8, marginBottom: 12 }}>
          <div
            style={{
              padding: 12,
              border: '1px solid #eee',
              borderRadius: 6,
              display: 'inline-block',
            }}
          >
            <div style={{ marginBottom: 8, fontWeight: 600 }}>Demonstração</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  ref={masterRef}
                  type="checkbox"
                  className="govrs-checkbox--group"
                  onChange={toggleAll}
                  aria-label="Selecionar todos"
                />
                <span className="label-base">Selecionar todos</span>
              </label>
            </div>

            <div
              style={{
                marginTop: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {items.map((id) => (
                <label
                  key={id}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <input
                    type="checkbox"
                    className="govrs-checkbox"
                    checked={checkedSet.has(id)}
                    onChange={() => toggleOne(id)}
                    aria-label={`Item ${id}`}
                  />
                  <span>Item {id}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <h4>Exemplo de marcação</h4>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            maxWidth: '100%',
            marginTop: 8,
          }}
        >
          <code>{`<!-- master controla o grupo -->
<label>
  <input type="checkbox" class="govrs-checkbox--group" id="master" aria-controls="group-list" />
  Selecionar todos
</label>

<!-- itens do grupo -->
<div id="group-list">
  <label><input type="checkbox" class="govrs-checkbox" data-group="g1" /> Item A</label>
  <label><input type="checkbox" class="govrs-checkbox" data-group="g1" /> Item B</label>
  <label><input type="checkbox" class="govrs-checkbox" data-group="g1" /> Item C</label>
</div>`}</code>
        </pre>

        <h4>Exemplo de script (validação do estado indeterminate)</h4>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            maxWidth: '100%',
            marginTop: 8,
          }}
        >
          <code>{`// JavaScript mínimo para controlar o master e o estado indeterminate
const master = document.getElementById('master');
const items = Array.from(document.querySelectorAll('input[data-group="g1"]'));

function refreshMaster() {
  const selected = items.filter(i => i.checked).length;
  master.checked = selected === items.length;
  master.indeterminate = selected > 0 && selected < items.length;
}

master.addEventListener('change', () => items.forEach(i => (i.checked = master.checked)));
items.forEach(i => i.addEventListener('change', refreshMaster));
refreshMaster();`}</code>
        </pre>

        <h4>Boas práticas</h4>
        <ul style={{ color: '#444' }}>
          <li>
            Use <code>indeterminate</code> apenas como indicação visual de
            seleção parcial.
          </li>
          <li>
            Atualize <code>indeterminate</code> via JavaScript (propriedade do
            elemento), não via atributo HTML.
          </li>
          <li>
            Forneça atributos ARIA quando necessário; por exemplo{' '}
            <code>aria-controls</code> no master para indicar qual lista ele
            controla.
          </li>
          <li>
            Mantenha a interação previsível em formulários (o estado real dos
            checkboxes filhos deve corresponder ao que será submetido).
          </li>
        </ul>
      </div>
    </div>
  );
};

CheckboxDocumentacao.storyName = 'Checkbox Documentacao';

export const CheckboxInterativo = (args) => {
  let variantClass = 'govrs-checkbox';
  if (args.isDanger) variantClass = 'govrs-checkbox--danger';
  else if (args.isSuccess) variantClass = 'govrs-checkbox--success';
  return (
    <div style={{ padding: 12 }}>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'flex-start',
        }}
      >
        <span className="label-base">
          {args.label || 'Checkbox interativo'}
        </span>
        <input
          type="checkbox"
          className={variantClass}
          disabled={args.disabled}
          defaultChecked={false}
          aria-label="Checkbox interativo"
        />
      </label>
    </div>
  );
};

CheckboxInterativo.storyName = 'Checkbox Interativo';
CheckboxInterativo.args = {
  label: 'Checkbox interativo',
  isSuccess: false,
  isDanger: false,
  disabled: false,
};
CheckboxInterativo.argTypes = {
  label: { control: 'text' },
  isSuccess: { control: 'boolean' },
  isDanger: { control: 'boolean' },
  disabled: { control: 'boolean' },
};
export const CheckboxGrupoInterativo = (args) => {
  const items = ['A', 'B', 'C'];
  const [checkedSet, setCheckedSet] = React.useState(new Set());
  const [status, setStatus] = React.useState(null);
  const masterRef = React.useRef(null);
  useMasterSync(masterRef, checkedSet, items.length);

  const toggleOne = (id) => {
    setCheckedSet((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
    setStatus(null);
  };

  const toggleAll = () => {
    setCheckedSet((prev) => {
      if (prev.size === items.length) return new Set();
      return new Set(items);
    });
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    const selected = checkedSet.size;
    const min = Math.max(0, Math.min(args.minRequired || 0, items.length));
    if (selected >= min) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const disabled = !!args.disabled;
  const labelText = args.label || 'Grupo interativo';

  return (
    <form onSubmit={handleSubmit} style={{ padding: 12, maxWidth: 520 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <span className="label-base">{labelText}</span>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            ref={masterRef}
            type="checkbox"
            className={
              'govrs-checkbox--group' +
              (status === 'error'
                ? ' govrs-checkbox--danger'
                : status === 'success'
                  ? ' govrs-checkbox--success'
                  : '')
            }
            onChange={toggleAll}
            aria-label="Selecionar todos"
            disabled={disabled}
          />
          <span className="label-base">Selecionar todos</span>
        </label>

        <div
          style={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {items.map((id) => (
            <label
              key={id}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <input
                type="checkbox"
                className={
                  'govrs-checkbox' +
                  (status === 'error'
                    ? ' govrs-checkbox--danger'
                    : status === 'success'
                      ? ' govrs-checkbox--success'
                      : '')
                }
                checked={checkedSet.has(id)}
                onChange={() => toggleOne(id)}
                aria-label={`Item ${id}`}
                disabled={disabled}
              />
              <span>Item {id}</span>
            </label>
          ))}
        </div>

        <div
          style={{
            marginTop: 10,
            color:
              status === 'error'
                ? '#c00'
                : status === 'success'
                  ? '#279b4a'
                  : '#666',
          }}
        >
          {status === 'error' ? (
            <div>Selecione pelo menos {args.minRequired} opção(ões).</div>
          ) : status === 'success' ? (
            <div>Envio bem sucedido — requisitos atendidos.</div>
          ) : (
            <div>
              Escolha um mínimo de {args.minRequired} opção(ões) antes de
              enviar.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

CheckboxGrupoInterativo.storyName = 'Checkbox Grupo Interativo';
CheckboxGrupoInterativo.args = {
  label: 'Grupo interativo',
  minRequired: 2,
  disabled: false,
};
CheckboxGrupoInterativo.argTypes = {
  label: { control: 'text' },
  minRequired: { control: { type: 'number', min: 0, max: 3 } },
  disabled: { control: 'boolean' },
};

export const CheckboxEmFormulario = () => {
  const items = ['Item A', 'Item B', 'Item C'];
  const [checkedSet, setCheckedSet] = React.useState(new Set());
  const [submitted, setSubmitted] = React.useState(null);
  const masterRef = React.useRef(null);
  useMasterSync(masterRef, checkedSet, items.length);

  const toggleOne = (id) => {
    setCheckedSet((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const toggleAll = () => {
    setCheckedSet((prev) => {
      if (prev.size === items.length) return new Set();
      return new Set(items);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(Array.from(checkedSet));
  };

  return (
    <div style={{ padding: 12, maxWidth: 700 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <div style={{ minWidth: 220 }}>
            <label
              className="label-base"
              style={{ display: 'block', marginBottom: 8 }}
            >
              Receber notificações
            </label>
            <div style={{ color: '#666', marginBottom: 12, fontSize: 13 }}>
              Escolha quais notificações você deseja receber
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  ref={masterRef}
                  type="checkbox"
                  className="govrs-checkbox--group"
                  onChange={toggleAll}
                  aria-label="Selecionar todos"
                />
                <span className="label-base">Selecionar todos</span>
              </label>

              {items.map((it) => (
                <label
                  key={it}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <input
                    type="checkbox"
                    className="govrs-checkbox"
                    checked={checkedSet.has(it)}
                    onChange={() => toggleOne(it)}
                    aria-label={it}
                  />
                  <span>{it}</span>
                </label>
              ))}
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
          {submitted === null ? (
            <em>Nenhum envio ainda</em>
          ) : submitted.length === 0 ? (
            <span>Nenhum item selecionado</span>
          ) : (
            <ul style={{ marginTop: 8 }}>
              {submitted.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
CheckboxEmFormulario.storyName = 'Checkbox em Formulário';
