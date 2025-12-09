import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '@plone/volto/actions';
import './LocalData.css';

function LocalData({ url }) {
  const dispatch = useDispatch();

  // Use subrequest to store data separately from current page
  const localData = useSelector(
    (state) => state.content.subrequests?.local?.data,
  );
  const loading = useSelector(
    (state) => state.content.subrequests?.local?.loading,
  );
  const error = useSelector((state) => state.content.subrequests?.local?.error);

  useEffect(() => {
    // Fetch from the specified URL with subrequest key 'local'
    // Third parameter 'local' keeps this data separate from state.content.data
    dispatch(getContent(url || '/local', null, 'local'));
  }, [dispatch, url]);

  // Handle loading state
  if (loading) {
    return <div className="local-data-loading">Carregando...</div>;
  }

  // Handle empty data
  if (!localData) {
    return null;
  }

  // Display the logradouro and other data
  return (
    <div className="local-data">
      {localData.title && (
        <h2 className="local-data__title">{localData.title}</h2>
      )}
      {localData.logradouro && (
        <div className="local-data__logradouro">{localData.logradouro}, {localData.numero}</div>
      )}
    </div>
  );
}

export default LocalData;
