import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../services/movies-api';
import PropTypes from 'prop-types';

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
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}

MovieReview.propTypes = {
  movieId: PropTypes.string.isRequired,
};
