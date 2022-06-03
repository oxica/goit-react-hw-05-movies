import { useState, useEffect } from 'react';
import { getMovieCast, IMAGE_URL } from '../services/movies-api';
import PropTypes from 'prop-types';

export default function MovieCastView({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const { cast } = await getMovieCast(movieId);
      setCast(cast);
    };

    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? IMAGE_URL + profile_path
                  : `https://bitsofco.de/content/images/2018/12/broken-1.png`
              }
              alt={name}
              width="100"
              height=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

MovieCastView.propTypes = {
  movieId: PropTypes.string.isRequired,
};
