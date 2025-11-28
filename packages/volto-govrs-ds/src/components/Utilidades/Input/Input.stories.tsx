import React, { useState } from 'react';
import Input from './Input';
import Badges from '../../Badges/Badges';
import {
  faMagnifyingGlass,
  faCalendarDays,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: { layout: 'padded' },
  argTypes: {
    State: {
      control: 'select',
      options: [undefined, 'success', 'danger', 'warning', 'info'],
      description: 'Define o estado visual e a cor da borda do input.',
    },
    isPassword: {
      control: 'boolean',
      description: 'Ativa o ícone de visibilidade (olhinho).',
    },
    leftIcon: {
      control: 'select',
      options: [undefined, 'faMagnifyingGlass', 'faCalendarDays', 'faUser'],
      mapping: {
        faMagnifyingGlass: faMagnifyingGlass,
        faCalendarDays: faCalendarDays,
        faUser: faUser,
        undefined: undefined,
      },
      description: 'Ícone opcional na esquerda (Font Awesome IconDefinition).',
      labels: {
        faMagnifyingGlass: 'Pesquisa',
        faCalendarDays: 'Calendário',
        faUser: 'Usuário',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo. Tem precedência sobre State.',
    },
    renderFeedback: {
      control: 'object',
      description:
        'Função opcional que recebe ({ value, disabled, state }) e deve retornar um nó React para renderizar o feedback (Badge, texto, etc.). Quando fornecida ela tem precedência total sobre qualquer fallback. Se não for fornecida, nenhum feedback será exibido abaixo do input (ou seja, a Badge não será apresentada).',
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
    }}
  >
    <code>{code}</code>
  </pre>
);

export const InputDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 720 }}>
    <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      Especificações do Componente Input
    </h3>

    <p>
      Este componente Input utiliza o Font Awesome para os ícones e oferece
      estados visuais e funcionais conforme o novo design system.
    </p>
    <p>
      ⚠️ Comportamento de Feedback: O componente não renderiza mensagens de
      feedback por padrão. Use a prop <code>renderFeedback</code> para fornecer
      um nó React (por exemplo um <code>Badges</code>) quando quiser exibir
      mensagens de erro/aviso/sucesso. <strong>renderFeedback</strong> tem
      precedência total.
    </p>

    <h4 style={{ marginTop: 20 }}>Atributos</h4>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>id / title / value / onChange</h5>
      <p>
        Props de controle padrão do componente. Use <code>value</code> e{' '}
        <code>onChange</code> para controlar o campo externamente.
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input id="my-input" title="Nome" value={value} onChange={setValue} />`}</code>
      </pre>
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>auxiliaryText</h5>
      <p>
        Texto de ajuda que aparece logo abaixo do campo e serve para orientar o
        usuário.
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input auxiliaryText="Ex.: formato dd/mm/aaaa" />`}</code>
      </pre>
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>leftIcon</h5>
      <p>
        Font Awesome IconDefinition. Ícone opcional posicionado à esquerda do
        campo.
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input leftIcon={faUser} />`}</code>
      </pre>
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>isPassword</h5>
      <p>
        Boolean. Ativa o botão de visibilidade (olhinho) para campos de senha.
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input isPassword={true} />`}</code>
      </pre>
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>State</h5>
      <p>
        Hint visual que define a cor da borda/estado (ex.: <code>danger</code>,{' '}
        <code>success</code>, <code>info</code>, <code>warning</code>). Não
        controla o conteúdo do feedback.
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input State="danger" />`}</code>
      </pre>
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        disabled{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Quando <code>disabled</code> é verdadeiro, o controle fica inativo e o
        input nativo também recebe o atributo <code>disabled</code>{' '}
        (comportamento nativo).
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input disabled />`}</code>
      </pre>
      <div style={{ marginTop: 8 }}>
        <Input
          title="Desabilitado"
          id="doc-disabled-attr"
          value="Campo Desabilitado"
          onChange={() => {}}
          disabled={true}
        />
      </div>
    </div>

    <div style={{ marginTop: 12 }}>
      <h5 style={{ margin: '8px 0' }}>
        renderFeedback{' '}
        <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
      </h5>
      <p>
        Função que permite ao consumidor renderizar o elemento de feedback (por
        exemplo, um <code>Badges</code>) usando o estado do componente. Recebe{' '}
        <code>{`({ value, disabled, state })`}</code> e deve retornar um nó
        React. Se essa função não for informada, nenhum feedback será exibido
        abaixo do input — a <code>Badge</code> não será apresentada.
      </p>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`<Input renderFeedback={({ state }) => state === 'danger' ? <Badges variant="error" message="Erro no campo" /> : null} />`}</code>
      </pre>

      <div style={{ marginTop: 8 }}>
        <Input
          title="Danger com Mensagem Personalizada (renderFeedback)"
          id="doc-danger-msg-attr"
          value="O campo é obrigatório"
          onChange={() => {}}
          State="danger"
          renderFeedback={() => (
            <Badges
              variant="error"
              message="O campo não pode ser vazio. Digite 10 caracteres."
            />
          )}
        />
      </div>
    </div>

    <h4 style={{ marginTop: 30 }}>Exemplos Padrão</h4>
    <div
      style={{
        display: 'grid',
        gap: '25px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        marginTop: 15,
      }}
    >
      <div>
        <Input
          title="Default sem ícone"
          id="doc-default"
          value=""
          onChange={() => {}}
          placeholder="Placeholder"
        />
        <CodeSnippet
          code={`<Input title="Default sem ícone" id="doc-default" value="" onChange={()=>{}} placeholder="Placeholder"/>`}
        />
      </div>

      <div>
        <Input
          title="Default com ícone"
          id="doc-icon"
          value=""
          leftIcon={faUser}
          onChange={() => {}}
          placeholder="Placeholder"
        />
        <CodeSnippet
          code={`<Input title="Default com ícone" id="doc-icon" value="" leftIcon={faUser} onChange={()=>{}} placeholder="Placeholder"/>`}
        />
      </div>

      <div>
        <Input
          title="Password"
          id="doc-pass"
          value="senha123"
          onChange={() => {}}
          isPassword={true}
          placeholder="Sua senha"
        />
        <CodeSnippet
          code={`<Input title="Password" value="senha123" onChange={()=>{}} isPassword={true} placeholder="Sua senha"/>`}
        />
      </div>

      <div>
        <Input
          title="Password c/ Ícone"
          id="doc-pass-icon"
          value="senha123"
          onChange={() => {}}
          isPassword={true}
          leftIcon={faCalendarDays}
          placeholder="Sua senha"
        />
        <CodeSnippet
          code={`<Input title="Password c/ Ícone" value="senha123" onChange={()=>{}} isPassword={true} leftIcon={faCalendarDays} placeholder="Sua senha"/>`}
        />
      </div>
    </div>

    <h4 style={{ marginTop: 40 }}>Feedback States (Borda Colorida)</h4>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: 15,
        maxWidth: '800px',
      }}
    >
      <div>
        <Input
          title="Danger (Borda Vermelha)"
          id="doc-danger"
          value="Valor Inválido"
          onChange={() => {}}
          State="danger"
          auxiliaryText="Texto auxiliar. Função de  prevenir erros."
        />
        <CodeSnippet
          code={`<Input title="Danger (Borda Vermelha)" id="doc-danger" value="Valor Inválido" onChange={()=>{}} State="danger"auxiliaryText="Texto auxiliar. Função de  prevenir erros."/>`}
        />
      </div>
      <div>
        <Input
          title="Success (Borda Verde)"
          id="doc-success"
          value="Valor Válido"
          onChange={() => {}}
          State="success"
          auxiliaryText="Texto auxiliar. Função de  prevenir erros."
        />
        <CodeSnippet
          code={`<Input title="Success (Borda Verde)" id="doc-success" value="Valor Válido" onChange={()=>{}} State="success" auxiliaryText="Texto auxiliar. Função de  prevenir erros."/>`}
        />
      </div>
      <div>
        <Input
          title="Danger com Mensagem Personalizada (renderFeedback)"
          id="doc-danger-msg"
          value="O campo é obrigatório"
          onChange={() => {}}
          State="danger"
          renderFeedback={() => (
            <Badges
              variant="error"
              message="O campo não pode ser vazio. Digite 10 caracteres."
            />
          )}
        />
        <CodeSnippet
          code={`<Input title="Danger com Mensagem Personalizada" id="doc-danger-msg" value="O campo é obrigatório" onChange={()=>{}} State="danger" renderFeedback={() => <Badges variant="error" message="O campo não pode ser vazio. Digite 10 caracteres."/>} />`}
        />
      </div>
      <div>
        <Input
          title="Info (Borda Azul e mensagem de feedback com ícone de informação"
          id="doc-info"
          value="Detalhe informativo"
          onChange={() => {}}
          State="info"
          renderFeedback={() => (
            <Badges
              variant="info"
              message="Esta é uma mensagem de informação."
            />
          )}
        />
        <CodeSnippet
          code={`<Input title="Info (Borda Azul e mensagem de feedback com ícone de informação" id="doc-info" value="Detalhe informativo" onChange={()=>{}} State="info" renderFeedback={() => <Badges variant="info" message="Esta é uma mensagem de informação."/>} />`}
        />
      </div>
      <div>
        <Input
          title="Warning (Borda Amarela)"
          id="doc-warning"
          value="Atenção"
          onChange={() => {}}
          State="warning"
          renderFeedback={() => (
            <Badges variant="warning" message="Esta é uma mensagem de aviso." />
          )}
        />
        <CodeSnippet
          code={`<Input title="Warning (Borda Amarela)" id="doc-warning" value="Atenção" onChange={()=>{}} State="warning" renderFeedback={() => <Badges variant="warning" message="Esta é uma mensagem de aviso."/>} />`}
        />
      </div>
      <div>
        <Input
          title="Disabled"
          id="doc-disabled"
          value="Campo Desabilitado"
          onChange={() => {}}
          disabled={true}
          leftIcon={faUser}
          auxiliaryText="Texto auxiliar. Função de  prevenir erros."
        />
        <CodeSnippet
          code={`<Input title="Disabled" id="doc-disabled" value="Campo Desabilitado" onChange={()=>{}} disabled={true} leftIcon={faUser} auxiliaryText="Texto auxiliar. Função de  prevenir erros."/>`}
        />
      </div>
    </div>
  </div>
);

InputDocumentacao.story = { name: '1. Documentação e Exemplos' };

const Template = (args) => {
  const [value, setValue] = useState(args.initialValue || '');

  const { Badge, badgeText, ...inputArgs } = args;

  const mapStateToVariant = (s) => {
    switch (s) {
      case 'danger':
        return 'error';
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return 'info';
    }
  };

  const computedRenderFeedback = Badge
    ? ({ value: v, disabled: d, state: s }) => (
        <Badges
          variant={mapStateToVariant(s)}
          message={badgeText || 'Mensagem'}
        />
      )
    : undefined;

  return (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <Input
        {...inputArgs}
        id="interactive-input"
        value={value}
        onChange={setValue}
        initialValue={undefined}
        renderFeedback={computedRenderFeedback}
      />
      <div style={{ marginTop: 8, fontSize: 13, color: '#444' }}>
        Valor Atual: <strong>{value || '—'}</strong>
      </div>
      <div style={{ marginTop: 20 }}>
        <CodeSnippet
          code={`<Input
    title="${args.title}"
    placeholder="${args.placeholder}"
    initialValue="" 
    auxiliaryText="${args.auxiliaryText}"
    leftIcon={${args.leftIcon ? args.leftIcon.iconName : 'undefined'}}
    State="${args.State || 'undefined'}"
    isPassword={${args.isPassword}}
    disabled={${args.disabled}}
    Badge={${args.Badge}}
    badgeText="${args.badgeText || ''}"
/>`}
        />
      </div>
    </div>
  );
};

export const InputInterativo = Template.bind({});
InputInterativo.args = {
  title: 'Campo Interativo',
  placeholder: 'Digite para testar o foco/hover',
  initialValue: '',
  auxiliaryText:
    'Use os controles abaixo para configurar o input e testar as classes.',
  leftIcon: faMagnifyingGlass,
  State: undefined,
  isPassword: false,
  disabled: false,
  Badge: false,
  badgeText: 'Mensagem de exemplo',
};

InputInterativo.story = { name: '2. Input Interativo (Testador)' };

InputInterativo.argTypes = {
  Badge: {
    control: 'boolean',
    description: 'Se true, renderiza uma Badges via renderFeedback.',
  },
  badgeText: {
    control: 'text',
    description: 'Texto mostrado dentro da Badge quando Badge=true.',
  },
  renderFeedback: { control: { disable: true }, table: { disable: true } },
  id: { control: { disable: true }, table: { disable: true } },
  value: { control: { disable: true }, table: { disable: true } },
  onChange: { control: { disable: true }, table: { disable: true } },
  initialValue: { control: { disable: true }, table: { disable: true } },
};
