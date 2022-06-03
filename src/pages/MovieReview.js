import { useState, useEffect } from 'react';
import { getReviews } from '../services/movies-api';
import PropTypes from 'prop-types';

export default function MovieReview({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const { results } = await getReviews(movieId);
      setReviews(results);
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
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
