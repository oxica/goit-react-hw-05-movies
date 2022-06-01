import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById, IMAGE_URL } from '../../services/movies-api';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);
  console.log(movieId);
  return (
    <>
      {movie && (
        <div className={s.movieContainer}>
          <div className={s.movieImg}>
            <img
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              widht=""
              height=""
            />
          </div>

          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {`${movie.vote_average}`}</p>
            <h3>Overview</h3>
            <p>{`${movie.overview}`}</p>
            <h3>Genres</h3>
            <p>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
          </div>
        </div>
      )}
      <p>Additional information</p>
    </>
  );
}
