import { useHistory } from 'react-router-dom';

export default function NotFoundView() {
  const history = useHistory();

  const onGoBack = () => {
    history.push('/');
  };
  return (
    <>
      <h2>404 Not Found </h2>
      <button type="button" onClick={onGoBack}>
        Go home
      </button>
    </>
  );
}
