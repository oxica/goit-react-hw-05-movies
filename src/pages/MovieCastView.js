import { useState, useEffect } from 'react';
import { fetchMovieCast, IMAGE_URL } from '../services/movies-api';

export default function MovieCastView({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(request => setCast(request.cast));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(element => (
          <li key={element.id}>
            <img
              src={
                element.profile_path
                  ? IMAGE_URL + element.profile_path
                  : `https://bitsofco.de/content/images/2018/12/broken-1.png`
              }
              alt={element.name}
              width="100"
              height=""
            />
            <p>{element.name}</p>
            <p>Character: {element.character}</p>
          </li>
        ))}
    </ul>
  );
}
