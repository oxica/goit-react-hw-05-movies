import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <h2>{movie.title || movie.name}</h2>
        </>
      )}
    </>
  );
}
