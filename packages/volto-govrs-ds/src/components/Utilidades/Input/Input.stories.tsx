import React, { useState } from 'react';
import Input from './Input';
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
      options: [undefined, 'success', 'danger', 'warning', 'info', 'disabled'],
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
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o campo. Tem precedência sobre State.',
    },
    feedbackMessage: {
      control: 'text',
      description:
        'Mensagem de feedback personalizada para o State ativo (só aparece se for fornecida).',
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
      ⚠️ Comportamento de Feedback: O <code>feedbackMessage</code> só aparece se
      a prop <code>feedbackMessage</code> for explicitamente fornecida, mesmo
      para os estados <code>danger</code> e <code>success</code>.
    </p>

    <h4 style={{ marginTop: 20 }}>Props Chave</h4>
    <ul>
      <li>
        <code>id</code>, <code>title</code>, <code>value</code>,{' '}
        <code>onChange</code>: Props de controle padrão.
      </li>
      <li>
        <code>auxiliaryText</code>: Texto de ajuda que aparece logo abaixo do
        campo.
      </li>
      <li>
        <code>leftIcon</code>: Font Awesome IconDefinition. Ícone opcional na
        esquerda. (Cor: #888).
      </li>
      <li>
        <code>isPassword</code>: Boolean. Ativa o botão de visibilidade
        (olhinho). (Cor do ícone: Verde).
      </li>
      <li>
        <code>State</code> e <code>feedbackMessage</code>: Define o estilo de
        borda e a mensagem de feedback.
      </li>
    </ul>

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
          title="Danger com Mensagem Personalizada"
          id="doc-danger-msg"
          value="O campo é obrigatório"
          onChange={() => {}}
          State="danger"
          feedbackMessage="O campo não pode ser vazio. Digite 10 caracteres."
        />
        <CodeSnippet
          code={`<Input title="Danger com Mensagem Personalizada" id="doc-danger-msg" value="O campo é obrigatório" onChange={()=>{}} State="danger"feedbackMessage="O campo não pode ser vazio. Digite 10 caracteres."/>`}
        />
      </div>
      <div>
        <Input
          title="Info (Borda Verde e mensagem de feedback com ícone de informação"
          id="doc-info"
          value="Detalhe informativo"
          onChange={() => {}}
          State="info"
          feedbackMessage="Esta é uma mensagem de informação."
        />
        <CodeSnippet
          code={`<Input title="Info (Borda Verde e mensagem de feedback com ícone de informação" id="doc-info" value="Detalhe informativo" onChange={()=>{}} State="info"feedbackMessage="Esta é uma mensagem de informação."/>`}
        />
      </div>
      <div>
        <Input
          title="Warning (Borda Amarela)"
          id="doc-warning"
          value="Atenção"
          onChange={() => {}}
          State="warning"
          feedbackMessage="Esta é uma mensagem de aviso."
        />
        <CodeSnippet
          code={`<Input title="Warning (Borda Amarela)" id="doc-warning" value="Atenção" onChange={()=>{}} State="warning"feedbackMessage="Esta é uma mensagem de aviso."/>`}
        />
      </div>
      <div>
        <Input
          title="Disabled"
          id="doc-disabled"
          value="Campo Desabilitado"
          onChange={() => {}}
          isDisabled={true}
          leftIcon={faUser}
          auxiliaryText="Texto auxiliar. Função de  prevenir erros."
        />
        <CodeSnippet
          code={`<Input title="Disabled" id="doc-disabled" value="Campo Desabilitado" onChange={()=>{}} isDisabled={true} leftIcon={faUser}auxiliaryText="Texto auxiliar. Função de  prevenir erros."/>`}
        />
      </div>
    </div>
  </div>
);

InputDocumentacao.story = { name: '1. Documentação e Exemplos' };

// --- INPUT INTERATIVO ---

const Template = (args) => {
  const [value, setValue] = useState(args.initialValue || '');

  return (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <Input
        {...args}
        id="interactive-input"
        value={value}
        onChange={setValue}
        initialValue={undefined}
      />
      <div style={{ marginTop: 8, fontSize: 13, color: '#444' }}>
        Valor Atual: <strong>{value || '—'}</strong>
      </div>
      <div style={{ marginTop: 20 }}>
        <CodeSnippet
          code={`<Input
    title="${args.title}"
    placeholder="${args.placeholder}"
    initialValue="" // O valor de teste é controlado no Storybook
    auxiliaryText="${args.auxiliaryText}"
    leftIcon={${args.leftIcon ? args.leftIcon.iconName : 'undefined'}}
    State="${args.State || 'undefined'}"
    feedbackMessage="${args.feedbackMessage}"
    isPassword={${args.isPassword}}
    isDisabled={${args.isDisabled}}
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
  feedbackMessage: '',
  isPassword: false,
  isDisabled: false,
};

InputInterativo.story = { name: '2. Input Interativo (Testador)' };
