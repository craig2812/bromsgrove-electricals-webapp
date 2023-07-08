import React, { useState } from 'react';
import { addReview, Review } from '../../firebase/firebaseController';
import '../../pages/page.css';



const ReviewForm: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState(0);
  const [isShown, setIsShown] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate the ID based on the current time
    const id = new Date().getTime();

    // Create the review object
     const review: Review = {
      id,
      author,
      message,
      service,
      rating,
      isShown,
      date: new Date().getDate().toString(),
    };

    // Call the onSubmit function with the review object
    addReview(review).then(() => window.location.reload())

    // Reset the form fields
    setAuthor('');
    setMessage('');
    setService('');
    setRating(0);
    setIsShown(true);
  };

  return (
    <div className="page-container">
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          min={0}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="isShown">Is Shown:</label>
        <input
          type="checkbox"
          id="isShown"
          checked={isShown}
          onChange={(e) => setIsShown(e.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ReviewForm;
