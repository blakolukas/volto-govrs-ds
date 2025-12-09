import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '@plone/volto/actions';
import './LocalData.css';

function LocalData({ url }) {
  const dispatch = useDispatch();

  const localData = useSelector(
    (state) => state.content.subrequests?.local?.data,
  );
  const loading = useSelector(
    (state) => state.content.subrequests?.local?.loading,
  );

  useEffect(() => {
    dispatch(getContent(url || '/local', null, 'local'));
  }, [dispatch, url]);

  if (loading) {
    return <div className="local-data-loading">Carregando...</div>;
  }

  if (!localData) {
    return null;
  }

  // Helper function to safely extract string values from potential object fields
  const getValue = (field) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    if (typeof field === 'object' && field.title) return field.title;
    return '';
  };

  const municipio = getValue(localData.municipio);
  const estado = getValue(localData.estado);

  return (
    <>
      <span className="footer-separator" />
      <div className="local-data">
        {localData.title && (
          <h2 className="local-data__title">{localData.title}</h2>
        )}
        {localData.logradouro && (
          <div className="local-data__logradouro">{localData.logradouro}, {localData.numero} 
            {localData.numero && localData.complemento ? ' - ' : ''}
            {localData.complemento}
          </div>
        )}
        {localData.bairro && (
          <div className="local-data__bairro">{localData.bairro}</div>
        )}
        {(municipio || estado) && (
          <div className="local-data__municipio-estado">
            {municipio}
            {municipio && estado ? ' - ' : ''}
            {estado}
          </div>
        )}
        {localData.CEP && (
          <div className="local-data__cep">CEP: {localData.CEP}</div>
        )}
      </div>
    </>
  );
}

export default LocalData;
