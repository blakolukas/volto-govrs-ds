import React from 'react';
import Step from './Step';

export default {
  title: 'Widgets/Step',
  component: Step,
  argTypes: {
    labelPosition: {
      control: { type: 'select' },
      options: ['below', 'above', 'left', 'right'],
      description: 'Position of the label relative to the step circle',
    },
    steps: {
      control: { type: 'object' },
      description:
        'Array of steps. Each step can include { label, icon, active, href, onClick, state } where state is "success"|"error"|"warning"|"info"',
    },
  },
  args: {
    labelPosition: 'below',
  },
};

export const StepDocumentacao = () => {
  const [lastClicked, setLastClicked] = React.useState(null);

  const demoOnStepClick = (e, step, idx) => {
    setLastClicked({ idx, step });
  };

  return (
    <div style={{ padding: 16, width: '100%', maxWidth: 720 }}>
      <h3 style={{ marginTop: 0 }}>Step / Documentação</h3>

      <section style={{ marginTop: 8 }}>
        <h4>Uso básico</h4>
        <p>
          Passe a prop <code>steps</code> como um array de objetos:{' '}
          <code>{'{ label, icon, active, href, onClick, state }'}</code>.
        </p>
        <div style={{ marginTop: 12, width: '100%', maxWidth: 720 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              alignItems: 'center',
            }}
          >
            <div style={{ width: '100%', maxWidth: 520, margin: '0 auto' }}>
              <h5 style={{ margin: '0 0 8px 0' }}>Numerados</h5>
              <Step
                steps={[
                  { label: 'Passo 1' },
                  { label: 'Passo 2' },
                  { label: 'Passo 3' },
                  { label: 'Passo 4' },
                ]}
              />
              <pre
                style={{
                  background: '#f7f7f7',
                  padding: 8,
                  borderRadius: 4,
                  overflowX: 'auto',
                  marginTop: 8,
                }}
              >
                <code>{`<Step steps={[{ label: 'Passo 1' }, { label: 'Passo 2' }]} />`}</code>
              </pre>
            </div>

            <div style={{ width: '100%', maxWidth: 520, margin: '0 auto' }}>
              <h5 style={{ margin: '0 0 8px 0' }}>
                Ícones (labels acima, ícone abaixo)
              </h5>
              <Step
                labelPosition="above"
                steps={[
                  {
                    label: 'Buscar',
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 21l-4.35-4.35"
                          stroke="#1A7235"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          stroke="#1A7235"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: 'Config',
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"
                          stroke="#1A7235"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 3.11 17.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.27-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.7 3.11l.06.06c.5.5 1.1.7 1.82.33.6-.3 1.3-.3 1.82 0 .7.4 1 1 1 1.51V6a2 2 0 1 1 4 0v.09c.1.7.6 1.27 1.3 1.51.7.3 1.27.3 1.82 0 .7-.4 1-1 1-1.51V3a2 2 0 1 1 4 0v.09c0 .7.4 1.27 1 1.51.6.3 1.3.3 1.82 0 .7-.4 1-1 1.51V6a2 2 0 1 1 0 4h-.09c-.7 0-1.27.4-1.51 1a1.65 1.65 0 0 0 .33 1.82l.06.06A2 2 0 0 1 19.4 15z"
                          stroke="#1A7235"
                          strokeWidth="1"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: 'Ajuda',
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17h.01"
                          stroke="#1A7235"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.09 9a3 3 0 1 1 5.82 0c0 2-3 2.5-3 4"
                          stroke="#1A7235"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                ]}
              />
              <pre
                style={{
                  background: '#f7f7f7',
                  padding: 8,
                  borderRadius: 4,
                  overflowX: 'auto',
                  marginTop: 8,
                }}
              >
                <code>{`<Step labelPosition="above" steps={[{ label: 'Buscar', icon: <Icon/> }, { label: 'Config', icon: <Icon/> }]} />`}</code>
              </pre>
            </div>
          </div>
        </div>

        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            marginTop: 12,
          }}
        >
          <code>{`<Step steps={[{ label: 'Passo 1' }, { label: 'Passo 2' }]} />`}</code>
        </pre>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Variants</h4>
        <p>
          Prop <code>variant</code>: <code>''</code> (padrão),{' '}
          <code>'dotted'</code>, <code>'plain'</code>.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 12,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Padrão</h5>
            <p style={{ marginTop: 8 }}>
              Para usar a variante <strong>padrão</strong> não passe a prop{' '}
              <code>variant</code>. Use esta variante quando precisar de
              marcadores numerados ou com ícones — ela é a única que renderiza
              números/ícones dentro dos marcadores.
            </p>
            <p>
              Quando <code>state</code> for passado junto com o step na variante
              padrão, um marcador será mostrado no canto superior direito do
              step para indicar o estado passado.
            </p>
            <Step
              steps={[
                { label: 'Passo 1', state: 'success' },
                { label: 'Passo 2', state: 'error', active: true },
                { label: 'Passo 3' },
                { label: 'Passo 4' },
              ]}
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step steps={[{ label: 'Passo 1', active: true }, { label: 'Passo 2' }, { label: 'Passo 3' }]} />`}</code>
            </pre>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Dotted</h5>
            <p style={{ marginTop: 8 }}>
              Na variante <strong>dotted</strong>, quando um passo recebe{' '}
              <code>state</code> (ex.: <code>'success'</code>,{' '}
              <code>'error'</code>), o marcador de estado substitui o ponto
              pequeno do passo — um marcador maior é renderizado no lugar do
              dot. Nesta variante as labels são exibidas via tooltip; números e
              ícones <em>não</em> são suportados aqui.
            </p>
            <Step
              variant="dotted"
              steps={[
                { label: 'Passo 1', active: true },
                { label: 'Passo 2' },
                { label: 'Passo 3', state: 'warning' },
                { label: 'Passo 4', state: 'success' },
              ]}
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step variant="dotted" steps={[{ label: 'Passo 1', active: true }, { label: 'Passo 3', state: 'warning' }]} />`}</code>
            </pre>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Plain</h5>
            <p style={{ marginTop: 8 }}>
              Na variante <strong>plain</strong> os marcadores são pequenos (sem
              números ou ícones) e as labels são exibidas via tooltip. Não há um
              marcador de estado visível — o estado do passo é indicado pela cor
              do tooltip mostrado ao passar o mouse ou ao focar o step.
            </p>
            <Step
              variant="plain"
              steps={[
                { label: 'Início', active: true },
                { label: 'Etapa 2' },
                { label: 'Verificar', state: 'warning' },
                { label: 'Finalizar', state: 'success' },
              ]}
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step variant="plain" steps={[{ label: 'Início', active: true }, { label: 'Verificar', state: 'warning' }]} />`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Label position</h4>
        <p>
          Prop <code>labelPosition</code>:{' '}
          <code>'above'|'below'|'left'|'right'</code>.
        </p>
        <p style={{ marginTop: 8 }}>
          Lembrando que em <code>labelPosition</code>, quando a variante for
          diferente da padrão, ela altera onde o <em>tooltip</em> aparece em vez
          de renderizar a label diretamente.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 12,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Above</h5>
            <Step
              steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]}
              labelPosition="above"
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]} labelPosition="above" />`}</code>
            </pre>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Below</h5>
            <Step
              steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]}
              labelPosition="below"
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]} labelPosition="below" />`}</code>
            </pre>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Left</h5>
            <Step
              steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]}
              labelPosition="left"
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]} labelPosition="left" />`}</code>
            </pre>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h5 style={{ margin: 0 }}>Right</h5>
            <Step
              steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]}
              labelPosition="right"
            />
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`<Step steps={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]} labelPosition="right" />`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Estados (state)</h4>
        <p>
          As cores dos estados são aplicadas ao tooltip e ao marcador quando
          presente.
        </p>
        <div style={{ marginTop: 12 }}>
          <Step
            variant="dotted"
            steps={[
              { label: 'Concluído', state: 'success' },
              { label: 'Atenção', state: 'warning' },
              { label: 'Erro', state: 'error' },
              { label: 'Info', state: 'info' },
            ]}
          />
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>onStepClick</h4>
        <p>Callback simples chamado quando um passo clicável é acionado.</p>
        <p>
          Assinatura: <code>onStepClick(event, step, index)</code> — recebe o
          evento do DOM, o objeto <code>step</code> (label, state, href, etc.) e
          o índice do passo.
        </p>
        <p>Observações importantes (comportamento padrão):</p>
        <ul>
          <li>
            Se o objeto <code>step</code> tiver um <code>onClick</code>, esse
            handler local é executado primeiro. Em seguida, salvo se
            <code>event.preventDefault()</code> for chamado, o wrapper chama
            <code>onStepClick</code> passado ao componente <code>Step</code>.
          </li>
          <li>
            O wrapper injeta automaticamente um <code>onClick</code> em cada
            passo quando você fornece <code>onStepClick</code> ao componente
            pai. Você não precisa (nem deve) passar <code>onStepClick</code> aos
            componentes internos (<code>StepHorizontal</code> /
            <code>StepVertical</code>).
          </li>
          <li>
            Use <code>step.onClick</code> para comportamento específico por
            passo. Se esse handler chamar <code>event.preventDefault()</code>, o
            wrapper não chamará <code>onStepClick</code> — útil para evitar
            navegação automática quando há <code>href</code>.
          </li>
        </ul>

        <div
          style={{
            marginTop: 12,
            padding: 12,
            border: '1px solid #eee',
            borderRadius: 6,
          }}
        >
          <Step
            steps={[
              { label: 'Início' },
              { label: 'Processo' },
              { label: 'Revisão' },
              { label: 'Concluir' },
            ]}
            onStepClick={demoOnStepClick}
          />

          <div style={{ marginTop: 12 }}>
            <strong>Último clique:</strong>
            <div
              style={{
                marginTop: 8,
                background: '#fafafa',
                padding: 8,
                borderRadius: 4,
              }}
            >
              {lastClicked ? (
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                  {JSON.stringify(
                    { index: lastClicked.idx, label: lastClicked.step.label },
                    null,
                    2,
                  )}
                </pre>
              ) : (
                <div>
                  Nenhum clique registrado ainda — clique em um passo acima.
                </div>
              )}
            </div>
          </div>

          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
              marginTop: 12,
            }}
          >
            <code>{`<Step
            steps={[
              { label: 'Início' },
              { label: 'Processo' },
              { label: 'Revisão' },
              { label: 'Concluir' },
            ]}
            onStepClick={(e, step, idx) => {
              // exemplo simples: registrar o clique
              console.log('clicou no passo', idx, step.label)
            }}
          />`}</code>
          </pre>
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Props</h4>
        <p>
          A seguir estão as props mais importantes do componente{' '}
          <code>Step</code> e dos objetos <code>step</code> dentro do array{' '}
          <code>steps</code>, com exemplos de uso.
        </p>

        <h5 style={{ marginTop: 12 }}>Componente</h5>
        <ul>
          <li>
            <strong>steps</strong> (Array) — obrigatório: array de objetos com
            as descrições de cada passo. Cada item pode conter:{' '}
            <code>label</code>, <code>icon</code>, <code>active</code>,{' '}
            <code>href</code>, <code>onClick</code>, <code>state</code>,{' '}
            <code>number</code>.
          </li>
          <li>
            <strong>variant</strong> (String) — <code>''</code> (padrão),{' '}
            <code>'dotted'</code> ou <code>'plain'</code>. Veja as seções
            específicas de cada variante para comportamento detalhado.
          </li>
          <li>
            <strong>labelPosition</strong> (String) — <code>'above'</code> |{' '}
            <code>'below'</code> | <code>'left'</code> | <code>'right'</code>.
            Controla onde a label aparece em relação ao marcador ou no caso das
            variantes, controla onde o tooltip aparece.
          </li>
          <li>
            <strong>orientation</strong> (String) — <code>'horizontal'</code>{' '}
            (padrão) ou <code>'vertical'</code>. Escolhe o componente interno
            (horizontal/vertical).
          </li>
          <li>
            <strong>activeIndex</strong> (Number) — opcional. Quando passado,
            controla externamente qual passo está ativo (componente controlado).
          </li>
          <li>
            <strong>onStepClick</strong> (Function) — callback chamado quando um
            passo clicável é acionado:{' '}
            <code>onStepClick(event, step, index)</code>.
          </li>
        </ul>

        <h5 style={{ marginTop: 12 }}>
          Exemplos com props do componente (funcionais)
        </h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <strong>Capturar clique por passo (exemplo copiável)</strong>
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`function OnStepClickExample() {
  const steps = [
    { label: 'Início' },
    { label: 'Processo' },
    { label: 'Final' }
  ]

  const onStepClick = (e, step, idx) => {
    // ação customizada por passo
    alert('Clicou no passo: ' + idx + ' (' + step.label + ')')
  }

  return <Step steps={steps} onStepClick={onStepClick} />
}`}</code>
            </pre>
          </div>

          <div>
            <strong>
              Exemplo de array <code>steps</code> com atributos comuns
              (copiável)
            </strong>
            <pre
              style={{
                background: '#f7f7f7',
                padding: 12,
                borderRadius: 4,
                overflowX: 'auto',
                marginTop: 8,
              }}
            >
              <code>{`const steps = [
  { label: 'Buscar', icon: IconSvg, href: '/buscar' },
  { label: 'Configurar', state: 'warning' },
  { label: 'Ajuda', onClick: () => alert('Ajuda') }
]

// uso:
<Step steps={steps} />`}</code>
            </pre>
          </div>
        </div>

        <h5 style={{ marginTop: 12 }}>
          Atributos de cada item em <code>steps</code>
        </h5>
        <ul>
          <li>
            <strong>label</strong> (String) — texto exibido como label (ou no
            tooltip, dependendo da variante).
          </li>
          <li>
            <strong>icon</strong> (ReactNode) — um ícone a ser renderizado
            dentro do marcador (apenas na variante padrão).
          </li>
          <li>
            <strong>active</strong> (Boolean) — sinaliza que o passo é o ativo
            inicialmente (pode ser sobrescrito por <code>activeIndex</code>).
          </li>
          <li>
            <strong>href</strong> (String) — quando presente o marcador é
            renderizado como uma tag <code>&lt;a&gt;</code> com o atributo{' '}
            <code>href</code>. O componente define o atributo <code>href</code>{' '}
            e adiciona o handler de clique (se informado) para permitir
            navegação e callbacks. Note: no momento não há passagem automática
            de <code>target</code> ou <code>rel</code> para o elemento; se
            precisar abrir em nova aba, trate via <code>onClick</code> ou
            estenda o componente.
          </li>
          <li>
            <strong>onClick</strong> (Function) — handler local ao item; chamado
            antes de <code>onStepClick</code>. Quando <code>href</code> também
            está presente, o handler recebe o evento e pode chamar{' '}
            <code>event.preventDefault()</code> para prevenir a navegação e
            executar lógica customizada (por exemplo, abrir em modal ou usar{' '}
            <code>window.open</code>).
          </li>
          <li>
            <strong>state</strong> (String) — indica um estado visual:{' '}
            <code>'success'</code>, <code>'error'</code>, <code>'warning'</code>
            , <code>'info'</code>. O comportamento do state depende da variante
            (veja os exemplos de <code>variant</code>).
          </li>
          <li>
            <strong>number</strong> (Number) — número a ser exibido no marcador
            (se não definido, será usado o índice + 1).
          </li>
        </ul>

        <h5 style={{ marginTop: 12 }}>
          Uso de <code>href</code> (link) em um passo
        </h5>
        <p style={{ marginTop: 8 }}>
          Quando você passa <code>href</code> no objeto do passo, o marcador é
          renderizado como um <code>&lt;a href="..."&gt;</code>. O componente
          ainda chama os handlers locais (<code>step.onClick</code>) e o{' '}
          <code>onStepClick</code> passado ao componente — veja o exemplo abaixo
          mostrando como prevenir a navegação e tratar o clique manualmente.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            marginTop: 8,
          }}
        >
          <code>{`function LinkStepExample() {
  const steps = [
    { label: 'Página', href: '/pagina' },
    { label: 'Ajuda', onClick: () => alert('Abrir ajuda') }
  ]

  // step.onClick recebe o evento e pode prevenir a navegação
  const stepsWithHandler = steps.map((s) => ({
    ...s,
    onClick: (e) => {
      e.preventDefault() // evita navegar automaticamente
      // lógica personalizada, por exemplo abrir em nova aba via JS
      window.open(s.href, '_blank')
    }
  }))

  return <Step steps={stepsWithHandler} />
}`}</code>
        </pre>

        <h5 style={{ marginTop: 12 }}>
          Exemplo de array <code>steps</code>
        </h5>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            marginTop: 8,
          }}
        >
          <code>{`[
  { label: 'Buscar', icon: <Icon/>, href: '/buscar' },
  { label: 'Config', state: 'warning' },
  { label: 'Ajuda', onClick: () => alert('Ajuda') }
]`}</code>
        </pre>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Controlado vs Não-controlado</h4>
        <p>
          Use <code>activeIndex</code> para controlar externamente qual passo
          está ativo. O callback <code>onStepClick</code> é chamado quando um
          passo clicável é acionado.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            marginTop: 12,
          }}
        >
          <code>{`<Step steps={steps} activeIndex={1} onStepClick={(e, step, idx) => console.log(idx)} />`}</code>
        </pre>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Acessibilidade</h4>
        <ul>
          <li>
            Marcadores clicáveis usam <code>button</code> ou <code>a</code> e
            possuem foco visível.
          </li>
          <li>
            Tooltips aparecem em hover e focus (trigger com{' '}
            <code>aria-haspopup="true"</code>).
          </li>
        </ul>
      </section>
    </div>
  );
};

StepDocumentacao.story = { name: 'Documentação Step' };

const Template = (args) => {
  const steps = Array.isArray(args.steps)
    ? args.steps.map((s) => ({ ...s }))
    : [];
  const passed = { ...args, steps };
  if (passed.orientation === 'vertical') {
    return (
      <div style={{ height: 400, display: 'flex', alignItems: 'flex-start' }}>
        <Step {...passed} />
      </div>
    );
  }

  return <Step {...passed} />;
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  steps: [
    { label: 'Exemplos de Rótulo', active: true },
    { label: 'Exemplos de Rótulo' },
    { label: 'Exemplos de Rótulo' },
    { label: 'Exemplos de Rótulo' },
  ],
};

const IconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
  >
    <path
      d="M24.0625 7.5C24.5703 7.5 25 7.92969 25 8.4375V18.75C25 19.4531 24.4141 20 23.75 20H1.25C0.546875 20 0 19.4531 0 18.75V4.6875C0 4.17969 0.390625 3.75 0.9375 3.75H2.5V0.625C2.5 0.3125 2.77344 0 3.125 0H3.75C4.0625 0 4.375 0.3125 4.375 0.625V3.75H6.875V0.625C6.875 0.3125 7.14844 0 7.5 0H8.125C8.4375 0 8.75 0.3125 8.75 0.625V3.75H11.25V0.9375C11.25 0.429688 11.6406 0 12.1875 0H17.8125C18.3203 0 18.75 0.429688 18.75 0.9375V7.5H24.0625ZM5 15.7812V14.2188C5 13.9844 4.76562 13.75 4.53125 13.75H2.96875C2.69531 13.75 2.5 13.9844 2.5 14.2188V15.7812C2.5 16.0547 2.69531 16.25 2.96875 16.25H4.53125C4.76562 16.25 5 16.0547 5 15.7812ZM5 12.0312V10.4688C5 10.2344 4.76562 10 4.53125 10H2.96875C2.69531 10 2.5 10.2344 2.5 10.4688V12.0312C2.5 12.3047 2.69531 12.5 2.96875 12.5H4.53125C4.76562 12.5 5 12.3047 5 12.0312ZM5 8.28125V6.71875C5 6.48438 4.76562 6.25 4.53125 6.25H2.96875C2.69531 6.25 2.5 6.48438 2.5 6.71875V8.28125C2.5 8.55469 2.69531 8.75 2.96875 8.75H4.53125C4.76562 8.75 5 8.55469 5 8.28125ZM10 15.7812V14.2188C10 13.9844 9.76562 13.75 9.53125 13.75H7.96875C7.69531 13.75 7.5 13.9844 7.5 14.2188V15.7812C7.5 16.0547 7.69531 16.25 7.96875 16.25H9.53125C9.76562 16.25 10 16.0547 10 15.7812ZM10 12.0312V10.4688C10 10.2344 9.76562 10 9.53125 10H7.96875C7.69531 10 7.5 10.2344 7.5 10.4688V12.0312C7.5 12.3047 7.69531 12.5 7.96875 12.5H9.53125C9.76562 12.5 10 12.3047 10 12.0312ZM10 8.28125V6.71875C10 6.48438 9.76562 6.25 9.53125 6.25H7.96875C7.69531 6.25 7.5 6.48438 7.5 6.71875V8.28125C7.5 8.55469 7.69531 8.75 7.96875 8.75H9.53125C9.76562 8.75 10 8.55469 10 8.28125ZM16.25 12.0312V10.4688C16.25 10.2344 16.0156 10 15.7812 10H14.2188C13.9453 10 13.75 10.2344 13.75 10.4688V12.0312C13.75 12.3047 13.9453 12.5 14.2188 12.5H15.7812C16.0156 12.5 16.25 12.3047 16.25 12.0312ZM16.25 8.28125V6.71875C16.25 6.48438 16.0156 6.25 15.7812 6.25H14.2188C13.9453 6.25 13.75 6.48438 13.75 6.71875V8.28125C13.75 8.55469 13.9453 8.75 14.2188 8.75H15.7812C16.0156 8.75 16.25 8.55469 16.25 8.28125ZM16.25 4.53125V2.96875C16.25 2.73438 16.0156 2.5 15.7812 2.5H14.2188C13.9453 2.5 13.75 2.73438 13.75 2.96875V4.53125C13.75 4.80469 13.9453 5 14.2188 5H15.7812C16.0156 5 16.25 4.80469 16.25 4.53125ZM22.5 15.7812V14.2188C22.5 13.9844 22.2656 13.75 22.0312 13.75H20.4688C20.1953 13.75 20 13.9844 20 14.2188V15.7812C20 16.0547 20.1953 16.25 20.4688 16.25H22.0312C22.2656 16.25 22.5 16.0547 22.5 15.7812ZM22.5 12.0312V10.4688C22.5 10.2344 22.2656 10 22.0312 10H20.4688C20.1953 10 20 10.2344 20 10.4688V12.0312C20 12.3047 20.1953 12.5 20.4688 12.5H22.0312C22.2656 12.5 22.5 12.3047 22.5 12.0312Z"
      fill="#1A7235"
    />
  </svg>
);

export const WithIcons = Template.bind({});
WithIcons.args = {
  orientation: 'horizontal',
  steps: [
    { label: 'Exemplos de Rótulo', icon: IconSvg, active: true },
    { label: 'Exemplos de Rótulo', icon: IconSvg },
    { label: 'Exemplos de Rótulo', icon: IconSvg },
    { label: 'Exemplos de Rótulo', icon: IconSvg },
  ],
};

export const WithStates = Template.bind({});
WithStates.args = {
  orientation: 'horizontal',
  steps: [
    { label: 'Concluído', state: 'success' },
    { label: 'Atenção', state: 'warning' },
    { label: 'Erro', state: 'error' },
    { label: 'Info', state: 'info' },
  ],
};

export const Dotted = Template.bind({});
Dotted.args = {
  orientation: 'horizontal',
  variant: 'dotted',
  steps: [
    { label: 'Passo 1', active: true },
    { label: 'Passo 2' },
    { label: 'Passo 3', state: 'warning' },
    { label: 'Passo 4', state: 'success' },
  ],
};

export const Plain = Template.bind({});
Plain.args = {
  orientation: 'horizontal',
  variant: 'plain',
  steps: [
    { label: 'Início', active: true },
    { label: 'Etapa 2' },
    { label: 'Verificar', state: 'warning' },
    { label: 'Finalizar', state: 'success' },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  steps: [
    { label: 'Exemplo A', active: true },
    { label: 'Exemplo B' },
    { label: 'Exemplo C' },
    { label: 'Exemplo D' },
  ],
};

export const VerticalWithIcons = Template.bind({});
VerticalWithIcons.args = {
  orientation: 'vertical',
  steps: [
    { label: 'Buscar', icon: IconSvg, active: true },
    { label: 'Config', icon: IconSvg },
    { label: 'Ajuda', icon: IconSvg },
  ],
};

export const VerticalDotted = Template.bind({});
VerticalDotted.args = {
  orientation: 'vertical',
  variant: 'dotted',
  steps: [
    { label: 'Passo 1', active: true },
    { label: 'Passo 2' },
    { label: 'Passo 3', state: 'warning' },
    { label: 'Passo 4', state: 'success' },
  ],
};

export const VerticalPlain = Template.bind({});
VerticalPlain.args = {
  orientation: 'vertical',
  variant: 'plain',
  steps: [
    { label: 'Início', active: true },
    { label: 'Etapa 2' },
    { label: 'Verificar', state: 'warning' },
    { label: 'Finalizar', state: 'success' },
  ],
};
