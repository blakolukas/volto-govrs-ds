import React from 'react';
import '../../../theme/Formularios/Select.scss';
import Select from '.';
import Badges from '../../Badges/Badges';

export default {
  title: 'Forms/Select',
  parameters: {
    layout: 'padded',
  },
};

export const SelectDocumentacao = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 720 }}>
    <div style={{ width: 360 }}>
      <Select
        ariaLabel="Select component"
        placeholder="Placeholder"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        onChange={() => {}}
      />
    </div>

    <div
      style={{
        marginTop: 16,
        fontSize: 14,
        lineHeight: 1.5,
        color: '#222',
        maxWidth: 640,
      }}
    >
      <h4 style={{ margin: '4px 0' }}>Uso e atributos do componente Select</h4>
      <p>
        Este componente substitui o elemento nativo <code>&lt;select&gt;</code>{' '}
        para permitir estilização consistente.
      </p>
      <p style={{ marginTop: 6 }}>
        Você pode fornecer <code>id</code> e <code>name</code> nas props do
        componente para controle explícito; caso não sejam informados, o
        componente irá gerar ids e names únicos automaticamente (o comportamento
        e a ordem de precedência são explicados mais abaixo).
      </p>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>options</h5>
        <p>
          Array de objetos <code>{`{ value, label }`}</code> com as opções.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select
  options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]}
/>`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>multiple</h5>
        <p>
          Se <code>multiple</code> for verdadeiro, ativa seleção múltipla (o
          mesmo componente é utilizado).
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// controlled multiple
const [vals, setVals] = useState([]);
<Select multiple options={options} value={vals} onChange={setVals} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>value / defaultValue</h5>
        <p>
          Valor controlado (string) ou array (múltipla);{' '}
          <code>defaultValue</code> é o inicial.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// controlled (single)
const [v, setV] = useState('1');
<Select value={v} onChange={(val) => setV(val)} options={options} />

// uncontrolled
<Select defaultValue={'2'} options={options} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>onChange</h5>
        <p>
          Função chamada com o novo valor: string (single) ou array (multiple).
          Recebe opcionalmente a opção alterada.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select onChange={(newValue, changedOption) => console.log(newValue, changedOption)} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>placeholder</h5>
        <p>
          Texto exibido quando nada está selecionado; também é renderizado como
          cabeçalho (não selecionável) no dropdown.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select placeholder="Escolha uma opção" options={options} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>ariaLabel</h5>
        <p>
          Rótulo acessível aplicado ao botão de controle (útil quando não há
          label visual).
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select ariaLabel="Filtro de usuários" options={options} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>renderFeedback</h5>
        <p>
          Passe uma função <code>renderFeedback</code> que recebe o estado atual
          do componente e deve retornar um componente Badge (
          <code>{'<Badges />'}</code>).
          <br />
          Observação: se <code>renderFeedback</code> não for informado, o
          componente <strong>não exibirá nenhum feedback</strong> por padrão.
          Isso serve para o caso de qualquer opção ser válida.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`//somente opções > 3 são válidas
const options = [1,2,3,4,5].map(n => ({ value: String(n), label: String(n) }));

<Select
  options={options}
  renderFeedback={({ value, isDisabled }) => {
    if (isDisabled) return <Badges variant="warning" message="Desabilitado" />;
    if (!value) return null;
    const num = Number(value);
    if (Number.isNaN(num)) return null;
    return num > 3
      ? <Badges variant="success" message="Valor válido" />
      : <Badges variant="error" message="Valor inválido" />;
  }}
/>`}</code>
        </pre>

        <div style={{ marginTop: 8 }}>
          <h5 style={{ margin: '8px 0' }}>disabled</h5>
          <p>
            Para desabilitar o componente utilize a prop <code>disabled</code>{' '}
            (booleano). Quando a prop <code>disabled</code> estiver ativa, o
            Select aplica <code>aria-disabled="true"</code> no controle e os
            inputs ocultos gerados para submissão no formulário recebem{' '}
            <code>disabled</code>, portanto os valores não serão enviados no
            submit, reproduzindo o comportamento de um{' '}
            <code>&lt;select disabled&gt;</code> nativo.
          </p>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`// desabilitado
<Select disabled options={[{ value: '1', label: '1' }]} />`}</code>
          </pre>
        </div>

        <div style={{ marginTop: 8 }}>
          {(() => {
            const options = [1, 2, 3, 4, 5].map((n) => ({
              value: String(n),
              label: String(n),
            }));
            return (
              <div style={{ width: 160 }}>
                <Select
                  ariaLabel="Select numbers"
                  placeholder="Escolha um número"
                  options={options}
                  renderFeedback={({ value, isDisabled }) => {
                    if (isDisabled)
                      return (
                        <Badges variant="warning" message="Desabilitado" />
                      );
                    if (!value) return null;
                    const num = Number(value);
                    if (Number.isNaN(num)) return null;
                    return num > 3 ? (
                      <Badges variant="success" message="Valor válido" />
                    ) : (
                      <Badges variant="error" message="Valor inválido" />
                    );
                  }}
                />
              </div>
            );
          })()}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>Comportamentos importantes</h5>
        <ul>
          <li>
            Em <em>multiple</em>, selecionar alterna a opção e mantém o dropdown
            aberto para permitir múltiplas seleções.
          </li>
          <li>
            O componente sanitiza valores desconhecidos contra a lista de{' '}
            <code>options</code>, portanto o placeholder não é considerado um
            valor válido.
          </li>
          <li>
            O resumo no controle (modo múltiplo) mostra o rótulo principal e "+
            (N)" com o número de itens adicionais (oculta o sufixo quando apenas
            1 está selecionado).
          </li>
          <li>
            <strong>Keyboard:</strong> navegação por teclado completa —
            ArrowUp/ArrowDown para navegar, Home/End para ir ao início/fim,
            Enter/Space para abrir/selecionar (toggle em <em>multiple</em>),
            Escape para fechar e Tab fecha o dropdown para seguir o fluxo de
            foco.
          </li>
          <li>
            <strong>Envio em formulários:</strong> quando a prop{' '}
            <code>name</code> é fornecida, o componente gera automaticamente{' '}
            <code>&lt;input type="hidden" name="..." /&gt;</code> (um por valor
            em <em>multiple</em>) para participar do submit do formulário,
            replicando o comportamento de um &lt;select&gt; nativo.
          </li>
        </ul>
        <h4 style={{ margin: '4px 0' }}>Garantia de Unicidade</h4>

        <div style={{ marginTop: 12 }}>
          <p style={{ marginBottom: 8 }}>
            O componente resolve o atributo <code>name</code> usado nos inputs
            hidden do formulário da seguinte forma (ordem de precedência):
          </p>
          <ol style={{ marginTop: 8 }}>
            <li>
              <strong>
                Prop <code>name</code> explicita
              </strong>
              : se o consumidor passou <code>name</code>, esse valor é usado nos
              inputs hidden.
            </li>
            <li>
              <strong>
                Prop <code>id</code> fornecida
              </strong>
              : se <code>id</code>
              foi passada mas <code>name</code> não, o componente deriva um nome
              previsível como <code>{`<id>-name`}</code>.
            </li>
            <li>
              <strong>Fallback gerado por instância</strong>: caso contrário,
              usamos um nome único baseado num id gerado por instância (ex.:{' '}
              <code>br-select-xxxxx-name</code>), evitando colisões entre
              múltiplas instâncias na mesma página.
            </li>
          </ol>
          <p style={{ marginTop: 8 }}>
            Observação: os atributos <code>id</code> (control/list/option) são
            usados para acessibilidade e associação (aria-controls, role, etc.)
            — o que determina o nome submetido no formulário é o atributo{' '}
            <code>name</code> dos inputs hidden, que o componente preenche
            conforme acima.
          </p>

          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`// Exemplo mínimo: duas instâncias sem id/name (ids/names gerados automaticamente)
<div>
  <Select options={[{ value: '1', label: 'A' }]} placeholder="Auto 1" />
  <Select options={[{ value: '2', label: 'B' }]} placeholder="Auto 2" />
</div>`}</code>
          </pre>

          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <Select
              ariaLabel="Auto 1"
              placeholder="Auto 1"
              options={[{ value: 'a', label: 'Auto A' }]}
            />
            <Select
              ariaLabel="Auto 2"
              placeholder="Auto 2"
              options={[{ value: 'b', label: 'Auto B' }]}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

SelectDocumentacao.story = { name: 'Documentação Select' };

export const SelectInterativo = (args) => {
  const { useState, useEffect } = React;
  const { placeholder, label, multiple, disabled } = args;
  const [value, setValue] = useState(multiple ? [] : null);

  useEffect(() => {
    setValue(multiple ? [] : null);
  }, [multiple]);

  const options = multiple
    ? [
        { value: 'valid-1', label: 'Válida 1' },
        { value: 'valid-2', label: 'Válida 2' },
        { value: 'valid-3', label: 'Válida 3' },
        { value: 'valid-4', label: 'Válida 4' },
        { value: 'invalid', label: 'Inválida' },
      ]
    : [
        { value: 'valid', label: 'Opção válida' },
        { value: 'invalid', label: 'Opção inválida' },
      ];

  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ minWidth: 320 }}>
        <div className="br-select">
          <label className="br-select__label">{label}</label>
          <Select
            ariaLabel={label || 'Interactive select'}
            placeholder={placeholder}
            options={options}
            value={value}
            onChange={(v) => setValue(v)}
            disabled={disabled}
            multiple={multiple}
            renderFeedback={({ value: selValue, isDisabled }) => {
              if (isDisabled)
                return (
                  <Badges variant="warning" message="Campo desabilitado" />
                );
              const val = selValue;
              if (!val || (Array.isArray(val) && val.length === 0)) return null;
              const isInv = Array.isArray(val)
                ? val.includes('invalid')
                : val === 'invalid';
              if (isInv)
                return <Badges variant="error" message="Campo inválido" />;
              return <Badges variant="success" message="Campo correto" />;
            }}
          />
        </div>
        <div style={{ marginTop: 8, fontSize: 13, color: '#444' }}>
          Selecionado:{' '}
          {Array.isArray(value)
            ? value.length
              ? value.join(', ')
              : '—'
            : value || '—'}
        </div>
      </div>

      <div style={{ minWidth: 220 }}>
        <h4 style={{ marginTop: 0 }}>Controls</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
            Observação: use os controles do Storybook (painel Controls) para
            editar <strong>Placeholder</strong>, <strong>Label</strong>,{' '}
            <strong>Multiple</strong> e <strong>Disabled</strong>.
          </div>
        </div>
      </div>
    </div>
  );
};

SelectInterativo.args = {
  placeholder: 'Escolha uma opção',
  label: 'Interactive Label',
  multiple: false,
  disabled: false,
};

SelectInterativo.argTypes = {
  placeholder: { control: 'text' },
  label: { control: 'text' },
  multiple: { control: 'boolean' },
  disabled: { control: 'boolean' },
};

SelectInterativo.story = { name: 'Select Interativo' };

export const SelectEmFormulario = () => {
  const [submitted, setSubmitted] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = {};
    for (const [k, v] of data.entries()) {
      if (result[k] === undefined) result[k] = v;
      else if (Array.isArray(result[k])) result[k].push(v);
      else result[k] = [result[k], v];
    }
    setSubmitted(result);
  }

  const optionsA = [
    { value: 'a1', label: 'A1' },
    { value: 'a2', label: 'A2' },
  ];
  const optionsB = [
    { value: 'b1', label: 'B1' },
    { value: 'b2', label: 'B2' },
  ];

  return (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', marginBottom: 6 }}>
              Select A
            </label>
            <Select placeholder="Selecione A" options={optionsA} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6 }}>
              Select B
            </label>
            <Select placeholder="Selecione B" options={optionsB} />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>

      <div style={{ marginTop: 16 }}>
        <h5>Submitted values</h5>
        <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}>
          {submitted ? JSON.stringify(submitted, null, 2) : '—'}
        </pre>
      </div>
    </div>
  );
};

SelectEmFormulario.story = { name: 'Select em Formulário (exemplo)' };
