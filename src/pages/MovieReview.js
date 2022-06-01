import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../services/movies-api';

export default function MovieReview({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map((element, index) => (
              <li key={index}>
                <p>{element.author}</p>
                <p>{element.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
}
