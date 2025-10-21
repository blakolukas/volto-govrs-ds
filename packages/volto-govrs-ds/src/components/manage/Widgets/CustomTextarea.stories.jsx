import React, { useState } from 'react';
import CustomTextarea from './CustomTextarea';

// Simple wrapper to handle state for stories
const TextareaStory = ({ initialValue = '', ...props }) => {
  const [value, setValue] = useState(initialValue);
  return <CustomTextarea {...props} value={value} onChange={setValue} />;
};

/**
 * Exemplo básico do componente CustomTextarea com configuração mínima.
 * Demonstra as propriedades obrigatórias necessárias para usar o componente.
 */
export const Default = {
  render: () => (
    <TextareaStory
      id="textarea-default"
      title="Área de texto"
      placeholder="Digite seu texto aqui..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Este é o exemplo básico do componente CustomTextarea, mostrando sua configuração mínima necessária. O componente requer apenas as propriedades obrigatórias: `id`, `title`, `value` e `onChange`.',
      },
    },
  },
};

/**
 * Demonstra o textarea com um valor inicial pré-preenchido.
 * Útil para cenários de edição de conteúdo existente.
 */
export const WithValue = {
  render: () => (
    <TextareaStory
      id="textarea-value"
      title="Área de texto com valor inicial"
      placeholder="Digite seu texto aqui..."
      initialValue="Este é um texto inicial no campo textarea."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Este exemplo demonstra como inicializar o componente com um valor pré-preenchido. Útil em cenários de edição onde o usuário precisa modificar um conteúdo existente, como formulários de atualização de perfil ou edição de comentários.',
      },
    },
  },
};

/**
 * Mostra como adicionar texto descritivo abaixo do campo para orientar o usuário.
 */
export const WithDescription = {
  render: () => (
    <TextareaStory
      id="textarea-description"
      title="Área de texto com descrição"
      description="Esta é uma descrição útil explicando o propósito deste campo."
      placeholder="Digite seu texto aqui..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo que mostra como adicionar um texto descritivo abaixo do campo usando a propriedade `description`. As descrições são fundamentais para melhorar a usabilidade do formulário, orientando o usuário sobre o que deve ser preenchido.',
      },
    },
  },
};

/**
 * Demonstra como aplicar um limite máximo de caracteres com validação automática.
 */
export const WithMaxLength = {
  render: () => (
    <TextareaStory
      id="textarea-maxlength"
      title="Área de texto com limite de caracteres"
      maxLength={100}
      placeholder="Máximo de 100 caracteres..."
      description="Tente digitar mais de 100 caracteres para ver a validação."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstra como aplicar um limite máximo de caracteres usando a propriedade `maxLength`. O componente exibe um contador e impede a digitação de caracteres adicionais quando o limite é atingido.',
      },
    },
  },
};

/**
 * Mostra o textarea no estado desabilitado, impedindo qualquer interação.
 */
export const Disabled = {
  render: () => (
    <TextareaStory
      id="textarea-disabled"
      title="Área de texto desabilitada"
      isDisabled={true}
      placeholder="Este campo está desabilitado"
      initialValue="Este textarea está desabilitado"
      description="Este campo não pode ser editado"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mostra o textarea no estado desabilitado através da propriedade `isDisabled`. Quando desabilitado, o campo não permite interação e recebe um estilo visual diferenciado para indicar que está inativo.',
      },
    },
  },
};

/**
 * Destaca o uso do placeholder para orientar o usuário quando o campo está vazio.
 */
export const WithPlaceholder = {
  render: () => (
    <TextareaStory
      id="textarea-placeholder"
      title="Área de texto com placeholder"
      placeholder="Este é um texto de placeholder informativo..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Destaca o uso da propriedade `placeholder` para exibir um texto de dica quando o campo está vazio. Use placeholders para exemplos concretos e descrições para instruções mais detalhadas.',
      },
    },
  },
};

/**
 * Demonstra como marcar visualmente um campo como obrigatório.
 */
export const Required = {
  render: () => (
    <TextareaStory
      id="textarea-required"
      title="Campo obrigatório *"
      placeholder="Este campo é obrigatório"
      description="Você deve preencher este campo antes de enviar o formulário."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstra como marcar um campo como obrigatório adicionando um asterisco (*) ao título. Esta é uma convenção visual amplamente reconhecida. Combine indicadores visuais com validação programática.',
      },
    },
  },
};

/**
 * Variante com layout horizontal, posicionando o rótulo à esquerda do campo.
 */
export const Left = {
  render: () => (
    <TextareaStory
      id="textarea-left"
      title="Rótulo à esquerda"
      left={true}
      placeholder="Textarea com layout horizontal..."
      initialValue="Este textarea tem o rótulo posicionado à esquerda"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mostra uma variante de layout onde o rótulo é posicionado à esquerda do campo usando a propriedade `left`. Este layout horizontal é útil quando você tem restrições de espaço vertical ou deseja criar formulários mais compactos.',
      },
    },
  },
};

/**
 * Variante de tamanho pequeno para interfaces compactas.
 */
export const Small = {
  render: () => (
    <TextareaStory
      id="textarea-small"
      title="Área de texto pequena"
      size="small"
      placeholder="Tamanho pequeno..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Variante de tamanho pequeno definida pela propriedade `size="small"`. Esta versão possui padding interno reduzido e altura mínima menor, ideal para interfaces compactas ou quando o espaço é limitado.',
      },
    },
  },
};

/**
 * Variante de tamanho grande para entrada de textos longos.
 */
export const Large = {
  render: () => (
    <TextareaStory
      id="textarea-large"
      title="Área de texto grande"
      size="large"
      placeholder="Tamanho grande..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Variante de tamanho grande definida pela propriedade `size="large"`. Perfeita para campos que requerem entrada de textos mais longos e detalhados, como descrições, comentários ou conteúdo de artigos.',
      },
    },
  },
};

/**
 * Estado de sucesso com borda verde e feedback positivo.
 */
export const Success = {
  render: () => (
    <TextareaStory
      id="textarea-success"
      title="Estado de sucesso"
      State="success"
      placeholder="Estado de sucesso com borda verde"
      initialValue="Este campo está em estado de sucesso"
      description="Exibe borda verde e badge de feedback 'Campo correto'"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estado de sucesso aplicado através da propriedade `State="success"`. Exibe borda verde e uma mensagem de feedback positivo para confirmar que o campo foi preenchido corretamente e passou na validação.',
      },
    },
  },
};

/**
 * Estado de erro com borda vermelha e feedback negativo.
 */
export const Error = {
  render: () => (
    <TextareaStory
      id="textarea-error"
      title="Estado de erro"
      State="error"
      placeholder="Estado de erro com borda vermelha"
      initialValue="Este campo está em estado de erro"
      description="Exibe borda vermelha e badge de feedback 'Campo com erro'"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estado de erro aplicado através da propriedade `State="error"`. Exibe borda vermelha e uma mensagem de feedback negativo para indicar que há um problema com o valor inserido. Use quando a validação falhar.',
      },
    },
  },
};

/**
 * Estado de aviso com borda amarela para alertas não críticos.
 */
export const Warning = {
  render: () => (
    <TextareaStory
      id="textarea-warning"
      title="Estado de aviso"
      State="warning"
      placeholder="Estado de aviso com borda amarela"
      initialValue="Este campo está em estado de aviso"
      description="Exibe borda amarela e badge de feedback 'Atenção'"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estado de aviso aplicado através da propriedade `State="warning"`. Exibe borda amarela e uma mensagem de atenção para alertar sobre algo que requer cuidado, mas não necessariamente impede o envio do formulário.',
      },
    },
  },
};

/**
 * Estado informativo com borda azul para contexto adicional.
 */
export const Info = {
  render: () => (
    <TextareaStory
      id="textarea-info"
      title="Estado informativo"
      State="info"
      placeholder="Estado informativo com borda azul"
      initialValue="Este campo está em estado informativo"
      description="Exibe borda azul e badge de feedback 'Informação'"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estado informativo aplicado através da propriedade `State="info"`. Exibe borda azul e uma mensagem informativa para fornecer contexto adicional, dicas úteis ou informações complementares sobre o campo.',
      },
    },
  },
};

/**
 * Variante otimizada para fundos escuros.
 */
export const DarkMode = {
  render: () => (
    <div style={{ background: '#071d41', padding: '2rem', borderRadius: '4px' }}>
      <TextareaStory
        id="textarea-dark"
        title="Modo escuro"
        darkMode={true}
        placeholder="Textarea em modo escuro..."
        initialValue="Este textarea usa o estilo de modo escuro"
        description="O textarea está estilizado para fundos escuros"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Variante otimizada para fundos escuros ativada pela propriedade `darkMode={true}`. Esta versão ajusta cores, contrastes e opacidades para garantir legibilidade e acessibilidade em seções com fundo escuro.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

/**
 * Demonstra o comportamento com texto longo e múltiplas linhas.
 */
export const LongText = {
  render: () => (
    <TextareaStory
      id="textarea-long"
      title="Área de texto com texto longo"
      initialValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo demonstrando o comportamento do componente quando preenchido com texto longo e múltiplas linhas. O textarea se ajusta automaticamente ao conteúdo, expandindo verticalmente conforme necessário.',
      },
    },
  },
};

/**
 * Demonstra validação quando o limite de caracteres é excedido.
 */
export const MaxLengthWithError = {
  render: () => (
    <TextareaStory
      id="textarea-maxerror"
      title="Validação de limite de caracteres"
      maxLength={50}
      placeholder="Máximo de 50 caracteres..."
      initialValue="Este texto já é bastante longo e vai disparar o erro quando você adicionar mais caracteres."
      description="Limite de 50 caracteres. A mensagem de erro aparece quando excedido."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstra o comportamento quando o campo já é inicializado com um valor que excede o limite de caracteres. O componente exibe uma mensagem de erro e impede a adição de novos caracteres, mas permite deletar.',
      },
    },
  },
};

/**
 * Playground interativo para experimentar todas as propriedades.
 */
export const Playground = {
  render: (args) => <TextareaStory {...args} />,
  args: {
    id: 'textarea-playground',
    title: 'Playground Textarea',
    placeholder: 'Enter text here...',
    description: 'This is a description',
    initialValue: '',
    size: undefined,
    State: undefined,
    darkMode: false,
    isDisabled: false,
    maxLength: undefined,
    left: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Experimente todas as propriedades do componente de forma interativa usando os controles abaixo. Altere valores, estados e tamanhos para ver como o componente reage.',
      },
    },
  },
};

export default {
  title: 'GovRS DS/Widgets/CustomTextarea',
  component: CustomTextarea,
  decorators: [
    (Story) => (
      <div className="ui segment form attached" style={{ width: '600px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'O componente CustomTextarea é um campo de entrada de texto multilinha totalmente estilizado e acessível, seguindo as diretrizes do Design System do Governo do Rio Grande do Sul. Oferece suporte a validação, estados visuais, feedback contextual e múltiplas variantes de tamanho e layout.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Identificador único do campo textarea',
      table: {
        type: { summary: 'string' },
        category: 'Obrigatório',
      },
    },
    title: {
      control: 'text',
      description: 'Texto do rótulo (label) exibido acima do textarea',
      table: {
        type: { summary: 'string' },
        category: 'Obrigatório',
      },
    },
    value: {
      control: 'text',
      description: 'Valor atual do textarea',
      table: {
        type: { summary: 'string' },
        category: 'Obrigatório',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Função callback chamada quando o valor muda. Recebe o novo valor como string.',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'Obrigatório',
      },
    },
    description: {
      control: 'text',
      description: 'Texto descritivo opcional exibido abaixo do textarea para orientar o usuário',
      table: {
        type: { summary: 'string' },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder exibido quando o textarea está vazio',
      table: {
        type: { summary: 'string' },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Número máximo de caracteres permitidos. Exibe mensagem de erro quando excedido.',
      table: {
        type: { summary: 'number' },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o textarea quando verdadeiro, impedindo edição',
      table: {
        type: { summary: 'boolean' },
        category: 'Opcional',
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: [undefined, 'small', 'large'],
      description: 'Variante de tamanho do textarea. Afeta o padding interno e altura mínima.',
      table: {
        type: { summary: "'small' | 'large'" },
        category: 'Opcional',
        defaultValue: { summary: 'medium (padrão)' },
      },
    },
    State: {
      control: 'select',
      options: [undefined, 'success', 'error', 'warning', 'info'],
      description: 'Estado visual do textarea. Altera a cor da borda e exibe mensagem de feedback com ícone.',
      table: {
        type: { summary: "'success' | 'error' | 'warning' | 'info'" },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    darkMode: {
      control: 'boolean',
      description: 'Ativa o estilo de modo escuro para o textarea (para fundos escuros)',
      table: {
        type: { summary: 'boolean' },
        category: 'Opcional',
        defaultValue: { summary: 'false' },
      },
    },
    left: {
      control: 'boolean',
      description: 'Posiciona o rótulo à esquerda do textarea ao invés de acima',
      table: {
        type: { summary: 'boolean' },
        category: 'Opcional',
        defaultValue: { summary: 'false' },
      },
    },
  },
};
