import { Reviews } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { deleteReview, fetchReviews, Review } from '../../firebase/firebaseController';

const reviewArray: Review[] = [{
    author: '',
    message: '',
    id: 1,
    service: '',
    date: '',
    isShown: false,
    rating: 5
}]





export const ReviewDisplay: React.FC = (isAdmin) => {
    const [reviews, setReviews] = useState(reviewArray);


    React.useEffect(() => {
        fetchReviews().then((rev) => setReviews(rev))
    }, []);

    const [startIndex, setStartIndex] = useState(0);

    const handleNextReviews = () => {
      setStartIndex((prevIndex) => prevIndex + 2);
    };
  
    const handlePreviousReviews = () => {
      setStartIndex((prevIndex) => prevIndex - 2);
    };

    const handleDeleteReview = (review: Review) => {
deleteReview(review).then(() => window.location.reload())
    }
  
    const visibleReviews = reviews.slice(startIndex, startIndex + 2);
  
    return (
        <div style={{ ...reviewDisplayContainerStyle as React.CSSProperties, minWidth: '300px' }}>
        <div style={reviewListStyle as React.CSSProperties}>
          {visibleReviews.map((review) => (
            <div key={review.id} style={reviewBoxStyle as React.CSSProperties}>
              <h3>{review.author}</h3>
              <p>{review.message}</p>
              <p>Service: {review.service}</p>
              <p>Rating: {review.rating}</p>
              <p>Date: {review.date.toString()}</p>
              <button hidden={!window.location.href.endsWith('admin')} onClick={() => (handleDeleteReview(review))}>Delete</button>
            </div>
          ))}
        </div>
        <div style={buttonContainerStyle as React.CSSProperties}>
          <button
            onClick={handlePreviousReviews}
            disabled={startIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextReviews}
            disabled={startIndex + 2 >= reviews.length}
          >
            Next
          </button>
        </div>
      </div>
    );
  };


  const reviewDisplayContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  };
  
  const reviewListStyle = {
    display: 'flex',
  };
  
  const reviewBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
    flex: 1,
    minWidth: '300px',
    boxSizing: 'border-box',
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

