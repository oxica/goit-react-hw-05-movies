import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  return (
    <>
      <h1>Film {`${movieId}`}</h1>
    </>
  );
}
