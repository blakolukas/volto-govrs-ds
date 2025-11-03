import React from 'react';
import '../../theme/components/Search.scss';

export default {
  title: 'Widgets/Search',
  parameters: { layout: 'padded' },
};

const Demo = () => (
  <div style={{ padding: 12 }}>
    <form className="govrs-search">
      <div className="s-wrapper">
        <input
          type="text"
          className="s-input"
          placeholder="Placeholder"
          aria-label="Pesquisar"
        />
        <button id="s-logo" aria-label="Pesquisar">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
);

export const SearchDocumentacao = () => (
  <div>
    <div style={{ display: 'block', padding: 12, maxWidth: 800 }}>
      <h3 style={{ marginTop: 0 }}>Search</h3>
      <Demo />

      <div style={{ paddingTop: 12 }}>
        <p style={{ color: '#444' }}>
          Use a classe <code>govrs-search</code> no <code>form</code>, e a
          marcação interna com <code>.s-wrapper</code>, <code>.s-input</code> e
          <code>#s-logo</code> para que o estilo do design system seja aplicado.
        </p>
      </div>

      <h4 style={{ marginTop: 12 }}>Exemplo de marcação</h4>
      <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}>
        <code>{`<form class="govrs-search">
  <div class="s-wrapper">
    <input class="s-input" name="SearchableText" placeholder="Buscar" />
    <button id="s-logo">[ícone]</button>
  </div>
</form>`}</code>
      </pre>
    </div>
  </div>
);

SearchDocumentacao.storyName = 'Search Documentacao';

export const SearchInterativo = ({ disabled }) => (
  <div style={{ padding: 12 }}>
    <form className="govrs-search">
      <div className="s-wrapper" aria-disabled={disabled ? 'true' : 'false'}>
        <input
          type="text"
          className="s-input"
          placeholder="Pesquisar..."
          aria-label="Pesquisar"
          disabled={disabled}
        />
        <button id="s-logo" aria-label="Pesquisar" disabled={disabled}>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
);

SearchInterativo.storyName = 'Search Interativo';
SearchInterativo.args = { disabled: false };
SearchInterativo.argTypes = { disabled: { control: 'boolean' } };

export const SearchEmFormulario = () => {
  const [text, setText] = React.useState('');
  const [submitted, setSubmitted] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(text);
  };

  return (
    <div style={{ padding: 12, maxWidth: 700 }}>
      <form className="govrs-search" onSubmit={handleSubmit}>
        <div className="s-wrapper">
          <input
            type="text"
            className="s-input"
            name="SearchableText"
            placeholder="Pesquisar..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Pesquisar"
          />
          <button id="s-logo" aria-label="Pesquisar">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
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
          {submitted === null ? (
            <em>Nenhum envio ainda</em>
          ) : (
            <span>{submitted}</span>
          )}
        </div>
      </div>
    </div>
  );
};

SearchEmFormulario.storyName = 'Search em Formulário';
