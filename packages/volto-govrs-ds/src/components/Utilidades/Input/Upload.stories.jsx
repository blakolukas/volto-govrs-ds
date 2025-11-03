import React from 'react';
import '../../../theme/Formularios/Upload.scss';
import Upload from './Upload';
import Badges from '../../Badges/Badges';

export default {
  title: 'Forms/Upload',
  parameters: { layout: 'padded' },
};

export const UploadDocumentacao = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 720 }}>
    <div style={{ width: 550 }}>
      <Upload maxFiles={3} maxFileSize={2} multiple onChange={() => {}} />
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
      <h4 style={{ margin: '4px 0' }}>Uso e atributos do componente Upload</h4>
      <p>
        Componente visual para seleção de arquivos que preserva o input nativo
        no DOM para permitir envio via formulários. Use os atributos abaixo para
        controlar limites e comportamento.
      </p>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>maxFiles</h5>
        <p>
          Número máximo de arquivos permitidos na seleção. Ao exceder este
          valor, o componente considera a seleção inválida e (por padrão) limpa
          a seleção e anuncia o erro via aria-live.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload maxFiles={3} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>maxFileSize</h5>
        <p>
          Tamanho máximo permitido por arquivo. A prop aceita apenas um número
          que representa megabytes (MB). Ex.: <code>2</code> = 2 MB. Se algum
          arquivo exceder este limite a seleção é considerada inválida.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload maxFileSize={2} /> // Equivalente a 2 MB`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>multiple</h5>
        <p>
          Habilita seleção de múltiplos arquivos. Geralmente usado junto com
          <code>maxFiles</code> para limitar a quantidade.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload multiple maxFiles={5} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>
          accept{' '}
          <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
        </h5>
        <p>
          Filtro de tipos aceitos (mesmo formato do atributo do input nativo):
          ex.: <code>image/*</code>, <code>.pdf</code>, <code>.jpg,.png</code>.
          Se <strong>nenhum</strong> valor for informado para{' '}
          <code>accept</code>, o componente não adicionará o atributo no input
          nativo e o comportamento padrão do browser será permitido — ou seja,
          serão aceitos todos os tipos de arquivo.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload accept="image/*" />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>onChange</h5>
        <p>
          Callback chamada com o array de arquivos selecionados quando uma
          seleção válida é concluída. Assinatura:{' '}
          <code>onChange(files: File[])</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload onChange={(files) => console.log(files)} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>
          disabled{' '}
          <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
        </h5>
        <p>
          Quando <code>disabled</code> é verdadeiro, o controle visual fica
          desabilitado e não aceita interação do usuário (comportamento igual ao
          do atributo nativo <code>disabled</code>). O input nativo também
          recebe o atributo <code>disabled</code>, garantindo que o campo não
          seja enviado em formulários.
        </p>

        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload disabled />`}</code>
        </pre>

        <div style={{ marginTop: 8 }}>
          <Upload disabled maxFiles={3} maxFileSize={2} onChange={() => {}} />
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>
          renderFeedback{' '}
          <small style={{ fontWeight: 400, color: '#666' }}>(opcional)</small>
        </h5>
        <p>
          Função que permite ao consumidor renderizar o elemento de feedback
          (por exemplo, uma <code>Badge</code>) usando o estado interno do
          componente Upload. A função recebe um objeto com informações úteis
          (arquivos selecionados, flags de validade, mensagens de erro, etc.) e
          deve retornar um nó React a ser exibido abaixo do botão.
        </p>

        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Upload renderFeedback={({ invalid, error, valid, disabled }) => {
  if (invalid) return <Badges variant="error" message={error} />;
  if (valid) return <Badges variant="success" message="Campo correto" />;
  if (disabled) return <Badges variant="warning" message="Campo desabilitado" />;
  return null;
}} />`}</code>
        </pre>

        <div style={{ marginTop: 8 }}>
          <Upload
            maxFiles={3}
            maxFileSize={2}
            onChange={() => {}}
            renderFeedback={({ invalid, error, valid, disabled }) => {
              if (invalid)
                return (
                  <Badges
                    variant="error"
                    message={error || 'Arquivo inválido'}
                  />
                );
              if (valid)
                return <Badges variant="success" message="Campo correto" />;
              if (disabled)
                return (
                  <Badges variant="warning" message="Campo desabilitado" />
                );
              return null;
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

UploadDocumentacao.story = { name: 'Documentação Upload' };

export const UploadInterativo = (args) => {
  const { useState } = React;
  const [files, setFiles] = useState([]);

  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: '100%', maxWidth: 720 }}>
        <Upload
          {...args}
          onChange={(f) => {
            setFiles(f);
          }}
        />

        <div style={{ marginTop: 8, fontSize: 13, color: '#444' }}>
          Selecionado:{' '}
          {files && files.length ? files.map((f) => f.name).join(', ') : '—'}
        </div>
      </div>
    </div>
  );
};

UploadInterativo.argTypes = {
  maxFiles: { control: 'number' },
  maxFileSize: { control: 'number' },
  multiple: { control: 'boolean' },
  disabled: { control: 'boolean' },
  accept: { control: 'text' },
};

UploadInterativo.args = {
  maxFiles: 3,
  maxFileSize: 2,
  multiple: true,
  disabled: false,
  accept: '',
};

UploadInterativo.story = { name: 'Upload Interativo' };

export const UploadEmFormularios = () => {
  const { useState } = React;
  const [filesA, setFilesA] = useState([]);
  const [filesB, setFilesB] = useState([]);
  const [submitLog, setSubmitLog] = useState([]);

  const mockOnUpload = (f) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), 1500);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = [
      { id: 'uploader-a', files: filesA },
      { id: 'uploader-b', files: filesB },
    ];

    const lines = [];
    payload.forEach((p) => {
      if (!p.files || p.files.length === 0) {
        lines.push(`Field ${p.id}: (no files)`);
      } else {
        p.files.forEach((f) => {
          const line = `Field ${p.id}: ${f.name}`;
          lines.push(line);
        });
      }
    });

    setSubmitLog(lines);
  };

  return (
    <div style={{ padding: 16 }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 720,
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Upload A (id: uploader-a)
          </label>
          <Upload
            id="uploader-a"
            maxFiles={3}
            maxFileSize={2}
            multiple
            onUpload={mockOnUpload}
            onChange={(f) => setFilesA(f)}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Upload B (id: uploader-b)
          </label>
          <Upload
            id="uploader-b"
            maxFiles={3}
            maxFileSize={2}
            multiple
            onUpload={mockOnUpload}
            onChange={(f) => setFilesB(f)}
          />
        </div>

        <button
          type="submit"
          style={{
            width: 140,
            height: 40,
            background: '#1A7235',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Enviar
        </button>
      </form>

      <div style={{ marginTop: 16 }}>
        <strong>Resultado do submit:</strong>
        <div
          style={{
            marginTop: 8,
            padding: 12,
            background: '#f7f7f7',
            borderRadius: 6,
            minHeight: 36,
          }}
        >
          {submitLog && submitLog.length ? (
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {submitLog.map((l, i) => (
                <li key={i} style={{ fontSize: 13 }}>
                  {l}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: '#666', fontSize: 13 }}>
              Nenhum dado enviado ainda.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

UploadEmFormularios.story = { name: 'Upload em Formulários' };
