import React, { useRef, useState } from 'react';
import '../../../theme/Formularios/Upload.scss';

const UploadInput = ({
  id,
  name,
  multiple = false,
  accept,
  disabled = false,
  className,
  onChange,
  onUpload,
  maxFileSize,
  maxFiles,
}) => {
  const generatedIdRef = useRef(null);
  if (generatedIdRef.current == null) {
    generatedIdRef.current = `upload-${Math.random().toString(36).slice(2, 7)}`;
  }
  const inputId = id || generatedIdRef.current;
  const inputRef = useRef(null);
  const [hasFiles, setHasFiles] = useState(false);
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState('');
  const [liveMessage, setLiveMessage] = useState('');
  const [internalLoading, setInternalLoading] = useState(false);

  const fileMatchesAccept = (file, acceptStr) => {
    if (!acceptStr) return true;
    const parts = acceptStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts.length === 0) return true;
    const name = file.name || '';
    const type = file.type || '';
    for (const p of parts) {
      if (p === '*/*') return true;
      if (p.endsWith('/*')) {
        const prefix = p.replace(/\/\*$/, '');
        if (type.startsWith(prefix)) return true;
        continue;
      }
      if (p.startsWith('.')) {
        if (name.toLowerCase().endsWith(p.toLowerCase())) return true;
        continue;
      }
      // mime type exact match
      if (type === p) return true;
    }
    return false;
  };

  const convertMBToBytes = (v) => {
    if (v == null) return null;
    if (typeof v === 'number' && !Number.isNaN(v))
      return Math.round(v * 1024 * 1024);
    return null;
  };

  const clearSelection = () => {
    if (inputRef.current) inputRef.current.value = '';
    setHasFiles(false);
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleChange = async (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    if (maxFiles && files.length > maxFiles) {
      const msg = `Número máximo de arquivos: ${maxFiles}`;
      setInvalid(true);
      setValid(false);
      setMessage(msg);
      setLiveMessage(msg);
      clearSelection();
      if (onChange) onChange([]);
      return;
    }

    const maxFileSizeBytes = convertMBToBytes(maxFileSize);
    if (maxFileSizeBytes) {
      const bad = files.find((f) => f.size > maxFileSizeBytes);
      if (bad) {
        const msg = `O arquivo excede o tamanho máximo de ${maxFileSize} MB`;
        setInvalid(true);
        setValid(false);
        setMessage(msg);
        setLiveMessage(msg);
        clearSelection();
        if (onChange) onChange([]);
        return;
      }
    }

    if (accept) {
      const bad = files.find((f) => !fileMatchesAccept(f, accept));
      if (bad) {
        const msg = `Arquivo com formato inválido: ${bad.name}`;
        setInvalid(true);
        setValid(false);
        setMessage(msg);
        setLiveMessage(msg);
        clearSelection();
        if (onChange) onChange([]);
        return;
      }
    }

    if (files.length > 0) {
      if (typeof onUpload === 'function') {
        try {
          setInternalLoading(true);
          await Promise.resolve(onUpload(files));
          setUploadedFiles((prev) => [...prev, ...files]);
          setHasFiles(true);
          setValid(true);
          setInvalid(false);
          const okMsg = 'Upload concluído';
          setMessage(okMsg);
          setLiveMessage(okMsg);
          if (onChange) onChange(files);
        } catch (err) {
          const errMsg =
            err && err.message
              ? `Falha no carregamento do arquivo: ${err.message}`
              : 'Falha no carregamento do arquivo';
          setInvalid(true);
          setValid(false);
          setMessage(errMsg);
          setLiveMessage(errMsg);
          if (onChange) onChange([]);
        } finally {
          setInternalLoading(false);
          clearSelection();
        }
      } else {
        setUploadedFiles((prev) => [...prev, ...files]);
        setHasFiles(files.length > 0);
        setValid(files.length > 0);
        setInvalid(false);
        const okMsg = files.length > 0 ? 'Arquivos selecionados' : '';
        setMessage(okMsg);
        setLiveMessage(okMsg);
        if (onChange) onChange(files);
        clearSelection();
      }
    }
  };

  const feedbackId = `${inputId}-feedback`;

  return (
    <div
      className={`upload-root ${className || ''} ${invalid ? 'upload-root--invalid' : ''} ${disabled ? 'upload-root--disabled' : ''}`}
    >
      <input
        id={inputId}
        ref={inputRef}
        type="file"
        name={name}
        multiple={multiple}
        accept={accept}
        disabled={disabled}
        onChange={handleChange}
        className="upload-native"
        aria-label="Envio de arquivos"
        aria-invalid={invalid}
        aria-describedby={feedbackId}
      />

      <label
        htmlFor={inputId}
        className={`upload-btn ${hasFiles ? 'hover-like' : ''}`}
      >
        <span className="upload-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
          >
            <path d="M9.25 13H6.75C6.3125 13 6 12.6875 6 12.25V7H3.25C2.6875 7 2.40625 6.34375 2.8125 5.9375L7.5625 1.1875C7.78125 0.96875 8.1875 0.96875 8.40625 1.1875L13.1562 5.9375C13.5625 6.34375 13.2812 7 12.7188 7H10V12.25C10 12.6875 9.65625 13 9.25 13ZM16 12.75V16.25C16 16.6875 15.6562 17 15.25 17H0.75C0.3125 17 0 16.6875 0 16.25V12.75C0 12.3438 0.3125 12 0.75 12H5V12.25C5 13.2188 5.78125 14 6.75 14H9.25C10.1875 14 11 13.2188 11 12.25V12H15.25C15.6562 12 16 12.3438 16 12.75ZM12.125 15.5C12.125 15.1562 11.8438 14.875 11.5 14.875C11.1562 14.875 10.875 15.1562 10.875 15.5C10.875 15.8438 11.1562 16.125 11.5 16.125C11.8438 16.125 12.125 15.8438 12.125 15.5ZM14.125 15.5C14.125 15.1562 13.8438 14.875 13.5 14.875C13.1562 14.875 12.875 15.1562 12.875 15.5C12.875 15.8438 13.1562 16.125 13.5 16.125C13.8438 16.125 14.125 15.8438 14.125 15.5Z" />
          </svg>
        </span>

        <span className="upload-label">Selecione o(s) arquivo(s)</span>
      </label>

      {internalLoading && (
        <div className="upload-loading" aria-live="polite">
          <span className="upload-spinner" aria-hidden="true"></span>
          <span className="upload-loading-text">Carregando...</span>
        </div>
      )}

      <div
        className="upload-live"
        aria-live="polite"
        style={{ position: 'absolute', left: -9999 }}
      >
        {liveMessage}
      </div>

      <div style={{ marginTop: 8 }}>
        <div
          id={feedbackId}
          className={`upload-feedback ${valid ? 'upload-feedback--valid' : ''} ${invalid ? 'upload-feedback--invalid' : ''} ${disabled ? 'upload-feedback--disabled' : ''}`}
          role="status"
          aria-live="polite"
        >
          {invalid
            ? message
            : valid
              ? 'Campo correto'
              : disabled
                ? 'Campo desabilitado'
                : ''}
        </div>
      </div>

      {uploadedFiles && uploadedFiles.length > 0 && (
        <div className="upload-list" aria-live="polite">
          {uploadedFiles.map((f, i) => (
            <div key={`${f.name}-${i}`} className="upload-item">
              <div className="upload-item__content">{f.name}</div>
              <button
                type="button"
                className="upload-item__remove"
                onClick={() => {
                  const next = uploadedFiles.filter((_, idx) => idx !== i);
                  setUploadedFiles(next);
                  if (onChange) onChange(next);
                }}
                aria-label={`Remover ${f.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadInput;
